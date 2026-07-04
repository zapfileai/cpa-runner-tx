const texasCities = [
  "Hitchcock", "Hockley", "Holland", "Holliday", "Hondo",
  "Honey Grove", "Hooks", "Horseshoe Bay", "Houston", "Howe",
  "Hubbard", "Huffman", "Hughes Springs", "Hull", "Humble",
  "Hungerford", "Hunt", "Huntington", "Huntsville", "Hurst",
  "Hutchins", "Hutto", "Idalou", "Industry", "Inez",
  "Ingleside", "Ingram", "Iola", "Iowa Park", "Ira",
  "Iredell", "Irving", "Italy", "Itasca", "Jacksboro",
  "Jacksonville", "Jarrell", "Jasper", "Jefferson", "Joaquin",
  "Johnson City", "Joshua", "Jourdanton", "Justin", "Karnack",
  "Karnes City", "Katy", "Kaufman", "Keene", "Keller",
  "Kemah", "Kemp", "Kempner", "Kenedy", "Kennard",
  "Kennedale", "Kerens", "Kerrville", "Kilgore", "Killeen",
  "Kingsbury", "Kingsland", "Kingsville", "Kingwood", "Kirbyville",
  "Knippa", "Knox City", "Kountze", "Kress", "Krum",
  "Kyle", "La Coste", "La Feria", "La Grange", "La Joya",
  "La Marque", "La Porte", "La Vernia", "Laguna Park", "Lake Dallas",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
