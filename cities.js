const texasCities = [
  "Abbott", "Abernathy", "Abilene", "Addison", "Adkins",
  "Afton", "Aiken", "Alba", "Albany", "Aledo",
  "Alice", "Alief", "Allen", "Alpine", "Alto",
  "Alvarado", "Alvin", "Alvord", "Amarillo", "Amherst",
  "Anahuac", "Anderson", "Andrews", "Angleton", "Anna",
  "Anson", "Anthony", "Aransas Pass", "Archer City", "Argyle",
  "Arlington", "Arp", "Arthur City", "Aspermont", "Athens",
  "Atlanta", "Aubrey", "Austin", "Austwell", "Avalon",
  "Avinger", "Avoca", "Axtell", "Azle", "Bacliff",
  "Baird", "Balch Springs", "Ballinger", "Bandera", "Bangs",
  "Barker", "Barry", "Bartlett", "Bastrop", "Batson",
  "Bay City", "Baytown", "Beasley", "Beaumont", "Beckville",
  "Bedford", "Bedias", "Beeville", "Bellaire", "Bellevue",
  "Bells", "Bellville", "Belmont", "Belton", "Ben Bolt",
  "Ben Wheeler", "Benavides", "Berclair", "Bergheim", "Bertram",
  "Big Lake", "Big Sandy", "Big Spring", "Bigfoot", "Bishop",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
