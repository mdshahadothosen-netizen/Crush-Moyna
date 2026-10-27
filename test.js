
const { getReply } = require("./bot.js");

const tests = [
  "!help",
  "!joke",
  "!roast",
  "!love",
  "!flirt",
  "!mood",
  "!owner",
  "!time",
  "হাই ময়না",
  "আসসালামু আলাইকুম"
];

for (const message of tests) {
  console.log("তুমি:", message);
  console.log(
    "ময়না:",
    getReply(message) ?? "এটার উত্তর এখনো শেখানো হয়নি 💗"
  );
  console.log("--------------------");
}
