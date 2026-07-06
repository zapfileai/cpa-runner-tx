const texasCities = [
  "Melvin", "Memphis", "Menard", "Mercedes", "Meridian",
  "Merit", "Merkel", "Mertens", "Mertzon", "Mesquite",
  "Mexia", "Meyersville", "Miami", "Mico", "Midland",
  "Midlothian", "Milano", "Miles", "Milford", "Millican",
  "Millsap", "Mineola", "Mineral Wells", "Mirando City", "Mission",
  "Missouri City", "Monahans", "Mont Belvieu", "Montague", "Montgomery",
  "Moody", "Moran", "Morgan", "Morgan Mill", "Moulton",
  "Mount Enterprise", "Mount Pleasant", "Mount Vernon", "Muenster", "Muldoon",
  "Muleshoe", "Mullin", "Munday", "Nacogdoches", "Naples",
  "Nash", "Natalia", "Navasota", "Nederland", "Needville",
  "Nemo", "Nevada", "New Boston", "New Braunfels", "New Caney",
  "New Deal", "New Ulm", "New Waverly", "Newark", "Newcastle",
  "Nixon", "Nocona", "Nolanville", "Nome", "Normangee",
  "North Richland Hills", "North Zulch", "Oakwood", "Odem", "Odessa",
  "Oglesby", "Olden", "Olmito", "Olney", "Olton",
  "Onalaska", "Orange", "Orange Grove", "Ore City", "Orla",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
