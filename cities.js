const texasCities = [
  "Deport", "Desoto", "Detroit", "Devine", "Diana",
  "Diboll", "Dickinson", "Dime Box", "Dimmitt", "Dodd City",
  "Dodge", "Donie", "Donna", "Douglass", "Driftwood",
  "Dripping Springs", "Dryden", "Dublin", "Dumas", "Duncanville",
  "Dyess", "Eagle Lake", "Eagle Pass", "Early", "East Bernard",
  "Eastland", "Ector", "Edcouch", "Eddy", "Edgewood",
  "Edinburg", "Edna", "El Campo", "El Paso", "Eldorado",
  "Electra", "Elgin", "Elkhart", "Elm Mott", "Elmendorf",
  "Emory", "Encinal", "Energy", "Ennis", "Euless",
  "Eustace", "Evadale", "Evant", "Fairfield", "Falls City",
  "Farmersville", "Farwell", "Fate", "Fayetteville", "Ferris",
  "Fischer", "Flint", "Flomot", "Florence", "Floresville",
  "Flower Mound", "Floydada", "Follett", "Forestburg", "Forney",
  "Forreston", "Fort Davis", "Fort Hood", "Fort Mckavett", "Fort Stockton",
  "Fort Worth", "Franklin", "Frankston", "Fred", "Fredericksburg",
  "Freeport", "Fresno", "Friendswood", "Friona", "Frisco",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
