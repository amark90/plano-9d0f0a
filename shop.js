function shopItem(id, qty, name, stores, why, leave) {
  return { id, qty, name, stores, why, leave };
}

const leclerc = "Sem tabela publicada da Eco+. No rótulo, aplica a mesma regra.";

const SHOP = [
  ["Talho", [
    shopItem("frango", "800 g", "Peito de frango", [
      ["Continente", "Talho: peito cru, sem pele, sem osso, sem marinada."],
      ["Pingo Doce", "Talho: a mesma peça."],
      ["E.Leclerc", "Talho: a mesma peça."],
      ["Lidl", "Embalado cru, sem pele e sem molho. O temperado leva óleo."],
    ], "O almoço pesa 190 g de peito cru e simples. A bandeja temperada lista óleo e, muitas vezes, açúcar, e essa gordura não está nas 598 kcal.", "Panados, nuggets, frango com molho, picada."),
    shopItem("peru", "700 g", "Peito de peru", [
      ["Continente", "Talho: peito cru, inteiro ou em bifes, sem cobertura."],
      ["Pingo Doce", "Talho: a mesma peça."],
      ["E.Leclerc", "Talho: a mesma peça."],
      ["Lidl", "Embalado cru, sem panar e sem molho."],
    ], "Sexta e domingo usam 190 a 200 g de peito cru. O panado leva farinha e óleo antes de chegar a casa.", "Bifanas panadas, espetadas com molho, peru com crosta."),
    shopItem("vaca", "400 g", "Vazia ou acém magro", [
      ["Continente", "Talho: vazia ou acém, gordura aparada."],
      ["Pingo Doce", "Talho: a mesma peça."],
      ["E.Leclerc", "Talho: a mesma peça."],
      ["Lidl", "Só se o rótulo da picada disser no máximo 5% de matéria gorda."],
    ], "Quarta e sábado contam com 180 a 200 g de carne magra crua. Picada sem percentagem no rótulo não dá para conferir.", "Entrecosto, costeleta com gordura, picada sem percentagem."),
  ]],
  ["Peixaria", [
    shopItem("pescada", "2 × 200 g", "Pescada", [
      ["Continente", "Peixaria: duas postas frescas, cerca de 200 g cada."],
      ["Pingo Doce", "Peixaria: a mesma posta."],
      ["E.Leclerc", "Peixaria: a mesma posta."],
      ["Lidl", "Congelado cujo único ingrediente seja pescada. Sem panado."],
    ], "Segunda e quinta pesam 200 g de pescada crua. O filete panado traz pão ralado e gordura de fritura.", "Filetes panados, douradinhos, pescada com farinha."),
    shopItem("salmao", "150 g", "Salmão", [
      ["Continente", "Peixaria: uma posta fresca, 150 g. A pele pode vir."],
      ["Pingo Doce", "Peixaria: a mesma posta."],
      ["E.Leclerc", "Peixaria: a mesma posta."],
      ["Lidl", "Posta fresca do balcão de frios, se houver. Sem fumado."],
    ], "Terça ao almoço: 150 g crus, 12 a 14 minutos a 200 °C. O fumado é outro produto, com muito mais sal.", "Salmão fumado, hambúrguer, salmão em crosta."),
  ]],
  ["Charcutaria e laticínios", [
    shopItem("fiambre", "300 g", "Fiambre de peru", [
      ["Continente", "Nobre Finíssimos, se não houver outro com mais carne e menos açúcar. Por 100 g: 17 g de proteína, 0,6 g de gordura, 3 g de açúcar, 66% de peito."],
      ["Pingo Doce", "Fiambre de peito de peru da própria marca. Por 100 g: 17 g de proteína, 1 g de gordura, 0,5 g de açúcar, 77% de peito. É o melhor rótulo completo."],
      ["E.Leclerc", "Sem tabela da Eco+. Fica o pacote com cerca de 17 g de proteína, gordura até 1 g, açúcar abaixo de 1 g e a maior percentagem de peito."],
      ["Lidl", "Dulano peito de peru fatias finas, se o rótulo confirmar cerca de 20 g de proteína e gordura até 1,5 g. A tabela publicada marca 97 kcal e 1,3 g de gordura."],
    ], "A proteína por 100 g manda neste lanche de 60 g. O Pingo Doce ganha ao Nobre em carne, açúcar e sal, com a mesma proteína. O Dulano só entra se o pacote bater com esses 20 g.", "Mortadela, fiambre com queijo, sandes feitas."),
    shopItem("queijo", "600 g", "Queijo fresco", [
      ["Continente", "Fresco magro Equilíbrio. Por 100 g: 76 kcal, 1 g de gordura, 13 g de proteína. É o que mais proteína dá na peça sólida."],
      ["Pingo Doce", "Go Active batido magro. Por 100 g: 61 kcal, 0,2 g de gordura, 11 g de proteína. É o mais magro. Vem batido, não em fatia."],
      ["E.Leclerc", leclerc + " Gordura até 1,5 g e proteína à volta de 12 g. Tem de dizer magro."],
      ["Lidl", "Queijo fresco magro. Tabela publicada: 79 kcal, 1,4 g de gordura, 12 g de proteína."],
    ], "O fresco normal do Continente está em 181 kcal e 14 g de gordura por 100 g. Em 120 g de meio da manhã, só o magro cabe nas 192 kcal.", "Fresco normal, flamengo, mozzarella, requeijão meio gordo."),
    shopItem("ovos", "10", "Ovos", [
      ["Continente", "Classe M, de solo. Cada um 53 a 63 g."],
      ["Pingo Doce", "Classe M."],
      ["E.Leclerc", "Classe M."],
      ["Lidl", "Classe M."],
    ], "O pequeno-almoço usa 2 ovos = 110 g. A classe L pesa 63 a 73 g e a gema a mais não está nas 416 kcal.", "Classe XL, ovo líquido inteiro."),
    shopItem("claras", "500 g", "Claras", [
      ["Continente", "Clara de ovo pasteurizada. Por 100 g: 47 kcal, 0,2 g de gordura, 11 g de proteína. Ingrediente: clara de ovo."],
      ["Pingo Doce", "A mesma garrafa, se estiver no frio. Se não houver, separa claras dos ovos classe M e pesa."],
      ["E.Leclerc", "A mesma regra. Sem tabela publicada."],
      ["Lidl", "Procura a garrafa no frio. Se não houver, claras dos ovos, pesadas."],
    ], "É a proteína do pequeno-almoço sem a gema. Ovo líquido inteiro traz a gema outra vez.", "Ovo líquido inteiro, claras com açúcar."),
    shopItem("iogurte", "10 × 150 g", "Iogurte", [
      ["Continente", "Skyr natural Equilíbrio, só se o pote disser 0 g de gordura e 11 g de proteína. Tabela de janeiro de 2026: 58 kcal e 3,7 g de açúcares. Há um pote antigo com 8,3 g: esse fica."],
      ["Pingo Doce", "O skyr Go Active marca 7 g de proteína. Não chega. Se não houver outro com cerca de 11 g, esta loja não ganha o iogurte."],
      ["E.Leclerc", "Sem tabela da Eco+. No pote natural: 0 g de gordura, açúcar à volta de 4 g, proteína à volta de 11 g."],
      ["Lidl", "Milbona Skyr natural. Tabela publicada: 62 kcal, 0,2 g de gordura, 4 g de açúcares, 11 g de proteína. A loja fecha ao domingo."],
    ], "250 g do skyr com 11 g de proteína dão 27 g. O do Pingo Doce, com 7 g, dá 19 g, e o pequeno-almoço fica curto. O Mythos natural do Continente tem 8 g de gordura e 3,9 g de proteína.", "Sabores, skyr líquido, grego açucarado, gordura acima de 0,5 g, proteína à volta de 7 g."),
  ]],
  ["Padaria", [
    shopItem("pao", "1 pacote", "Pão de forma", [
      ["Continente", "Integral com côdea. Por 100 g: 238 kcal, 2,8 g de gordura, 7,4 g de fibra, 9,5 g de proteína. É o que mais fibra tem."],
      ["Pingo Doce", "Integral sem côdea. Por 100 g: 224 kcal, 2,4 g de gordura, 5 g de fibra, 10 g de proteína. Menos calorias, menos fibra."],
      ["E.Leclerc", "Integral. Sem tabela da Eco+. Fibra acima de 6 g e gordura até 3 g por 100 g."],
      ["Lidl", "O integral sem côdea publicado tem 4,9 g de fibra e 262 kcal. Só leva se no pacote a fibra passar de 6 g."],
    ], "O plano pesa 40 ou 50 g, não «uma fatia». O Continente é a melhor fibra das tabelas lidas. Brioche e pão de leite ficam de fora em qualquer loja.", "Brioche, pão de leite, pão branco, sementes com mais de 5 g de gordura."),
  ]],
  ["Fruta", [
    shopItem("morangos", "750 g", "Morangos", [
      ["Continente", "Frescos, ou congelados só com morango."],
      ["Pingo Doce", "Frescos, ou congelados só com morango."],
      ["E.Leclerc", "Frescos, ou congelados só com morango."],
      ["Lidl", "Frescos, ou congelados só com morango."],
    ], "Entram no pequeno-almoço, 80 ou 120 g, sem calda. A calda e o iogurte de morango já trazem açúcar.", "Calda, preparado de fruta, iogurte com sabor."),
    shopItem("macas", "1 kg", "Maçãs", [
      ["Continente", "Frescas, cerca de 150 g cada. Umas 7."],
      ["Pingo Doce", "As mesmas."],
      ["E.Leclerc", "As mesmas."],
      ["Lidl", "As mesmas."],
    ], "O meio da manhã usa a peça, 120 ou 150 g. O sumo, mesmo 100%, não a substitui.", "Sumo, compota, maçã seca com açúcar."),
    shopItem("laranjas", "5", "Laranjas", [
      ["Continente", "Inteiras, para partir. O lanche são 150 g de gomos."],
      ["Pingo Doce", "As mesmas."],
      ["E.Leclerc", "As mesmas."],
      ["Lidl", "As mesmas."],
    ], "O néctar traz açúcar de rótulo e tira a fibra.", "Néctar, sumo com açúcar, laranja em calda."),
    shopItem("bananas", "2 pequenas", "Bananas", [
      ["Continente", "Duas pequenas, à volta de 70 g cada."],
      ["Pingo Doce", "As mesmas."],
      ["E.Leclerc", "As mesmas."],
      ["Lidl", "As mesmas."],
    ], "Domingo usa 70 g. Uma banana grande anda nos 120 g e quase duplica o hidrato desse lanche.", "Banana-passa, banana chips."),
  ]],
  ["Hortícolas", [
    shopItem("brocolos", "1,5 kg", "Brócolos", [
      ["Continente", "Frescos, ou congelados com um só ingrediente."],
      ["Pingo Doce", "Os mesmos."],
      ["E.Leclerc", "Os mesmos."],
      ["Lidl", "Congelados só com brócolos, se os frescos estiverem maus."],
    ], "Vão ao vapor, 200 a 250 g. O azeite mede-se à parte. O saco com molho já inclui gordura.", "Molho de queijo, manteiga, temperados."),
    shopItem("batata", "1,3 kg", "Batata", [
      ["Continente", "De cozer, crua, com pele."],
      ["Pingo Doce", "A mesma."],
      ["E.Leclerc", "A mesma."],
      ["Lidl", "De cozer, crua. Sem pré-frita."],
    ], "O plano pesa 190 a 230 g cruas, cozidas em água. Pré-frita e puré de pacote já levam óleo.", "Frita, pré-frita, puré instantâneo, assada da charcutaria."),
    shopItem("curgete", "800 g", "Curgete", [
      ["Continente", "Fresca."],
      ["Pingo Doce", "Fresca."],
      ["E.Leclerc", "Fresca."],
      ["Lidl", "Fresca."],
    ], "São 200 a 250 g no jantar, com o azeite da receita e mais nenhum.", "Panada, conserva em óleo."),
    shopItem("cenoura", "400 g", "Cenoura", [
      ["Continente", "Fresca, inteira."],
      ["Pingo Doce", "Fresca."],
      ["E.Leclerc", "Fresca."],
      ["Lidl", "Fresca."],
    ], "Entra no estufado de quarta e no forno de domingo, 120 a 150 g.", "Calda, snacks fritos."),
    shopItem("feijao", "200 g", "Feijão-verde", [
      ["Continente", "Fresco, ou congelado só com feijão-verde."],
      ["Pingo Doce", "O mesmo."],
      ["E.Leclerc", "O mesmo."],
      ["Lidl", "Congelado simples, sem manteiga."],
    ], "Quarta ao jantar, 200 g, 6 minutos em água.", "Misturas com bacon, salteados prontos."),
    shopItem("salada", "1 saco ou 1 alface", "Salada", [
      ["Continente", "Alface, ou saco só de folhas."],
      ["Pingo Doce", "O mesmo."],
      ["E.Leclerc", "O mesmo."],
      ["Lidl", "O mesmo, se houver fresco. Sem molho no saco."],
    ], "A salada do almoço é volume. O saco completo traz molho, croutons e queijo.", "Molho incluído, croutons, queijo no pacote."),
    shopItem("tomate", "4", "Tomates", [
      ["Continente", "Frescos."],
      ["Pingo Doce", "Frescos."],
      ["E.Leclerc", "Frescos."],
      ["Lidl", "Frescos."],
    ], "Terça e sexta, 100 a 150 g, crus. Tomate seco em óleo é gordura concentrada.", "Seco em óleo, ketchup."),
    shopItem("cebola", "1", "Cebola", [
      ["Continente", "Uma cebola comum."],
      ["Pingo Doce", "A mesma."],
      ["E.Leclerc", "A mesma."],
      ["Lidl", "A mesma."],
    ], "Vai para o estufado. A frita de pacote já está cozinhada em óleo.", "Cebola frita, pickles doces."),
    shopItem("cebolaroxa", "1", "Cebola roxa", [
      ["Continente", "Uma, para a salada de domingo."],
      ["Pingo Doce", "A mesma."],
      ["E.Leclerc", "A mesma."],
      ["Lidl", "A mesma."],
    ], "Vai crua, com o vinagre e o azeite já medido.", "Pickles doces."),
    shopItem("pepino", "1", "Pepino", [
      ["Continente", "Um, fresco."],
      ["Pingo Doce", "O mesmo."],
      ["E.Leclerc", "O mesmo."],
      ["Lidl", "O mesmo."],
    ], "É salada. O de vinagre agridoce lista açúcar.", "Pickles."),
    shopItem("alho", "1 cabeça", "Alho", [
      ["Continente", "Uma cabeça fresca."],
      ["Pingo Doce", "A mesma."],
      ["E.Leclerc", "A mesma."],
      ["Lidl", "A mesma."],
    ], "É tempero, em dente, sem óleo à volta.", "Alho frito, pasta em óleo."),
    shopItem("limoes", "4", "Limões", [
      ["Continente", "Quatro inteiros."],
      ["Pingo Doce", "Os mesmos."],
      ["E.Leclerc", "Os mesmos."],
      ["Lidl", "Os mesmos."],
    ], "O sumo no peixe substitui molho. O molho comprado lista óleo.", "Sumo com açúcar, molho pronto."),
    shopItem("salsa", "1 molho", "Salsa", [
      ["Continente", "Fresca, ou seca de um só ingrediente."],
      ["Pingo Doce", "A mesma."],
      ["E.Leclerc", "A mesma."],
      ["Lidl", "Seca, um ingrediente, se a fresca não estiver."],
    ], "É erva. Molho verde de frasco já traz azeite.", "Molhos verdes."),
  ]],
  ["Mercearia", [
    shopItem("aveia", "400 g", "Aveia", [
      ["Continente", "Flocos integrais finos, 100% aveia. Por 100 g: 366 kcal, 7,8 g de gordura, 11 g de fibra, 13 g de proteína."],
      ["Pingo Doce", "Flocos finos integrais, 100% aveia. Por 100 g: 363 kcal, 5,7 g de gordura, 10 g de fibra, 13 g de proteína. É a mais magra."],
      ["E.Leclerc", "Eco+ ou equivalente, um só ingrediente. Sem tabela publicada."],
      ["Lidl", "Crownfield flocos suaves, 100% aveia integral. Por 100 g: 369 kcal, 6,9 g de gordura, 10,4 g de fibra, 12 g de proteína. Fecha ao domingo."],
    ], "Usas cerca de 230 g. As quatro versões de um só ingrediente servem. A do Pingo Doce é a que menos gordura traz. Granola e papas de saqueta acrescentam açúcar.", "Granola, flocos com mel ou chocolate, papas doces."),
    shopItem("arroz", "250 g", "Arroz", [
      ["Continente", "Agulha simples, cru. Por 100 g: 349 kcal, 1,3 g de gordura, 7,9 g de proteína."],
      ["Pingo Doce", "Agulha Europa, 100% arroz branqueado. Por 100 g: 354 kcal, 0,8 g de gordura, 6,6 g de proteína."],
      ["E.Leclerc", "Agulha simples, sem tempero. Sem tabela publicada."],
      ["Lidl", "Agulha Campo Largo, 100% arroz. Por 100 g: 347 kcal, 0,9 g de gordura, 7,4 g de proteína."],
    ], "O plano pesa 45 ou 50 g crus de arroz branco. A diferença entre estes quatro é pequena. O que muda o prato é o pacote de legumes ou o pronto a comer, que já levam óleo.", "Arroz de camarão, basmati com tempero, pré-cozido com azeite."),
    shopItem("massa", "200 g", "Massa", [
      ["Continente", "Esparguete, só sêmola de trigo-duro. Por 100 g: 358 kcal, 2 g de gordura, 12 g de proteína."],
      ["Pingo Doce", "Esparguete simples, um ingrediente. Sem tabela própria lida: gordura até 2,5 g e sem molho."],
      ["E.Leclerc", "Eco+ esparguete, um ingrediente. Sem tabela publicada."],
      ["Lidl", "Esparguete simples, um ingrediente. Sem molho no pacote."],
    ], "A massa à carbonara do Continente marca 392 kcal e 10,5 g de gordura por 100 g. Em 60 g crus, são cerca de 6 g de gordura a mais, antes do azeite da salada.", "Recheadas, com molho, folhadas, pratos prontos."),
    shopItem("grao", "1 lata", "Grão", [
      ["Continente", "Cozido em água e sal, sem sulfito se houver escolha. Escorrido: 117 kcal, 2,2 g de gordura, 7,6 g de proteína, menos de 0,5 g de açúcar."],
      ["Pingo Doce", "Cozido em água e sal. Quinta usa 50 g escorridos."],
      ["E.Leclerc", "Eco+ em água e sal. Sem tabela publicada. Ingredientes: grão, água, sal."],
      ["Lidl", "Em água e sal. Ingredientes só esses três."],
    ], "A lata com sulfito do Continente marca 97 kcal e 6,3 g de proteína: serve se for a única. Grão em molho não.", "Grão com molho, salada já temperada com óleo."),
    shopItem("atum", "4 latas", "Atum", [
      ["Continente", "Equilíbrio ao natural, em água. Por 100 g: 104 kcal, 0,5 g de gordura, 25 g de proteína, 1 g de sal."],
      ["Pingo Doce", "Posta ao natural em água. Por 100 g: 104 kcal, 0,4 g de gordura, 25 g de proteína, 0,54 g de sal. Mesma proteína, menos sal."],
      ["E.Leclerc", "Ao natural, em água. Sem tabela da Eco+. Gordura cerca de 0,5 g e proteína cerca de 25 g."],
      ["Lidl", "Filete dos Açores ao natural. Por 100 g: 98 kcal, 0,7 g de gordura, 23 g de proteína. Menos proteína do que os outros dois."],
    ], "Quatro latas, 80 a 90 g escorridos cada. O plano pesa o escorrido, não a lata com a água. Em óleo, a gordura do óleo entra na tabela.", "Em óleo, em azeite, paté, atum com molho."),
    shopItem("amendoim", "1 frasco", "Manteiga de amendoim", [
      ["Continente", "100% amendoim. Por 100 g: 620 kcal, 50 g de gordura, 27 g de proteína. Ingrediente: amendoim."],
      ["Pingo Doce", "Cremosa 100% amendoim. Por 100 g: 633 kcal, 52 g de gordura, 30 g de proteína. É a que mais proteína dá."],
      ["E.Leclerc", "Frasco com um ingrediente: amendoim. Sem tabela publicada. Se listar açúcar ou óleo de palma, fica."],
      ["Lidl", "100% amendoim. Por 100 g: 639 kcal, 53 g de gordura, 27 g de proteína."],
    ], "Usas cerca de 45 g, em doses de 10 ou 12 g. Os açúcares do rótulo 100% são do próprio amendoim. Açúcar ou óleo de palma na lista mudam o produto.", "Creme com chocolate, pastas com açúcar ou óleo de palma."),
    shopItem("polpa", "1 pacote pequeno", "Polpa de tomate", [
      ["Continente", "Polpa simples, ou a de ervas sem a palavra açúcar. A de manjericão marca 42 kcal e 6,8 g de açúcares do tomate."],
      ["Pingo Doce", "Polpa sem açúcar na lista de ingredientes."],
      ["E.Leclerc", "Eco+ polpa, sem açúcar na lista."],
      ["Lidl", "Polpa sem açúcar na lista."],
    ], "No estufado de quarta são duas colheres. Ketchup e molho doce são outra tabela.", "Ketchup, molho de churrasco, tomate frito que liste açúcar."),
    shopItem("azeite", "1 garrafa, se faltar", "Azeite", [
      ["Continente", "Virgem extra. Acidez no máximo 0,8%."],
      ["Pingo Doce", "Virgem extra. A mesma acidez."],
      ["E.Leclerc", "Virgem extra. A mesma acidez."],
      ["Lidl", "Virgem extra. A mesma acidez."],
    ], "Em virgem extra a gordura anda nos 92 g por 100 ml, em qualquer uma destas lojas. Usas cerca de 150 ml. A colher de chá mal cheia são 4 g. A de sopa rasa são 10 g.", "Óleo para fritar, misturas com outros óleos, spray sem gramas."),
    shopItem("creatina", "1 boião, se faltar", "Creatina", [
      ["Continente", "GoldNutrition monohidratada em pó, 200 g. A dose são 5 g, sem açúcar e sem cafeína."],
      ["Pingo Doce", "Quase nunca tem. Se não estiver, fica para o Continente ou para a farmácia."],
      ["E.Leclerc", "No corredor de suplementos, só pó de monohidrato. Sem tabela de marca própria lida."],
      ["Lidl", "Não contes com esta loja para a creatina."],
    ], "Os comprimidos Creapure são 3 por dia e não fecham a colher de 5 g. Pré-treino traz cafeína, e o plano não a pede.", "Pré-treinos, queimadores, creatina com sabor doce."),
  ]],
  ["Despensa, só se faltar", [
    shopItem("sal", "1", "Sal", [
      ["Continente", "Sal fino."],
      ["Pingo Doce", "Sal fino."],
      ["E.Leclerc", "Sal fino."],
      ["Lidl", "Sal fino."],
    ], "É pitada. Caldo em cubo traz gordura e muito mais sal.", "Caldo em cubo, temperos completos com gordura."),
    shopItem("pimenta", "1", "Pimenta", [
      ["Continente", "Moída ou em grão, um ingrediente."],
      ["Pingo Doce", "A mesma."],
      ["E.Leclerc", "A mesma."],
      ["Lidl", "A mesma. A marca Kania serve se a lista for só pimenta."],
    ], "A mistura com sal escondido muda a pitada.", "Misturas com sal e açúcar."),
    shopItem("oregaos", "1", "Orégãos", [
      ["Continente", "Secos, um ingrediente."],
      ["Pingo Doce", "Os mesmos."],
      ["E.Leclerc", "Os mesmos."],
      ["Lidl", "Os mesmos."],
    ], "Vão no tomate e no peru. Molho de pizza já tem açúcar e óleo.", "Molhos."),
    shopItem("alecrim", "1", "Alecrim", [
      ["Continente", "Seco ou um ramo fresco."],
      ["Pingo Doce", "O mesmo."],
      ["E.Leclerc", "O mesmo."],
      ["Lidl", "Seco, um ingrediente."],
    ], "Vai no frango e no peru de domingo. Marinada pronta já traz óleo.", "Marinadas prontas."),
    shopItem("cominhos", "1", "Cominhos", [
      ["Continente", "Em pó, um ingrediente."],
      ["Pingo Doce", "Os mesmos."],
      ["E.Leclerc", "Os mesmos."],
      ["Lidl", "Os mesmos."],
    ], "Uma pitada no grão de quinta.", "Misturas de caril ou taco com açúcar."),
    shopItem("colorau", "1", "Colorau", [
      ["Continente", "Doce, um ingrediente."],
      ["Pingo Doce", "O mesmo."],
      ["E.Leclerc", "O mesmo."],
      ["Lidl", "O mesmo."],
    ], "Vai nas tiras de frango de terça. Sem óleo na lista.", "Tempero de frango pronto."),
    shopItem("vinagre", "1", "Vinagre", [
      ["Continente", "De vinho ou de sidra."],
      ["Pingo Doce", "O mesmo."],
      ["E.Leclerc", "O mesmo."],
      ["Lidl", "O mesmo."],
    ], "Quarta e domingo, na salada, com o azeite já contado. A redução balsâmica lista açúcar.", "Redução balsâmica, molhos de salada."),
    shopItem("louro", "1", "Louro", [
      ["Continente", "Folhas secas."],
      ["Pingo Doce", "As mesmas."],
      ["E.Leclerc", "As mesmas."],
      ["Lidl", "As mesmas."],
    ], "Uma folha no estufado de quarta.", "Caldos com louro."),
  ]],
];
