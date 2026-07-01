const texasCities = [
  "Bivins", "Blanco", "Blanket", "Bleiblerville", "Blessing",
  "Bloomburg", "Blooming Grove", "Blossom", "Blue Ridge", "Bluff Dale",
  "Blum", "Boerne", "Bogata", "Boling", "Bonham",
  "Booker", "Borger", "Bowie", "Boyd", "Boys Ranch",
  "Brady", "Brashear", "Brazoria", "Breckenridge", "Bremond",
  "Brenham", "Bridge City", "Bridgeport", "Briggs", "Briscoe",
  "Bronte", "Brookeland", "Brookshire", "Brownfield", "Brownsboro",
  "Brownsville", "Brownwood", "Bryan", "Buchanan Dam", "Buckholts",
  "Buda", "Buffalo", "Buffalo Gap", "Bullard", "Bulverde",
  "Buna", "Burkburnett", "Burleson", "Burnet", "Burton",
  "Bushland", "Cactus", "Caddo Mills", "Caldwell", "Cameron",
  "Campbell", "Canadian", "Canton", "Canutillo", "Canyon",
  "Canyon Lake", "Carmine", "Carrollton", "Carthage", "Castell",
  "Castroville", "Cat Spring", "Cedar Creek", "Cedar Hill", "Cedar Lane",
  "Cedar Park", "Celeste", "Celina", "Center", "Center Point",
  "Centerville", "Chandler", "Channelview", "Chappell Hill", "Charlotte",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
