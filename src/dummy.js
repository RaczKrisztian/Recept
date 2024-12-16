//dummy adatok
export const recipes = [
  {
    id: 1,
    name: "Csirkepaprikás",
    prepTime: "45 perc",
    difficulty: "Közepes",
    image: new URL("./assets/images/csirkepaprikas.jpg", import.meta.url).href,
    description:
      "A csirkepaprikás egy klasszikus magyar étel, amelyet szaftos csirkedarabokból készítenek paprikás-tejfölös szószban. Általában galuskával vagy nokedlivel tálalják.",
  },
  {
    id: 2,
    name: "Lecsó",
    prepTime: "30 perc",
    difficulty: "Könnyű",
    image: new URL("./assets/images/lecso.jpg", import.meta.url).href,
    description:
      "A lecsó egy könnyű és ízletes magyar étel, amely paprika, paradicsom, hagyma és kolbász alapanyagokból készül. Gyorsan elkészíthető, és ideális nyári fogás.",
  },
  {
    id: 3,
    name: "Rakott krumpli",
    prepTime: "60 perc",
    difficulty: "Közepes",
    image: new URL("./assets/images/rakott_krumpli.jpg", import.meta.url).href,
    description:
      "A rakott krumpli egy magyar réteges étel, amely burgonyából, tojásból, kolbászból és tejfölből készül. Egy ízletes és laktató fogás, amely ideális családi vacsorákra.",
  },
  {
    id: 4,
    name: "Gulyásleves",
    prepTime: "120 perc",
    difficulty: "Nehéz",
    image: new URL("./assets/images/gulyasleves.jpg", import.meta.url).href,
    description:
      "A gulyásleves egy tradicionális magyar étel, amely marhahúsból, burgonyából és zöldségekből készül, ízletes pirospaprika alapú lében főzve. Tökéletes választás hideg napokra.",
  },
  {
    id: 5,
    name: "Lángos",
    prepTime: "40 perc",
    difficulty: "Nehéz",
    image: new URL("./assets/images/langos.jpg", import.meta.url).href,
    description:
      "A lángos egy mélyen sütött, ízletes magyar tészta, amelyet tejföllel, sajttal vagy fokhagymás öntettel szokás fogyasztani. Népszerű strandétel Magyarországon.",
  },
  {
    id: 6,
    name: "Rántott hús",
    prepTime: "50 perc",
    difficulty: "Könnyű",
    image: new URL("./assets/images/rantott_hus.jpeg", import.meta.url).href,
    description:
      "A rántott hús egy klasszikus magyar étel, amely finoman kiklopfolt sertés- vagy csirkeszeletekből készül. A hús panírozás után aranybarnára sütve tálalható, általában krumplipürével vagy sült krumplival.",
  },
];
