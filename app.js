const DAYS = [
  {
    name: "Segunda", kcal: 1893,
    gym: "Peito e costas, mais 15 min de cardio",
    exercises: [
      "Supino reto, 3×6–8, descanso 2 min",
      "Remada, 3×6–10, descanso 2 min",
      "Supino inclinado com halteres, 2×8–10",
      "Puxada pela frente, 2×8–10",
      "Passadeira inclinada ou bicicleta, 15 min",
    ],
    meals: [
      meal("pa", "Pequeno-almoço", "Ovos, papas e morangos", "416 kcal · 10 min", ["2 ovos (110 g)", "100 g de claras", "35 g de aveia", "120 g de morangos", "4 g de azeite", "5 g de creatina num copo de água"], ["Bate ovos e claras com uma pitada de sal.", "Frigideira antiaderente, azeite, lume brando, 3 a 4 minutos.", "Aveia com 120 ml de água, 90 segundos no microondas.", "Morangos à parte."]),
      meal("mm", "Meio da manhã", "Queijo fresco e maçã", "192 kcal", ["120 g de queijo fresco magro", "150 g de maçã"], ["Sem pão neste dia."]),
      meal("al", "Almoço", "Frango, arroz e brócolos", "598 kcal · 35 min", ["190 g de frango cru", "50 g de arroz cru", "250 g de brócolos", "8 g de azeite", "Alho, limão, alecrim, sal, pimenta"], ["Forno a 200 ºC.", "Frango temperado, 18 a 22 minutos, até o centro ficar branco.", "Arroz: 50 g cru em 120 ml de água, 10 minutos tapado.", "Brócolos 4 minutos ao vapor.", "Azeite nos brócolos no fim."]),
      meal("la", "Lanche", "Pão, fiambre e laranja", "257 kcal · 60 a 90 min antes do ginásio", ["50 g de pão integral", "60 g de fiambre de peru", "150 g de laranja"], ["Come antes do treino."]),
      meal("ja", "Jantar", "Pescada, batata e curgete", "430 kcal · 25 min", ["200 g de pescada crua", "200 g de batata crua", "250 g de curgete", "8 g de azeite", "Limão, alho, salsa"], ["Batata em cubos, 15 minutos em água a ferver.", "Curgete e pescada 12 a 15 minutos a 200 ºC.", "Limão e azeite no fim."]),
    ],
  },
  {
    name: "Terça", kcal: 1794,
    gym: "Caminhada",
    exercises: ["Caminhada de 40 minutos", "Chegar aos 10 000 passos"],
    meals: [
      meal("pa", "Pequeno-almoço", "Iogurte, aveia e amendoim", "341 kcal", ["250 g de skyr natural", "30 g de aveia", "80 g de morangos", "10 g de manteiga de amendoim", "5 g de creatina"], ["Aveia por cima do iogurte.", "Amendoim e morangos por cima."]),
      meal("mm", "Meio da manhã", "Atum, pão e tomate", "219 kcal", ["80 g de atum em água, escorrido", "40 g de pão integral", "150 g de tomate", "Orégãos"], ["Sem maionese."]),
      meal("al", "Almoço", "Salmão, batata e brócolos", "536 kcal · 30 min", ["150 g de salmão cru", "190 g de batata crua", "220 g de brócolos", "5 g de azeite", "Limão e salsa"], ["Forno a 200 ºC.", "Batata 15 minutos em água.", "Salmão 12 a 14 minutos, ainda rosado no centro.", "Brócolos 4 minutos ao vapor.", "Pouco azeite. Sem molho."]),
      meal("la", "Lanche", "Iogurte e maçã", "164 kcal", ["150 g de skyr natural", "150 g de maçã"], ["Come 60 a 90 minutos antes do treino, se fores à tarde."]),
      meal("ja", "Jantar", "Frango, batata e brócolos", "534 kcal · 25 min", ["180 g de frango cru", "190 g de batata crua", "200 g de brócolos", "10 g de azeite", "Alho e colorau"], ["Batata 15 minutos em água.", "Frango em tiras, 6 a 8 minutos em metade do azeite.", "Brócolos 4 minutos ao vapor, com o resto do azeite."]),
    ],
  },
  {
    name: "Quarta", kcal: 1933,
    gym: "Pernas, mais 15 min de cardio",
    exercises: [
      "Leg press, hack ou agachamento, 3×6–8",
      "Peso morto romeno, 3×6–8",
      "Afundo, 2×8 por perna",
      "Prancha, 2×40 s",
      "Passadeira ou bicicleta, 15 min",
    ],
    meals: [
      meal("pa", "Pequeno-almoço", "Ovos, papas e morangos", "416 kcal · 10 min", ["2 ovos (110 g)", "100 g de claras", "35 g de aveia", "120 g de morangos", "4 g de azeite", "5 g de creatina"], ["Ovos mexidos em lume brando.", "Aveia 90 segundos no microondas.", "Morangos à parte."]),
      meal("mm", "Meio da manhã", "Queijo fresco e maçã", "192 kcal", ["120 g de queijo fresco magro", "150 g de maçã"], ["Pausa a meio da manhã."]),
      meal("al", "Almoço", "Carne estufada, legumes e batata", "578 kcal · 40 min", ["200 g de vaca magra crua", "230 g de batata crua", "150 g de cenoura", "150 g de curgete", "8 g de azeite", "Cebola, alho, louro, 2 colheres de polpa de tomate"], ["Batata 15 minutos em água.", "Sela a carne. Refoga cebola, alho, cenoura, louro e polpa.", "25 minutos em lume brando. Curgete nos últimos 8.", "A batata fica à parte."]),
      meal("la", "Lanche", "Pão, fiambre e laranja", "257 kcal", ["50 g de pão integral", "60 g de fiambre de peru", "150 g de laranja"], ["Antes do ginásio."]),
      meal("ja", "Jantar", "Atum, arroz e feijão-verde", "490 kcal · 20 min", ["45 g de arroz cru", "200 g de feijão-verde", "130 g de atum escorrido", "150 g de salada", "8 g de azeite", "Cebola e vinagre"], ["Arroz 10 minutos tapado.", "Feijão-verde 6 minutos.", "Metade do azeite no atum, o resto na salada."]),
    ],
  },
  {
    name: "Quinta", kcal: 1834,
    gym: "Caminhada ou descanso",
    exercises: ["Caminhada, ou descanso se o corpo pedir", "8 000 a 10 000 passos"],
    meals: [
      meal("pa", "Pequeno-almoço", "Iogurte, aveia e amendoim", "341 kcal", ["250 g de skyr natural", "30 g de aveia", "80 g de morangos", "10 g de manteiga de amendoim", "5 g de creatina"], ["Igual à terça."]),
      meal("mm", "Meio da manhã", "Queijo, fiambre e maçã", "210 kcal", ["100 g de queijo fresco magro", "50 g de fiambre de peru", "120 g de maçã"], ["Prato frio, sem crackers."]),
      meal("al", "Almoço", "Frango, arroz, grão e salada", "645 kcal · 35 min", ["190 g de frango cru", "50 g de arroz cru", "50 g de grão escorrido", "200 g de salada", "10 g de azeite", "Cominhos, limão, salsa"], ["Forno a 200 ºC, frango 18 a 22 minutos.", "Arroz 10 minutos tapado.", "Grão aquecido com cominhos.", "Azeite e limão na salada."]),
      meal("la", "Lanche", "Iogurte e laranja", "156 kcal", ["150 g de skyr natural", "150 g de laranja"], ["Lanche curto."]),
      meal("ja", "Jantar", "Pescada, batata e brócolos", "482 kcal · 25 min", ["200 g de pescada crua", "190 g de batata crua", "250 g de brócolos", "10 g de azeite", "Limão e alho"], ["Batata 15 minutos.", "Pescada 12 a 15 minutos a 200 ºC.", "Brócolos 4 minutos ao vapor."]),
    ],
  },
  {
    name: "Sexta", kcal: 1927,
    gym: "Ombros e postura, mais 20 min de cardio",
    exercises: [
      "Desenvolvimento sentado, 3×6–8",
      "Face pull, 2×12–15",
      "Elevação lateral, 2×12–15",
      "Dead bug, 2×8 por lado",
      "Passadeira ou bicicleta, 20 min",
    ],
    meals: [
      meal("pa", "Pequeno-almoço", "Ovos, papas e morangos", "416 kcal · 10 min", ["2 ovos (110 g)", "100 g de claras", "35 g de aveia", "120 g de morangos", "4 g de azeite", "5 g de creatina"], ["Igual à segunda."]),
      meal("mm", "Meio da manhã", "Queijo fresco e maçã", "192 kcal", ["120 g de queijo fresco magro", "150 g de maçã"], ["Igual à segunda."]),
      meal("al", "Almoço", "Peru, massa e salada", "533 kcal · 30 min", ["190 g de peito de peru cru", "60 g de massa crua", "200 g de salada", "10 g de azeite", "Alho e limão"], ["Grelha o peru 5 a 6 minutos de cada lado.", "Massa al dente.", "O azeite vai todo na salada."]),
      meal("la", "Lanche", "Pão, fiambre e laranja", "257 kcal", ["50 g de pão integral", "60 g de fiambre de peru", "150 g de laranja"], ["Antes do ginásio."]),
      meal("ja", "Jantar", "Peru, arroz e curgete", "529 kcal · 25 min", ["200 g de peru cru", "45 g de arroz cru", "250 g de curgete", "100 g de tomate", "8 g de azeite", "Alho e orégãos"], ["Arroz 10 minutos tapado.", "Curgete e tomate 8 minutos.", "Peru nos últimos 6 a 8 minutos."]),
    ],
  },
  {
    name: "Sábado", kcal: 1798,
    gym: "Caminhada",
    exercises: ["Caminhada", "10 000 passos"],
    meals: [
      meal("pa", "Pequeno-almoço", "Iogurte, aveia e amendoim", "341 kcal", ["250 g de skyr natural", "30 g de aveia", "80 g de morangos", "10 g de manteiga de amendoim", "5 g de creatina"], ["Igual à terça."]),
      meal("mm", "Meio da manhã", "Ovo, claras e pão", "219 kcal", ["1 ovo", "80 g de claras", "40 g de pão integral"], ["Frigideira antiaderente, sem azeite extra.", "Pão torrado."]),
      meal("al", "Almoço", "Frango, massa e salada", "572 kcal · 30 min", ["190 g de frango cru", "55 g de massa crua", "250 g de salada", "10 g de azeite", "Limão"], ["Frango grelhado 6 a 8 minutos de cada lado.", "Massa al dente.", "Azeite todo na salada."]),
      meal("la", "Lanche", "Maçã e amendoim", "149 kcal", ["150 g de maçã", "12 g de manteiga de amendoim"], ["Lanche pequeno."]),
      meal("ja", "Jantar", "Vaca, batata e brócolos", "517 kcal · 25 min", ["180 g de vaca magra crua", "200 g de batata crua", "220 g de brócolos", "8 g de azeite", "Alho, sal, pimenta"], ["Batata 15 minutos.", "Carne 3 a 4 minutos de cada lado, centro macio.", "Brócolos ao vapor, azeite por cima."]),
    ],
  },
  {
    name: "Domingo", kcal: 1780,
    gym: "Descanso",
    exercises: ["Descanso", "Compras, se ainda não foste"],
    meals: [
      meal("pa", "Pequeno-almoço", "Ovos, papas e morangos", "416 kcal · 10 min", ["2 ovos (110 g)", "100 g de claras", "35 g de aveia", "120 g de morangos", "4 g de azeite", "5 g de creatina"], ["Igual à segunda."]),
      meal("mm", "Meio da manhã", "Queijo fresco e maçã", "192 kcal", ["120 g de queijo fresco magro", "150 g de maçã"], ["Igual à segunda."]),
      meal("al", "Almoço", "Peru no forno com legumes", "580 kcal · 35 min", ["190 g de peru cru", "230 g de batata", "120 g de cenoura", "200 g de brócolos", "10 g de azeite", "Alecrim e alho"], ["Peru, batata e cenoura 25 minutos a 200 ºC.", "Brócolos ao vapor nos últimos 5 minutos.", "Azeite no fim."]),
      meal("la", "Lanche", "Iogurte e banana", "176 kcal", ["200 g de skyr natural", "70 g de banana"], ["Banana pequena."]),
      meal("ja", "Jantar", "Salada de atum e ovo", "416 kcal · 15 min", ["110 g de atum escorrido", "1 ovo", "250 g de salada", "40 g de pão integral", "8 g de azeite", "Cebola roxa e vinagre"], ["Ovo 9 minutos em água a ferver, depois água fria.", "Salada com atum, ovo, cebola, azeite e vinagre.", "Este jantar pode ser a saída da semana."]),
    ],
  },
];

const TIME_FIELDS = [
  ["pa", "Pequeno-almoço", "08:00"],
  ["mm", "Meio da manhã", "10:30"],
  ["al", "Almoço, começar a cozinhar", "12:30"],
  ["la", "Lanche", "17:00"],
  ["ja", "Jantar", "20:30"],
  ["gym", "Ginásio ou caminhada", "18:30"],
  ["shop", "Compras, domingo", "10:00"],
];

function meal(id, slot, title, meta, items, steps) {
  return { id, slot, title, meta, items, steps };
}

const $ = (sel) => document.querySelector(sel);
const app = $("#app");
let tab = "hoje";
let openId = "al";
let openShop = "iogurte";

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let done = load("plano-done", {});
let shop = load("plano-shop", {});
let times = load("plano-times", Object.fromEntries(TIME_FIELDS.map(([id, , value]) => [id, value])));
let shopWeek = load("plano-shop-week", weekKey(new Date()));

function weekKey(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  const week = 1 + Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${week}`;
}

function mondayOf(date) {
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  return d;
}

let selected = (new Date().getDay() + 6) % 7;

function dateFor(index) {
  const d = mondayOf(new Date());
  d.setDate(d.getDate() + index);
  return d;
}
function iso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function keyMeal(index, id) {
  return `${iso(dateFor(index))}|${id}`;
}
function keyPart(index, id, kind, i) {
  return `${iso(dateFor(index))}|${id}|${kind}|${i}`;
}

function tick(on) {
  return `<button class="check${on ? " on" : ""}" aria-pressed="${on}"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.2 5.6 10 11 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>`;
}

function onHomeScreen() {
  return window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
}

function installCard() {
  return `
    <section class="install">
      <strong>Pôr no iPhone</strong>
      <p>No Safari, toca em Partilhar (o quadrado com a seta para cima) e depois em Adicionar ao Ecrã Principal. Abre pelo ícone Plano. Depois disso funciona sem Wi‑Fi e sem o computador.</p>
    </section>`;
}

function render() {
  const currentWeek = weekKey(new Date());
  const freshWeek = shopWeek !== currentWeek;
  if (tab === "hoje") renderHoje();
  if (tab === "compras") renderCompras(freshWeek);
  if (tab === "treino") renderTreino();
  if (tab === "alertas") renderAlertas();
  if (!onHomeScreen()) app.insertAdjacentHTML("afterbegin", installCard());
  document.querySelectorAll(".nav button").forEach((button) => {
    button.classList.toggle("on", button.dataset.tab === tab);
  });
}

function renderHoje() {
  const day = DAYS[selected];
  const date = dateFor(selected);
  const mealDone = day.meals.filter((item) => done[keyMeal(selected, item.id)]).length;
  const pct = Math.round((mealDone / day.meals.length) * 100);
  app.innerHTML = `
    <div class="top">
      <div>
        <h1>${day.name}</h1>
        <p class="sub">${date.toLocaleDateString("pt-PT", { day: "numeric", month: "long" })} · ${day.kcal} kcal</p>
      </div>
    </div>
    <div class="progress">
      <strong>${mealDone} de ${day.meals.length} refeições</strong>
      <div class="meta">${day.gym}</div>
      <div class="bar"><span style="width:${pct}%"></span></div>
    </div>
    <div class="days">${DAYS.map((item, index) => `<button data-day="${index}" class="${index === selected ? "on" : ""}">${item.name.slice(0, 3)}</button>`).join("")}</div>
    ${day.meals.map((item) => mealCard(item)).join("")}
  `;
}

function mealCard(item) {
  const on = !!done[keyMeal(selected, item.id)];
  const open = openId === item.id;
  const ingredients = item.items.map((text, i) => checkRow(text, keyPart(selected, item.id, "ing", i))).join("");
  const steps = item.steps.map((text, i) => checkRow(text, keyPart(selected, item.id, "step", i))).join("");
  return `
    <article class="meal${on ? " done" : ""}">
      <div class="row">
        ${tick(on).replace("<button", `<button data-toggle="${item.id}"`)}
        <button class="grow" data-open="${item.id}">
          <p class="title">${item.slot}</p>
          <p class="meta">${item.title} · ${item.meta}</p>
        </button>
      </div>
      ${open ? `<div class="detail"><h3>Ingredientes</h3>${ingredients}<h3>Como fazer</h3>${steps}</div>` : ""}
    </article>
  `;
}

function checkRow(text, id) {
  const on = !!done[id];
  return `<div class="item${on ? " done" : ""}" data-part="${id}">${tick(on)}<span>${text}</span></div>`;
}

function esc(value) {
  return String(value).replace(/[&<>]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[ch]));
}

function renderCompras(freshWeek) {
  const items = SHOP.flatMap(([, list]) => list);
  const count = items.filter((item) => shop[item.id]).length;
  app.innerHTML = `
    <h1>Compras</h1>
    <p class="sub">O melhor de cada loja, em Lamego. Toca no nome para o porquê. O Lidl fecha ao domingo.</p>
    <div class="progress"><strong>${count} de ${items.length}</strong><div class="bar"><span style="width:${Math.round((count / items.length) * 100)}%"></span></div></div>
    ${freshWeek ? `<div class="banner">Começou outra semana. <button data-reset-shop>Limpar a lista</button></div>` : ""}
    ${SHOP.map(([title, list]) => `
      <section class="group">
        <h2>${esc(title)}</h2>
        ${list.map((item) => {
          const on = !!shop[item.id];
          const open = openShop === item.id;
          return `
            <div class="pick">
              <div class="item${on ? " done" : ""}">
                ${tick(on).replace("<button", `<button data-shop="${item.id}"`)}
                <button class="grow" data-why="${item.id}">
                  <p class="title">${esc(item.qty)} · ${esc(item.name)}</p>
                </button>
              </div>
              <div class="stores">
                ${item.stores.map(([store, text]) => `<p><strong>${esc(store)}</strong> ${esc(text)}</p>`).join("")}
              </div>
              ${open ? `<div class="why"><p>${esc(item.why)}</p><p class="leave">Deixa na prateleira: ${esc(item.leave)}</p></div>` : ""}
            </div>`;
        }).join("")}
      </section>
    `).join("")}
    <div class="actions"><button data-reset-shop>Limpar compras</button></div>
  `;
}

function renderTreino() {
  const day = DAYS[selected];
  const doneCount = day.exercises.filter((_, i) => done[keyPart(selected, "gym", "ex", i)]).length;
  app.innerHTML = `
    <h1>Treino</h1>
    <p class="sub">${day.name} · ${day.gym}</p>
    <div class="days">${DAYS.map((item, index) => `<button data-day="${index}" class="${index === selected ? "on" : ""}">${item.name.slice(0, 3)}</button>`).join("")}</div>
    <p class="note">Vídeo curto de cada exercício, para reconheceres o movimento no ginásio.</p>
    <section class="group">
      <h2>${doneCount} de ${day.exercises.length}</h2>
      ${day.exercises.map((text, i) => exerciseCard(text, i)).join("")}
    </section>
    <p class="note">Deixas duas repetições por fazer. A cada 50 minutos sentado, 5 minutos de pé.</p>
  `;
}

function exerciseCard(text, i) {
  const id = keyPart(selected, "gym", "ex", i);
  const on = !!done[id];
  const kind = moveFor(text);
  return `
    <article class="ex${on ? " done" : ""}">
      <div class="item" data-part="${id}">${tick(on)}<span>${esc(text)}</span></div>
      <div class="stage">${pose(kind)}<p class="cue">${esc(CUES[kind])}</p></div>
    </article>`;
}

function renderAlertas() {
  app.innerHTML = `
    <h1>Alertas</h1>
    <p class="note">No iPhone, o alarme que toca com o ecrã bloqueado fica no Calendário. Este botão cria a semana: o que comer, quando começar a cozinhar, o ginásio e as compras de domingo no Continente Modelo.</p>
    <div class="panel" style="padding:14px">
      ${TIME_FIELDS.map(([id, label]) => `<label class="field">${label}<input type="time" data-time="${id}" value="${times[id] || "08:00"}"></label>`).join("")}
      <div class="actions"><button class="primary" data-ics>Adicionar alertas ao Calendário</button></div>
    </div>
    <p class="note">No Safari do iPhone: descarrega o ficheiro, abre-o, e escolhe Calendário. Confirma os avisos na hora do evento. Para teres a checklist no ecrã principal, Partilhar e depois Adicionar ao ecrã principal.</p>
  `;
}

document.body.addEventListener("click", (event) => {
  const part = event.target.closest("[data-part]");
  if (part) {
    done[part.dataset.part] = !done[part.dataset.part];
    save("plano-done", done);
    render();
    return;
  }
  const shopRow = event.target.closest("[data-shop]");
  if (shopRow) {
    shop[shopRow.dataset.shop] = !shop[shopRow.dataset.shop];
    save("plano-shop", shop);
    render();
    return;
  }
  const why = event.target.closest("[data-why]");
  if (why) {
    openShop = openShop === why.dataset.why ? null : why.dataset.why;
    render();
    return;
  }
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.tab) {
    tab = target.dataset.tab;
    render();
    return;
  }
  if (target.dataset.day) {
    selected = Number(target.dataset.day);
    render();
    return;
  }
  if (target.dataset.open) {
    openId = openId === target.dataset.open ? null : target.dataset.open;
    render();
    return;
  }
  if (target.dataset.toggle) {
    const id = keyMeal(selected, target.dataset.toggle);
    done[id] = !done[id];
    save("plano-done", done);
    render();
    return;
  }
  if (target.dataset.resetShop !== undefined) {
    shop = {};
    shopWeek = weekKey(new Date());
    save("plano-shop", shop);
    save("plano-shop-week", shopWeek);
    render();
    return;
  }
  if (target.dataset.ics !== undefined) {
    readTimes();
    downloadIcs();
  }
});

document.body.addEventListener("change", (event) => {
  if (event.target.dataset.time) readTimes();
});

function readTimes() {
  document.querySelectorAll("[data-time]").forEach((input) => {
    times[input.dataset.time] = input.value;
  });
  save("plano-times", times);
}

function downloadIcs() {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Plano Lamego//PT", "CALSCALE:GREGORIAN"];
  const byday = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  DAYS.forEach((day, index) => {
    day.meals.forEach((item) => {
      const when = times[item.id] || "08:00";
      lines.push(...eventLines({
        uid: `meal-${index}-${item.id}@plano-lamego`,
        start: nextStamp(index, when),
        minutes: item.id === "al" ? 60 : 20,
        byday: byday[index],
        title: `${item.slot}: ${item.title}`,
        description: `${item.items.join("; ")}. ${item.steps.join(" ")}`,
      }));
    });
    lines.push(...eventLines({
      uid: `gym-${index}@plano-lamego`,
      start: nextStamp(index, times.gym || "18:30"),
      minutes: 70,
      byday: byday[index],
      title: day.gym,
      description: day.exercises.join("; "),
    }));
  });
  lines.push(...eventLines({
    uid: "compras@plano-lamego",
    start: nextStamp(6, times.shop || "10:00"),
    minutes: 60,
    byday: "SU",
    title: "Compras no Continente Modelo",
    description: "Rua das Amoreiras, Lamego. Talho, peixaria e a lista da semana.",
  }));
  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "plano-lamego.ics";
  link.click();
  URL.revokeObjectURL(url);
}

function nextStamp(index, hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const date = dateFor(index);
  const now = new Date();
  date.setHours(h, m, 0, 0);
  if (date < now) date.setDate(date.getDate() + 7);
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(h)}${pad(m)}00`;
}

function eventLines({ uid, start, minutes, byday, title, description }) {
  const end = addMinutes(start, minutes);
  const text = description.replace(/[\r\n]+/g, " ").slice(0, 400);
  return [
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stampNow()}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${byday}`,
    `SUMMARY:${escapeIcs(title)}`,
    `DESCRIPTION:${escapeIcs(text)}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "TRIGGER:PT0S",
    `DESCRIPTION:${escapeIcs(title)}`,
    "END:VALARM",
    "END:VEVENT",
  ];
}

function addMinutes(stamp, minutes) {
  const y = Number(stamp.slice(0, 4));
  const mo = Number(stamp.slice(4, 6)) - 1;
  const d = Number(stamp.slice(6, 8));
  const h = Number(stamp.slice(9, 11));
  const mi = Number(stamp.slice(11, 13));
  const date = new Date(y, mo, d, h, mi + minutes);
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}
function stampNow() {
  const date = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
}
function escapeIcs(value) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

document.querySelectorAll(".nav button").forEach((button) => {
  button.addEventListener("click", () => {
    tab = button.dataset.tab;
    render();
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

render();
