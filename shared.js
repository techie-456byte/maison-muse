const $ = id => document.getElementById(id);
const inr = n => "₹" + Number(n).toLocaleString("en-IN");
const CALL = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/></svg>';
const WA = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 2.1 17.8L1 23l5.3-1.4A11.8 11.8 0 0 0 12 23.1h0A11.8 11.8 0 0 0 20.5 3.5zM12 21.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.1.8.8-3-.2-.4a9.8 9.8 0 1 1 7.9 4.2zm5.4-7.3c-.3-.15-1.75-.87-2-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6l.45-.52a2 2 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.08-.15-.67-1.6-.92-2.2s-.48-.5-.67-.5h-.57a1.1 1.1 0 0 0-.8.37 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.25 3.1 13.5 13.5 0 0 0 5.2 4.6c.7.3 1.25.5 1.7.6a4.1 4.1 0 0 0 1.9.12 3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .17-1.4c-.07-.12-.27-.2-.57-.35z"/></svg>';
const ratesOf = m => m.rates || RATES;
const photo = m => `<div class="ph"><span>${m.name[0]}</span><img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.remove()"></div>`;
const actions = m => `<div class="row"><a class="btn call" href="tel:+${m.phone}">${CALL} ${SITE.callText}</a><a class="btn wa" href="https://wa.me/${m.phone}?text=${encodeURIComponent(SITE.whatsappMessage + " " + m.name)}" target="_blank" rel="noopener">${WA} ${SITE.whatsappText}</a></div>`;
const card = m => `<article class="card"><a class="open" href="profile.html?id=${m.id}">${photo(m)}</a><div class="info"><div class="top"><h3>${m.name}, ${m.age}</h3><div class="rate">${inr(ratesOf(m)[0][1])}<small>${SITE.rateLabel}</small></div></div><p class="loc">${m.location}</p><p class="svc">${m.services.join(", ")}</p>${actions(m)}</div></article>`;
const head = (t, q) => `<div class="pagehead"><h1>${t}</h1><p>${q}</p></div>`;
 
function layout(active, html) {
  const nav = [["index.html", "Home"], ["models.html", "Profiles"], ["categories.html", "Categories"], ["about.html", "About"], ["contact.html", "Contact"]];
  document.body.insertAdjacentHTML("afterbegin", `<header class="nav"><a href="index.html" class="brand">${SITE.brand}</a><nav>${nav.map(n => `<a href="${n[0]}" ${n[0] === active ? 'class="act"' : ""}>${n[1]}</a>`).join("")}</nav></header><main>${html}</main>
  <footer><div class="fgrid"><div><b>${SITE.brand}</b><p>${SITE.tagline}</p><p>${SITE.footerQuote}</p></div><div><h4>Pages</h4>${nav.map(n => `<a href="${n[0]}">${n[1]}</a>`).join("")}</div><div><h4>Contact</h4><p>${SITE.address}</p><p>${SITE.email}</p><p>${SITE.hours}</p></div></div><p class="copy">${SITE.footerText}</p></footer>`);
  document.title = SITE.brand + " | " + nav.find(n => n[0] === active)[1];
  let ok = false; try { ok = sessionStorage.getItem("ageOk") === "1"; } catch (e) {}
  if (!ok) {
    document.body.insertAdjacentHTML("beforeend", `<div id="age" role="dialog" aria-modal="true"><div class="age-box"><div class="seal">18+</div><h2>${SITE.ageTitle}</h2><p>${SITE.ageText}</p><div class="row"><button class="btn gold" id="ageYes">${SITE.ageYes}</button><a class="btn ghost" href="https://www.google.com">${SITE.ageNo}</a></div></div></div>`);
    document.body.classList.add("locked");
    $("ageYes").onclick = () => { try { sessionStorage.setItem("ageOk", "1"); } catch (e) {} $("age").remove(); document.body.classList.remove("locked"); };
  }
  document.addEventListener("click", e => { const t = e.target.closest("[data-go]"); if (t) location.href = t.dataset.go; });
}
const catCards = () => CATEGORIES.map(c => `<button class="cat" data-go="models.html?category=${c.id}"><h3>${c.name}</h3><p>${c.text}</p><span>View profiles</span></button>`).join("");
const locChips = () => LOCATIONS.map(l => `<button class="chip lg" data-go="models.html?location=${encodeURIComponent(l)}">${l}</button>`).join("");
 
