
const { getSmartReply } = require("./bot.js");

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

async function main() {
  for (const message of tests) {
    console.log("তুমি:", message);
    console.log("ময়না:", await getSmartReply(message));
    console.log("--------------------");
  }
}

main().catch(console.error);
