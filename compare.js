

let slots = [null, null, null];
let compareList = JSON.parse(localStorage.getItem("ps_compare") || "[]");

const SPEC_ROWS = [
  { category: "Pricing" },
  { key: "price",        label: "Price (BDT)",   fn: p => formatPrice(p.price),                    higherBetter: false, numeric: true, extract: p => p.price },
  { category: "Display" },
  { key: "display",      label: "Display",        fn: p => p.specs.display },
  { key: "dsize",        label: "Screen Size",    fn: p => p.specs.display_size + '"',              higherBetter: true, numeric: true, extract: p => parseFloat(p.specs.display_size) },
  { category: "Performance" },
  { key: "cpu",          label: "Processor",      fn: p => p.specs.processor },
  { key: "ram",          label: "RAM",            fn: p => p.specs.ram + " GB",                     higherBetter: true, numeric: true, extract: p => parseInt(p.specs.ram) },
  { key: "storage",      label: "Storage",        fn: p => p.specs.storage },
  { key: "os",           label: "OS",             fn: p => p.specs.os },
  { category: "Camera" },
  { key: "cam",          label: "Rear Camera",    fn: p => p.specs.camera },
  { key: "fcam",         label: "Front Camera",   fn: p => p.specs.frontCamera },
  { category: "Battery" },
  { key: "bat",          label: "Battery",        fn: p => p.specs.battery,                         higherBetter: true, numeric: true, extract: p => parseInt(p.specs.battery) },
  { key: "chg",          label: "Charging",       fn: p => p.specs.charging },
  { category: "Connectivity" },
  { key: "net",          label: "Network",        fn: p => p.specs.network },
  { key: "bt",           label: "Bluetooth",      fn: p => p.specs.bluetooth },
  { key: "nfc",          label: "NFC",            fn: p => p.specs.nfc },
  { key: "fp",           label: "Fingerprint",    fn: p => p.specs.fingerprint },
  { category: "Design" },
  { key: "dim",          label: "Dimensions",     fn: p => p.specs.dimensions },
  { key: "wt",           label: "Weight",         fn: p => p.specs.weight },
  { key: "col",          label: "Colors",         fn: p => p.specs.colors },
  { category: "Rating" },
  { key: "rat",          label: "User Rating",    fn: p => `★ ${p.rating} / 5.0`,                  higherBetter: true, numeric: true, extract: p => p.rating },
];

document.addEventListener("DOMContentLoaded", () => {
  populateSelects();
  compareList.forEach((id, i) => { if (i < 3) addPhoneToSlot(i, id); });
  updateCompareBadge();
});

function populateSelects() {
  document.querySelectorAll(".slot-empty select").forEach(sel => {
    PHONES.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.brand} ${p.name} — ${formatPrice(p.price)}`;
      sel.appendChild(opt);
    });
  });
}

function addPhoneToSlot(idx, phoneId) {
  if (!phoneId) return;
  const id = parseInt(phoneId);
  const phone = PHONES.find(p => p.id === id);
  if (!phone) return;
  if (slots.includes(id)) { showToast("Phone already in a slot"); return; }
  slots[idx] = id;
  renderSlot(idx, phone);
  renderTable();
}

function renderSlot(idx, phone) {
  const slot = document.getElementById(`slot-${idx}`);
  slot.classList.add("filled");
  slot.innerHTML = `
    <div class="slot-filled">
      <img class="sf-img" src="${phone.image}" alt="${phone.brand} ${phone.name}"
           onerror="this.style.opacity=0.3" />
      <div class="sf-brand">${phone.brand}</div>
      <div class="sf-name">${phone.name}</div>
      <div class="sf-price">${formatPrice(phone.price)}</div>
    </div>
    <button class="slot-remove" onclick="removeSlot(${idx})" title="Remove">✕</button>
  `;
}

function removeSlot(idx) {
  slots[idx] = null;
  const slot = document.getElementById(`slot-${idx}`);
  slot.classList.remove("filled");
  slot.innerHTML = `
    <div class="slot-empty">
      <span class="plus">+</span>
      <p>Add Phone ${idx + 1}</p>
      <select onchange="addPhoneToSlot(${idx}, this.value)">
        <option value="">— Select Phone —</option>
        ${PHONES.map(p => `<option value="${p.id}">${p.brand} ${p.name} — ${formatPrice(p.price)}</option>`).join("")}
      </select>
    </div>
  `;
  renderTable();
}

function renderTable() {
  const active = slots.map(id => id ? PHONES.find(p => p.id === id) : null).filter(Boolean);
  const wrap  = document.getElementById("compareTableWrap");
  const empty = document.getElementById("compareEmpty");

  if (active.length === 0) {
    if (wrap)  wrap.style.display = "none";
    if (empty) empty.style.display = "block";
    return;
  }
  if (wrap)  wrap.style.display = "block";
  if (empty) empty.style.display = "none";

  const head = document.getElementById("cmpHead");
  head.innerHTML = `<tr><th>Specification</th>${active.map(p => `<th>${p.brand}<br/><strong>${p.name}</strong></th>`).join("")}</tr>`;

  let rows = "";
  SPEC_ROWS.forEach(row => {
    if (row.category) {
      rows += `<tr class="cat-row"><td colspan="${active.length + 1}">${row.category}</td></tr>`;
      return;
    }
    let best = null;
    if (row.numeric && row.higherBetter !== undefined && active.length > 1) {
      const vals = active.map(p => row.extract(p));
      best = row.higherBetter ? Math.max(...vals) : Math.min(...vals);
    }
    const cells = active.map(p => {
      const val = row.fn(p);
      const isBest = best !== null && row.extract(p) === best;
      return `<td class="${isBest ? "best-val" : ""}">${val}${isBest && active.length > 1 ? " ✓" : ""}</td>`;
    }).join("");
    rows += `<tr><td>${row.label}</td>${cells}</tr>`;
  });
  document.getElementById("cmpBody").innerHTML = rows;
}

function clearComparison() {
  slots = [null, null, null];
  [0,1,2].forEach(i => removeSlot(i));
  compareList = [];
  localStorage.removeItem("ps_compare");
  updateCompareBadge();
}

function updateCompareBadge() {
  const wrap = document.getElementById("compareBadgeWrap");
  const cnt  = document.getElementById("compareBadgeCount");
  if (!wrap) return;
  const active = slots.filter(Boolean).length;
  wrap.style.display = active > 0 ? "flex" : "none";
  if (cnt) cnt.textContent = active;
}

function showToast(msg) {
  document.querySelector(".toast")?.remove();
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
