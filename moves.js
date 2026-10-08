const CLIPS = {
  supino: "mov/supino.mp4",
  remada: "mov/remada.mp4",
  inclinado: "mov/inclinado.mp4",
  puxada: "mov/puxada.mp4",
  legpress: "mov/legpress.mp4",
  rdl: "mov/rdl.mp4",
  afundo: "mov/afundo.mp4",
  prancha: "mov/prancha.mp4",
  press: "mov/press.mp4",
  cardio: "mov/cardio.mp4",
  walk: "mov/walk.mp4",
};

function moveFor(text) {
  const t = text.toLowerCase();
  if (t.includes("supino reto")) return "supino";
  if (t.includes("inclinado")) return "inclinado";
  if (t.includes("remada")) return "remada";
  if (t.includes("puxada")) return "puxada";
  if (t.includes("leg press") || t.includes("agachamento")) return "legpress";
  if (t.includes("romeno")) return "rdl";
  if (t.includes("afundo")) return "afundo";
  if (t.includes("prancha")) return "prancha";
  if (t.includes("desenvolvimento")) return "press";
  if (t.includes("face pull")) return "facepull";
  if (t.includes("lateral")) return "lateral";
  if (t.includes("dead bug")) return "deadbug";
  if (t.includes("passadeira") || t.includes("bicicleta")) return "cardio";
  if (t.includes("caminhada") || t.includes("passos")) return "walk";
  return "rest";
}

function pose(kind) {
  const src = CLIPS[kind];
  if (!src) return "";
  return `<video src="${src}" autoplay muted loop playsinline></video>`;
}

const CUES = {
  supino: "Deitado no banco plano. A barra sobe até os braços esticarem e desce até ao peito.",
  remada: "Tronco inclinado, costas direitas. Puxas a barra para a barriga e voltas a esticar os braços.",
  inclinado: "Banco inclinado. No vídeo a barra é uma barra; no plano fazes o mesmo banco com halteres.",
  puxada: "Sentado na máquina. Puxas a barra de cima até à clavícula e deixas subir devagar.",
  legpress: "Sentado, pés na plataforma. Os joelhos dobram e voltam a esticar. O rabo fica no banco. Hack ou agachamento também servem.",
  rdl: "O vídeo é o peso morto clássico: a barra vai ao chão. No romeno a barra não pousa, desce à frente das coxas, joelhos quase esticados, costas direitas.",
  afundo: "Um passo longo. O joelho de trás desce em direção ao chão e voltas a subir.",
  prancha: "Apoiada nos antebraços, corpo numa linha da cabeça aos pés. A anca não cai.",
  press: "Sentado, costas no banco. Os halteres sobem por cima da cabeça e descem até às orelhas.",
  facepull: "Corda do cabo, à altura da cara. Puxas para o nariz e abres os cotovelos para fora.",
  lateral: "De pé, halteres ao lado do corpo. Os braços sobem até à altura dos ombros, cotovelos quase esticados.",
  deadbug: "Deitado de costas, braços para o teto. Desce um braço e a perna do lado contrário, devagar.",
  cardio: "Passadeira. Também podes pedalar. Ritmo em que ainda consegues falar.",
  walk: "Caminhar, sem pesos. O passo na rua é este, só que ao ar livre.",
  rest: "Sem ginásio. Se deres um passeio curto, não conta como treino.",
};
