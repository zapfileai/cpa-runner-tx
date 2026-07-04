const texasCities = [
  "Fritch", "Fulshear", "Fulton", "Gail", "Gainesville",
  "Galena Park", "Galveston", "Ganado", "Garden City", "Gardendale",
  "Garland", "Garrison", "Garwood", "Gary", "Gatesville",
  "Gause", "George West", "Georgetown", "Giddings", "Gilchrist",
  "Gilmer", "Girvin", "Gladewater", "Glen Flora", "Glen Rose",
  "Godley", "Golden", "Goldsboro", "Goldsmith", "Goldthwaite",
  "Goliad", "Gonzales", "Goodrich", "Gordon", "Gordonville",
  "Graford", "Graham", "Granbury", "Grand Prairie", "Grand Saline",
  "Grandfalls", "Grandview", "Granger", "Grapeland", "Grapevine",
  "Greenville", "Gregory", "Groesbeck", "Groves", "Gruver",
  "Guerra", "Gunter", "Gustine", "Hale Center", "Hallettsville",
  "Hallsville", "Haltom City", "Hamilton", "Hamlin", "Hamshire",
  "Happy", "Harker Heights", "Harlingen", "Harper", "Haskell",
  "Haslet", "Hawkins", "Hearne", "Helotes", "Hemphill",
  "Hempstead", "Henderson", "Henrietta", "Hereford", "Hewitt",
  "Hico", "Hidalgo", "High Island", "Highlands", "Hillsboro",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
