// Yalla Gift — filtering, basket and UI behaviour.
(() => {
  const $ = (sel) => document.querySelector(sel);
  const fmt = (n) => n.toLocaleString("en-US");
  const occasionById = Object.fromEntries(OCCASIONS.map((o) => [o.id, o]));
  const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
  const productById = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

  const state = { occasion: "all", band: "all", cat: "all", sort: "featured", query: "", goldType: "all" };

  // Browser storage is optional; the page works without it.
  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
    },
  };
  let basket = store.get("yg-basket", {});
  let favs = new Set(store.get("yg-favs", []));

  // A band's lower bound is exclusive so 500 EGP belongs to "200 – 500", not both.
  const inBand = (price, band) => price > (band.id === "b1" ? 0 : band.min) && price <= band.max;
  const bandById = Object.fromEntries(PRICE_BANDS.map((b) => [b.id, b]));

  function matches(p, { ignoreBand = false } = {}) {
    if (state.occasion !== "all" && !p.occasions.includes(state.occasion)) return false;
    if (state.cat !== "all" && p.cat !== state.cat) return false;
    if (!ignoreBand && state.band !== "all" && !inBand(p.price, bandById[state.band])) return false;
    if (state.query) {
      const hay = `${p.name} ${catById[p.cat].label} ${p.karat || ""} ${p.type || ""} ${p.occasions.map((o) => occasionById[o].name).join(" ")}`.toLowerCase();
      if (!hay.includes(state.query)) return false;
    }
    return true;
  }

  // ---------- Rendering ----------
  const heart = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>`;

  function cardHTML(p) {
    const gold = p.cat === "gold";
    const badge = p.badge ? `<span class="card__badge ${gold ? "card__badge--gold" : ""}">${p.badge}</span>` : "";
    const meta = gold
      ? `<div class="card__meta"><span class="card__pill">${p.karat}</span>${p.weight !== "—" ? `<span class="card__pill">${p.weight}</span>` : ""}</div>`
      : `<div class="card__occ" title="${p.occasions.map((o) => occasionById[o].name).join(", ")}">${p.occasions.map((o) => occasionById[o].emoji).join("")}</div>`;
    return `
      <article class="card">
        <div class="card__media">
          <img src="${IMG(p.img, 600)}" alt="${p.name}" loading="lazy" data-fallback />
          ${badge}
          <button class="card__fav ${favs.has(p.id) ? "is-on" : ""}" data-fav="${p.id}" aria-label="Save ${p.name}" aria-pressed="${favs.has(p.id)}">${heart}</button>
        </div>
        <div class="card__body">
          <span class="card__cat">${gold ? p.type : catById[p.cat].label}</span>
          <h3 class="card__name">${p.name}</h3>
          ${meta}
          <div class="card__foot">
            <span class="card__price"><small>EGP</small>${fmt(p.price)}</span>
            <button class="card__add" data-add="${p.id}">Add to basket</button>
          </div>
        </div>
      </article>`;
  }

  function renderOccasionGrid() {
    $("#occasionGrid").innerHTML = OCCASIONS.map((o) => `
      <button class="occasion ${state.occasion === o.id ? "is-active" : ""}" data-occasion="${o.id}">
        <img src="${IMG(o.img, 500)}" alt="" loading="lazy" data-fallback />
        <span class="occasion__body">
          <span class="occasion__emoji">${o.emoji}</span>
          <span class="occasion__name">${o.name}</span>
          <span class="occasion__tag">${o.tagline}</span>
        </span>
      </button>`).join("");
  }

  function renderPriceTabs() {
    $("#priceTabs").innerHTML = PRICE_BANDS.map((b) => {
      const count = PRODUCTS.filter((p) => matches(p, { ignoreBand: true }) && (b.id === "all" || inBand(p.price, b))).length;
      return `<button class="price-tab ${state.band === b.id ? "is-active" : ""}" role="tab" aria-selected="${state.band === b.id}" data-band="${b.id}">
        ${b.label}${b.id === "all" ? "" : " <small>EGP</small>"} <small>(${count})</small></button>`;
    }).join("");
  }

  function renderChips() {
    $("#occasionChips").innerHTML = [{ id: "all", name: "All occasions", emoji: "🎁" }, ...OCCASIONS]
      .map((o) => `<button class="chip ${state.occasion === o.id ? "is-active" : ""}" data-occasion="${o.id}">${o.emoji} ${o.name}</button>`).join("");
    $("#categoryChips").innerHTML = CATEGORIES
      .map((c) => `<button class="chip ${state.cat === c.id ? "is-active" : ""}" data-cat="${c.id}">${c.label}</button>`).join("");
  }

  function renderProducts() {
    let list = PRODUCTS.filter((p) => matches(p));
    if (state.sort === "low") list.sort((a, b) => a.price - b.price);
    if (state.sort === "high") list.sort((a, b) => b.price - a.price);

    const occ = occasionById[state.occasion];
    $("#giftsEyebrow").textContent = occ ? `${occ.emoji} ${occ.name}` : "All occasions";
    $("#giftsTitle").textContent = occ ? `Gift ideas for ${occ.name.toLowerCase()}` : "Gift ideas for you";
    const band = bandById[state.band];
    $("#resultsCount").textContent = `${list.length} gift${list.length === 1 ? "" : "s"}${band.id !== "all" ? ` between EGP ${band.label}` : ""}`;

    const filtered = state.occasion !== "all" || state.band !== "all" || state.cat !== "all" || state.query;
    $("#resetFilters").hidden = !filtered;

    $("#productGrid").innerHTML = list.length
      ? list.map(cardHTML).join("")
      : `<div class="empty"><h3>No gifts here… yet 🎁</h3><p>Nothing matches these filters. Try another budget or occasion.</p><button class="btn btn--primary" data-reset>Show all gifts</button></div>`;
  }

  function renderGold() {
    $("#goldTabs").innerHTML = GOLD_TYPES.map((t) =>
      `<button class="gold-tab ${state.goldType === t.id ? "is-active" : ""}" role="tab" aria-selected="${state.goldType === t.id}" data-gold="${t.id}">${t.label}</button>`).join("");
    const list = PRODUCTS.filter((p) => p.cat === "gold" && (state.goldType === "all" || p.type === state.goldType));
    $("#goldGrid").innerHTML = list.map(cardHTML).join("");
  }

  function renderFinder() {
    $("#finderOccasion").innerHTML = `<option value="all">Any occasion</option>` +
      OCCASIONS.map((o) => `<option value="${o.id}">${o.emoji} ${o.name}</option>`).join("");
    $("#finderBudget").innerHTML = PRICE_BANDS.map((b) => `<option value="${b.id}">${b.id === "all" ? "Any budget" : b.label}</option>`).join("");
  }

  function renderGifts() {
    renderPriceTabs();
    renderChips();
    renderProducts();
    document.querySelectorAll(".occasion").forEach((el) => el.classList.toggle("is-active", el.dataset.occasion === state.occasion));
  }

  // ---------- Basket ----------
  function renderBasket() {
    const entries = Object.entries(basket).filter(([id]) => productById[id]);
    const count = entries.reduce((n, [, q]) => n + q, 0);
    const total = entries.reduce((n, [id, q]) => n + productById[id].price * q, 0);
    $("#basketCount").textContent = count;
    $("#basketTotal").textContent = `EGP ${fmt(total)}`;
    $("#basketList").innerHTML = entries.length
      ? entries.map(([id, q]) => {
          const p = productById[id];
          return `<li class="drawer__item">
            <img src="${IMG(p.img, 160)}" alt="" />
            <div><strong>${p.name}</strong><span>EGP ${fmt(p.price)}</span></div>
            <div class="drawer__qty"><button data-dec="${id}" aria-label="Remove one">−</button><b>${q}</b><button data-inc="${id}" aria-label="Add one">+</button></div>
          </li>`;
        }).join("")
      : `<li class="drawer__empty"><div>🎁</div><p>Your basket is empty.<br/>Pick an occasion and start gifting!</p></li>`;
    store.set("yg-basket", basket);
  }

  function addToBasket(id) {
    basket[id] = (basket[id] || 0) + 1;
    renderBasket();
    const badge = $("#basketCount");
    badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
    toast(`🎁 ${productById[id].name} added to your basket`);
  }

  function setDrawer(open) {
    $("#drawer").classList.toggle("is-open", open);
    $("#drawer").setAttribute("aria-hidden", String(!open));
    $("#drawerBackdrop").hidden = !open;
  }

  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 2400);
  }

  function goToGifts() {
    $("#gifts").scrollIntoView({ behavior: "smooth" });
  }

  // ---------- Events ----------
  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, a");
    if (!t) return;
    const d = t.dataset;

    if (d.occasion) {
      state.occasion = d.occasion;
      renderGifts();
      if (t.classList.contains("occasion")) goToGifts();
    } else if (d.band) {
      state.band = d.band; renderGifts();
    } else if (d.cat) {
      state.cat = d.cat; renderGifts();
    } else if (d.gold) {
      state.goldType = d.gold; renderGold();
    } else if (d.add) {
      addToBasket(Number(d.add));
    } else if (d.fav) {
      const id = Number(d.fav);
      favs.has(id) ? favs.delete(id) : favs.add(id);
      store.set("yg-favs", [...favs]);
      document.querySelectorAll(`[data-fav="${id}"]`).forEach((b) => {
        b.classList.toggle("is-on", favs.has(id));
        b.setAttribute("aria-pressed", String(favs.has(id)));
      });
      toast(favs.has(id) ? "💖 Saved to your wishlist" : "Removed from wishlist");
    } else if (d.inc) {
      basket[d.inc]++; renderBasket();
    } else if (d.dec) {
      if (--basket[d.dec] <= 0) delete basket[d.dec];
      renderBasket();
    } else if ("reset" in d || t.id === "resetFilters") {
      Object.assign(state, { occasion: "all", band: "all", cat: "all", query: "" });
      $("#search").value = "";
      $("#sort").value = state.sort;
      renderGifts();
    }
  });

  $("#finder").addEventListener("submit", (e) => {
    e.preventDefault();
    state.occasion = $("#finderOccasion").value;
    state.band = $("#finderBudget").value;
    state.cat = "all";
    renderGifts();
    goToGifts();
  });

  $("#surpriseBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const pick = OCCASIONS[Math.floor(Math.random() * OCCASIONS.length)];
    Object.assign(state, { occasion: pick.id, band: "all", cat: "all" });
    renderGifts();
    goToGifts();
    toast(`✨ How about something for ${pick.name.toLowerCase()}?`);
  });

  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderProducts(); });

  let searchTimer;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value.trim().toLowerCase();
      renderGifts();
      if (state.query) goToGifts();
    }, 220);
  });

  $("#openBasket").addEventListener("click", () => setDrawer(true));
  $("#closeBasket").addEventListener("click", () => setDrawer(false));
  $("#drawerBackdrop").addEventListener("click", () => setDrawer(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setDrawer(false); });
  $("#checkoutBtn").addEventListener("click", () => {
    toast(Object.keys(basket).length ? "🚚 Demo checkout: in the real app, this goes to payment" : "Your basket is empty");
  });

  // Swap a broken photo for the branded gift icon.
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG" || !img.hasAttribute("data-fallback")) return;
    img.removeAttribute("data-fallback");
    img.src = "assets/gift-icon.png";
    img.parentElement.classList.add("is-fallback");
  }, true);

  // ---------- Init ----------
  renderFinder();
  renderOccasionGrid();
  renderGifts();
  renderGold();
  renderBasket();
})();
