const texasCities = [
  "Somerville", "Sonora", "Sour Lake", "South Bend", "South Padre Island",
  "Southlake", "Spearman", "Spicewood", "Splendora", "Spring",
  "Spring Branch", "Springlake", "Springtown", "Spur", "Stafford",
  "Stamford", "Stanton", "Staples", "Stephenville", "Sterling City",
  "Stinnett", "Stockdale", "Stonewall", "Stowell", "Strawn",
  "Streetman", "Sudan", "Sugar Land", "Sulphur Springs", "Sunnyvale",
  "Sunray", "Sunset", "Sweeny", "Sweet Home", "Sweetwater",
  "Taft", "Tahoka", "Tarpley", "Tatum", "Taylor",
  "Teague", "Telferner", "Temple", "Terlingua", "Terrell",
  "Texarkana", "Texas City", "The Colony", "Thompsons", "Thorndale",
  "Thornton", "Thrall", "Three Rivers", "Tilden", "Timpson",
  "Tioga", "Tolar", "Tom Bean", "Tomball", "Tow",
  "Trenton", "Trinidad", "Trinity", "Troup", "Troy",
  "Tulia", "Tuscola", "Tyler", "Tynan", "Umbarger",
  "Universal City", "Uvalde", "Valley Mills", "Valley View", "Van",
  "Van Alstyne", "Van Vleck", "Vega", "Venus", "Vernon",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
