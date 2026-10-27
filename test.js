
const { getReply } = require("./bot.js");

const tests = [
  "/help",
  "/joke",
  "/roast",
  "/love",
  "/flirt",
  "/mood",
  "/owner",
  "হাই ময়না"
];

for (const message of tests) {
  console.log("তুমি:", message);
  console.log("ময়না:", getReply(message) ?? "এটার উত্তর এখনো শেখানো হয়নি 💗");
  console.log("--------------------");
}
