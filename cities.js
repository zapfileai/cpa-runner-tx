const texasCities = [
  "Cherokee", "Chico", "Childress", "Chillicothe", "China Spring",
  "Christine", "Christoval", "Cibolo", "Cisco", "Clarendon",
  "Clarksville", "Claude", "Cleburne", "Cleveland", "Clifton",
  "Clute", "Clyde", "Coahoma", "Coldspring", "Coleman",
  "College Station", "Colleyville", "Collinsville", "Colmesneil", "Colorado City",
  "Columbus", "Comanche", "Comfort", "Commerce", "Como",
  "Concan", "Concepcion", "Concord", "Conroe", "Converse",
  "Coolidge", "Copeville", "Coppell", "Copperas Cove", "Corpus Christi",
  "Corsicana", "Cotulla", "Coupland", "Covington", "Crandall",
  "Crane", "Cranfills Gap", "Crawford", "Cresson", "Crockett",
  "Crosby", "Crosbyton", "Cross Plains", "Crowell", "Crowley",
  "Cuero", "Cumby", "Cushing", "Cypress", "D'Hanis",
  "Daingerfield", "Daisetta", "Dale", "Dalhart", "Dallardsville",
  "Dallas", "Damon", "Danbury", "Davilla", "Dayton",
  "De Kalb", "De Leon", "Decatur", "Deer Park", "Del Rio",
  "Del Valle", "Denison", "Dennis", "Denton", "Denver City",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
