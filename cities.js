const texasCities = [
  "Ovalo", "Overton", "Ozona", "Paducah", "Paige",
  "Palacios", "Palestine", "Palmer", "Pampa", "Panhandle",
  "Paradise", "Paris", "Pasadena", "Pattison", "Pattonville",
  "Pearland", "Pearsall", "Peaster", "Pecos", "Perryton",
  "Pettus", "Petty", "Pflugerville", "Pharr", "Pickton",
  "Pierce", "Pilot Point", "Pinehurst", "Pineland", "Pipe Creek",
  "Pittsburg", "Plainview", "Plano", "Plantersville", "Pleasanton",
  "Point", "Pollok", "Ponder", "Poolville", "Port Aransas",
  "Port Arthur", "Port Bolivar", "Port Isabel", "Port Lavaca", "Port Neches",
  "Port O'Connor", "Porter", "Portland", "Post", "Poteet",
  "Poth", "Pottsboro", "Pottsville", "Powderly", "Powell",
  "Prairie Lea", "Prairie View", "Premont", "Princeton", "Prosper",
  "Purdon", "Quanah", "Queen City", "Quemado", "Quinlan",
  "Quitman", "Ransom Canyon", "Ravenna", "Raymondville", "Raywood",
  "Red Oak", "Red Rock", "Redwater", "Refugio", "Rhome",
  "Richards", "Richardson", "Richmond", "Riesel", "Ringgold",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
