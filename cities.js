const texasCities = [
  "Rio Grande City", "Rio Hondo", "Rio Medina", "Rising Star", "Riviera",
  "Roanoke", "Robert Lee", "Robstown", "Rochelle", "Rock Island",
  "Rockdale", "Rockport", "Rocksprings", "Rockwall", "Rockwood",
  "Rogers", "Ropesville", "Rosanky", "Roscoe", "Rosebud",
  "Rosenberg", "Rosharon", "Rotan", "Round Mountain", "Round Rock",
  "Round Top", "Rowena", "Rowlett", "Royse City", "Rule",
  "Runge", "Rusk", "Rye", "Sabinal", "Sachse",
  "Sadler", "Saint Hedwig", "Saint Jo", "Salado", "Saltillo",
  "San Angelo", "San Antonio", "San Augustine", "San Benito", "San Felipe",
  "San Juan", "San Marcos", "San Saba", "Sandia", "Sanger",
  "Santa Elena", "Santa Fe", "Schertz", "Schulenburg", "Scroggins",
  "Scurry", "Seabrook", "Seagoville", "Sealy", "Seguin",
  "Seminole", "Seymour", "Shallowater", "Shamrock", "Shepherd",
  "Sheppard", "Sherman", "Shiner", "Shiro", "Silsbee",
  "Silverton", "Simms", "Simonton", "Sinton", "Skidmore",
  "Slaton", "Smithville", "Smyer", "Snook", "Snyder",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
