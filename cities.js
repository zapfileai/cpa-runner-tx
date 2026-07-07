const texasCities = [
  "Victoria", "Vidor", "Waco", "Wadsworth", "Waelder",
  "Wall", "Waller", "Wallis", "Washington", "Waskom",
  "Waxahachie", "Weatherford", "Webster", "Weesatche", "Weimar",
  "Wellborn", "Wellington", "Weslaco", "West", "West Columbia",
  "Weston", "Wharton", "Wheeler", "Wheelock", "White Oak",
  "Whitehouse", "Whitesboro", "Whitewright", "Whitharral", "Whitney",
  "Wichita Falls", "Willis", "Wills Point", "Wilmer", "Wilson",
  "Wimberley", "Windthorst", "Wink", "Winnie", "Winnsboro",
  "Winters", "Woden", "Wolfe City", "Wolfforth", "Woodson",
  "Woodville", "Woodway", "Wortham", "Wylie", "Yancey",
  "Yantis", "Yoakum", "Yorktown", "Zapata", "Zavalla",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < texasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(texasCities[i]);
}

module.exports = { batches };
