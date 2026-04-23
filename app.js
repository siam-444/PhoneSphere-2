

const PAGE_SIZE = 10;
let allFiltered = [...PHONES];
let displayedCount = 0;
let compareList = JSON.parse(localStorage.getItem("ps_compare") || "[]");

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  applyFiltersAndRender();
  updateCompareBadge();
  bindEvents();
});

function bindEvents() {
  const si = document.getElementById("searchInput");
  const sh = document.getElementById("heroSearch");
  if (si) si.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(si.value); });
  if (sh) sh.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(sh.value); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

// ---- SEARCH ----
function doSearch(q) {
  if (document.getElementById("searchInput")) document.getElementById("searchInput").value = q;
  applyFiltersAndRender(q.trim());
  const browse = document.getElementById("browse");
  if (browse) browse.scrollIntoView({ behavior: "smooth" });
}
function performSearch() {
  const v = document.getElementById("searchInput")?.value || document.getElementById("heroSearch")?.value || "";
  doSearch(v);
}

// ---- BRAND FILTER ----
function filterBrand(brand) {
  document.querySelectorAll(".brand-pill").forEach(b => {
    b.classList.toggle("active", b.dataset.brand === brand || (brand === "" && b.dataset.brand === ""));
  });
  document.getElementById("brandFilter").value = brand;
  applyFiltersAndRender();
}

// ---- QUICK BUDGET ----
function setQuickBudget(min, max) {
  document.getElementById("minPrice").value = min || "";
  document.getElementById("maxPrice").value = (max >= 999999) ? "" : max;
  document.querySelectorAll(".qf-btn").forEach(b => b.classList.remove("active"));
  applyFiltersAndRender();
  document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" });
}

// ---- APPLY FILTERS ----
function applyFiltersAndRender(searchOverride) {
  const query = searchOverride !== undefined
    ? searchOverride
    : (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const minP = parseFloat(document.getElementById("minPrice")?.value) || 0;
  const maxP = parseFloat(document.getElementById("maxPrice")?.value) || Infinity;
  const brand = document.getElementById("brandFilter")?.value || "";
  const ram   = parseInt(document.getElementById("ramFilter")?.value) || 0;
  const sort  = document.getElementById("sortBy")?.value || "default";

  allFiltered = PHONES.filter(p => {
    let ok = p.price >= minP && p.price <= maxP;
    if (brand) ok = ok && p.brand === brand;
    if (ram)   ok = ok && parseInt(p.specs.ram) >= ram;
    if (query) ok = ok && (
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.specs.processor.toLowerCase().includes(query)
    );
    return ok;
  });

  if (sort === "price-asc")   allFiltered.sort((a,b) => a.price - b.price);
  else if (sort === "price-desc") allFiltered.sort((a,b) => b.price - a.price);
  else if (sort === "name-asc")   allFiltered.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === "rating-desc") allFiltered.sort((a,b) => b.rating - a.rating);

  displayedCount = 0;
  renderGrid(true);
  updateSectionTitle(query);
}

function applyFilters() { applyFiltersAndRender(); }

function resetFilters() {
  ["minPrice","maxPrice"].forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  ["brandFilter","ramFilter","sortBy","searchInput"].forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  document.querySelectorAll(".brand-pill").forEach(b => b.classList.toggle("active", b.dataset.brand === ""));
  document.querySelectorAll(".qf-btn").forEach(b => b.classList.remove("active"));
  applyFiltersAndRender();
}

// ---- RENDER ----
function renderGrid(reset = false) {
  const grid = document.getElementById("phoneGrid");
  const noRes = document.getElementById("noResults");
  const countEl = document.getElementById("resultsCount");
  const btn = document.getElementById("seeMoreBtn");

  if (!grid) return;
  if (countEl) countEl.textContent = `${allFiltered.length} phone${allFiltered.length !== 1 ? "s" : ""} found`;

  if (allFiltered.length === 0) {
    grid.innerHTML = "";
    if (noRes) noRes.style.display = "block";
    if (btn) btn.classList.add("hidden");
    return;
  }
  if (noRes) noRes.style.display = "none";

  const nextBatch = allFiltered.slice(displayedCount, displayedCount + PAGE_SIZE);
  displayedCount += nextBatch.length;

  if (reset) grid.innerHTML = "";
  nextBatch.forEach((p, i) => {
    const delay = reset ? i * 0.05 : 0;
    grid.insertAdjacentHTML("beforeend", cardHTML(p, delay));
  });

  if (btn) {
    btn.classList.toggle("hidden", displayedCount >= allFiltered.length);
    btn.textContent = `Show More Phones (${Math.min(PAGE_SIZE, allFiltered.length - displayedCount)} more)`;
  }
}

function showMore() { renderGrid(false); }

function cardHTML(p, delay) {
  const inCmp = compareList.includes(p.id);
  return `
  <div class="phone-card" onclick="openModal(${p.id})" style="animation-delay:${delay}s">
    <div class="card-img-wrap">
      <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy"
           onerror="this.style.opacity='0.3';this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📱</text></svg>'"/>
      ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
      <button class="card-compare-btn ${inCmp ? "active" : ""}" 
        title="${inCmp ? "Remove from compare" : "Add to compare"}"
        onclick="event.stopPropagation(); toggleCompare(${p.id}, this)">⇄</button>
    </div>
    <div class="card-body">
      <div class="card-brand">${p.brand}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-stars">${renderStars(p.rating)}<span class="rc">(${p.ratingCount.toLocaleString()})</span></div>
      <div class="card-specs-mini">
        <div class="csm-row"><span class="csm-key">CPU</span><span class="csm-val">${p.specs.processor.split(" ").slice(0,3).join(" ")}</span></div>
        <div class="csm-row"><span class="csm-key">RAM</span><span class="csm-val">${p.specs.ram} GB</span></div>
        <div class="csm-row"><span class="csm-key">Camera</span><span class="csm-val">${p.specs.camera.split("+")[0].trim()}</span></div>
        <div class="csm-row"><span class="csm-key">Battery</span><span class="csm-val">${p.specs.battery}</span></div>
      </div>
      <div class="card-footer">
        <span class="card-price">${formatPrice(p.price)}</span>
        <button class="card-detail-btn" onclick="event.stopPropagation();openModal(${p.id})">Details</button>
      </div>
    </div>
  </div>`;
}

function updateSectionTitle(q) {
  const title = document.getElementById("sectionTitle");
  if (!title) return;
  title.textContent = q ? `Results for "${q}"` : "All Phones";
}

// ---- MODAL ----
function openModal(id) {
  const p = PHONES.find(x => x.id === id);
  if (!p) return;
  const inCmp = compareList.includes(p.id);

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-top">
      <div class="modal-img">
        <img src="${p.image}" alt="${p.brand} ${p.name}"
             onerror="this.parentElement.innerHTML='<span style=font-size:4rem>📱</span>'" />
      </div>
      <div class="modal-info">
        <div class="modal-brand">${p.brand}</div>
        <div class="modal-name">${p.name}</div>
        <div class="modal-price">${formatPrice(p.price)}</div>
        <div class="modal-stars">${renderStars(p.rating)}<span class="mrc">${p.rating} · ${p.ratingCount.toLocaleString()} reviews</span></div>
        <div class="modal-badges">
          ${p.specs.network === "5G" ? '<span class="mbadge mbadge-5g">5G</span>' : '<span class="mbadge mbadge-wifi">4G</span>'}
          ${p.specs.nfc === "Yes" ? '<span class="mbadge mbadge-nfc">NFC</span>' : ""}
          ${p.specs.ram >= 12 ? '<span class="mbadge mbadge-wifi">12GB+ RAM</span>' : ""}
        </div>
      </div>
    </div>

    <div class="spec-section">
      <div class="spec-section-title">Display & Design</div>
      <div class="spec-grid">
        <div class="spec-row"><span class="sk">Display</span><span class="sv">${p.specs.display}</span></div>
        <div class="spec-row"><span class="sk">Dimensions</span><span class="sv">${p.specs.dimensions}</span></div>
        <div class="spec-row"><span class="sk">Weight</span><span class="sv">${p.specs.weight}</span></div>
        <div class="spec-row"><span class="sk">Colors</span><span class="sv">${p.specs.colors}</span></div>
      </div>
    </div>
    <div class="spec-section">
      <div class="spec-section-title">Performance</div>
      <div class="spec-grid">
        <div class="spec-row"><span class="sk">Processor</span><span class="sv">${p.specs.processor}</span></div>
        <div class="spec-row"><span class="sk">RAM</span><span class="sv">${p.specs.ram} GB</span></div>
        <div class="spec-row"><span class="sk">Storage</span><span class="sv">${p.specs.storage}</span></div>
        <div class="spec-row"><span class="sk">OS</span><span class="sv">${p.specs.os}</span></div>
      </div>
    </div>
    <div class="spec-section">
      <div class="spec-section-title">Camera</div>
      <div class="spec-grid">
        <div class="spec-row"><span class="sk">Rear</span><span class="sv">${p.specs.camera}</span></div>
        <div class="spec-row"><span class="sk">Front</span><span class="sv">${p.specs.frontCamera}</span></div>
      </div>
    </div>
    <div class="spec-section">
      <div class="spec-section-title">Battery & Connectivity</div>
      <div class="spec-grid">
        <div class="spec-row"><span class="sk">Battery</span><span class="sv">${p.specs.battery}</span></div>
        <div class="spec-row"><span class="sk">Charging</span><span class="sv">${p.specs.charging}</span></div>
        <div class="spec-row"><span class="sk">Network</span><span class="sv">${p.specs.network}</span></div>
        <div class="spec-row"><span class="sk">Bluetooth</span><span class="sv">${p.specs.bluetooth}</span></div>
        <div class="spec-row"><span class="sk">NFC</span><span class="sv">${p.specs.nfc}</span></div>
        <div class="spec-row"><span class="sk">Fingerprint</span><span class="sv">${p.specs.fingerprint}</span></div>
      </div>
    </div>

    <button class="modal-compare-btn ${inCmp ? "added" : ""}" id="modalCmpBtn"
      onclick="toggleCompare(${p.id}, this, true)">
      ${inCmp ? "✓ Added to Compare" : "+ Add to Compare"}
    </button>
  `;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e && e.target !== document.getElementById("modalOverlay") && !e.target.classList.contains("modal-close")) return;
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ---- COMPARE ----
function toggleCompare(id, btn, fromModal = false) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(x => x !== id);
    if (btn) { btn.classList.remove("active"); btn.textContent = "⇄"; }
  } else {
    if (compareList.length >= 3) { showToast("Max 3 phones for comparison"); return; }
    compareList.push(id);
    if (btn) { btn.classList.add("active"); btn.textContent = "✓"; }
  }
  localStorage.setItem("ps_compare", JSON.stringify(compareList));
  updateCompareBadge();

  if (!fromModal) {
    const mb = document.getElementById("modalCmpBtn");
    if (mb) {
      const now = compareList.includes(id);
      mb.textContent = now ? "✓ Added to Compare" : "+ Add to Compare";
      mb.classList.toggle("added", now);
    }
  }
  if (compareList.includes(id)) showToast("Added to compare!");
  else showToast("Removed from compare");
}

function updateCompareBadge() {
  const wrap = document.getElementById("compareBadgeWrap");
  const cnt  = document.getElementById("compareBadgeCount");
  if (!wrap) return;
  if (compareList.length > 0) {
    wrap.style.display = "flex";
    cnt.textContent = compareList.length;
  } else { wrap.style.display = "none"; }
}

// ---- TOAST ----
function showToast(msg) {
  document.querySelector(".toast")?.remove();
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}
