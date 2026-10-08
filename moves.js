const CLIPS = {
  supino: "mov/supino.mp4",
  supinohalter: "mov/supino.mp4",
  remada: "mov/remada.mp4",
  inclinado: "mov/inclinado.mp4",
  puxada: "mov/puxada.mp4",
  legpress: "mov/legpress.mp4",
  rdl: "mov/rdl.mp4",
  afundo: "mov/afundo.mp4",
  prancha: "mov/prancha.mp4",
  press: "mov/press.mp4",
  pressstand: "mov/press.mp4",
  cardio: "mov/cardio.mp4",
  walk: "mov/walk.mp4",
};

function moveFor(text) {
  const t = text.toLowerCase();
  if (t.includes("flexão femoral") || t.includes("flexao femoral")) return "curl";
  if (t.includes("goblet")) return "goblet";
  if (t.includes("subida ao banco")) return "stepup";
  if (t.includes("serrote")) return "serrote";
  if (t.includes("remada sentada") || t.includes("peito apoiado")) return "remadacabo";
  if (t.includes("flexão") || t.includes("flexao")) return "flexao";
  if (t.includes("prancha lateral")) return "pranchalat";
  if (t.includes("lateral") && t.includes("banco")) return "lateralbanco";
  if (t.includes("em pé") || t.includes("em pe")) return "pressstand";
  if (t.includes("supino inclinado")) return "inclinado";
  if (t.includes("halter") && t.includes("supino")) return "supinohalter";
  if (t.includes("supino")) return "supino";
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
  supinohalter: "O vídeo usa uma barra. Tu fazes o mesmo banco plano, com um halter em cada mão. Os halteres descem até ao peito e sobem até os braços esticarem.",
  remadacabo: "Sentado no cabo, peito aberto. Puxas o punho até à barriga e deixas os braços esticar devagar.",
  flexao: "Mãos num banco, corpo direito. Desces o peito em direção ao banco e voltas a esticar os braços.",
  curl: "Deitado na máquina de pernas, barriga da perna no rolo. Dobras os joelhos e voltas a esticar devagar.",
  goblet: "Halter ao peito, pés à largura dos ombros. Desces até as coxas ficarem quase paralelas ao chão e voltas a subir, joelhos a seguir a ponta dos pés.",
  stepup: "Um pé em cima de um banco estável. Sobe até essa perna ficar esticada e desce com controlo. Troca de lado.",
  serrote: "Um joelho e uma mão no banco, costas direitas. O halter sobe até à anca e desce com o braço esticado.",
  pranchalat: "De lado, apoiado num antebraço. O corpo fica numa linha. A anca não cai.",
  pressstand: "O vídeo é sentado. Em pé é o mesmo gesto: os halteres sobem por cima da cabeça e descem até às orelhas. A barriga fica firme.",
  lateralbanco: "Peito apoiado num banco inclinado, halteres para o chão. Os braços sobem para os lados até à altura dos ombros.",
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
