const texasCities = [
  "Lake Jackson", "Lamesa", "Lampasas", "Lancaster", "Laredo",
  "Larue", "Lasara", "Latexo", "Lavon", "Lawn",
  "League City", "Leander", "Leesburg", "Lefors", "Leggett",
  "Lelia Lake", "Leonard", "Levelland", "Lewisville", "Lexington",
  "Liberty", "Liberty Hill", "Lindale", "Linden", "Lindsay",
  "Lingleville", "Lipan", "Lissie", "Little Elm", "Little River Academy",
  "Littlefield", "Liverpool", "Livingston", "Llano", "Lockhart",
  "Lockney", "Lone Oak", "Long Branch", "Longview", "Loop",
  "Lorena", "Lorenzo", "Los Fresnos", "Lott", "Louise",
  "Loving", "Lubbock", "Lufkin", "Luling", "Lumberton",
  "Lytle", "Mabank", "Madisonville", "Magnolia", "Malakoff",
  "Malone", "Manchaca", "Manor", "Mansfield", "Manvel",
  "Marble Falls", "Marfa", "Marion", "Marlin", "Marquez",
  "Marshall", "Mart", "Martindale", "Mason", "Matador",
  "Mathis", "Maypearl", "Mcallen", "Mcdade", "Mcgregor",
  "Mckinney", "Mcqueeney", "Meadow", "Medina", "Melissa",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
