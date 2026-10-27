
const PREFIX = "!";
const owner = "Md Shahadot Hosen";
const botName = "Crush-Moyna";

const replies = {
  "!help": [
    "আচ্ছা বাবুইই 🥹🎀 আমার কমান্ডগুলো শোনো— !joke, !roast, !love, !flirt, !mood, !owner 💗",
    "হিহিহি 🙈💞 কমান্ড জানতে !help দাও, আর আমার সাথে মিষ্টি করে কথা বলো!"
  ],

  "!joke": [
    "এইইই বাবু 😂💕 তোমার বুদ্ধি দেখে আমার হাসতে হাসতে পেট ব্যথা!",
    "হিহিহি 🤭 তুমি একটা আস্ত পাগল, কিন্তু মজার পাগল! 🎀",
    "উফফফ 😭😂 তোমাকে নিয়ে সিরিয়াস হওয়াটাও একটা কমেডি!"
  ],

  "!roast": [
    "এই শোনোও 😏💅 তোমার অ্যাটিটিউড আকাশে, কিন্তু পারফরম্যান্স মাটির নিচে!",
    "বাবা রে বাবা 🙄🎀 নিজেকে হিরো ভাবো, কিন্তু কাহিনিতে তুমি কমেডিয়ান!",
    "তোমার কনফিডেন্স দেখে ভালো লাগে, শুধু রেজাল্টটা একটু লুকিয়ে রেখো! 😂💗"
  ],

  "!love": [
    "ইশশশ 🙈💗 এইভাবে বললে কিন্তু আমি লজ্জা পেয়ে যাবো!",
    "আহ্লাদে আটখানা হয়ে গেলাম গো! 🥹💕",
    "উফফ, এত মিষ্টি কথা বলো কেন? আমার তো লজ্জা লাগছে! 😳🎀"
  ],

  "!flirt": [
    "এই যে বাবুইই 😚🌸 আমাকে ইমপ্রেস করতে এসেছো নাকি?",
    "হায় হায় 🙈💞 এত কিউট হওয়ার পারমিশন কে দিয়েছে তোমাকে?",
    "চুপপপ 🤭💗 বেশি মিষ্টি কথা বললে কিন্তু আমি লজ্জা পাবো!"
  ],

  "!mood": [
    "আজ আমার মুড একদম পিংক পিংক 🎀💗",
    "আজ একটু ঢং করব, একটু হাসব, আর সবাইকে জ্বালাবো! 🤭💕",
    "মুড ভালো আছে বাবু, চকলেট দিলে আরও ভালো হবে! 🍫🥹"
  ],

  "!owner": [
    `আমার Owner হলেন ${owner} 👑💗 উনিই আমার বটের বস! হিহিহি 🙈🎀`,
    `এইইই সবাই শোনোও! 🥰 আমার প্রিয় Owner ${owner}! 💖👑`
  ]
};

function getReply(message) {
  const text = message.trim().toLowerCase();

  if (replies[text]) {
    const list = replies[text];
    return list[Math.floor(Math.random() * list.length)];
  }

  if (
    text.includes("হাই") ||
    text.includes("hello") ||
    text.includes("হ্যালো")
  ) {
    return `এইইই বাবুইই 🥰🎀 কেমন আছো গো? তোমার ${botName} কিন্তু এখানেই আছে! 💗`;
  }

  if (
    text.includes("কেমন আছ") ||
    text.includes("kmn acho")
  ) {
    return "আমি তো ভালোই আছি গো 🥹💕 তুমি কেমন আছো, বলো না! 🎀";
  }

  if (
    text.includes("ভালোবাসি") ||
    text.includes("love you")
  ) {
    return "ইশশশ 🙈💗 এমন কথা বললে আমি লজ্জায় শেষ! হিহিহি! 😚🌸";
  }

  if (
    text.includes("ময়না") ||
    text.includes("moyna")
  ) {
    return "এইইই, কে আমার নাম ধরে ডাকলো? 🥰🎀 বলো বাবু, কী চাই তোমার?";
  }

  if (text.includes("গালি") || text.includes("pagli")) {
    return "এইইই দুষ্টু! 😤💅 আমার সাথে ভালো করে কথা বলো, নইলে অভিমান করব! 🥹💗";
  }
  if (
    text.includes("আসসালামু আলাইকুম") ||
    text.includes("salam")
  ) {
    return "ওয়ালাইকুমুস সালাম 🥰💗 — তোমাদের ময়না 🎀";
  }

  if (text.includes("/time") || text.includes("কয়টা বাজে")) {
    const time = new Intl.DateTimeFormat("bn-BD", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).format(new Date());

    return `এখন বাংলাদেশ সময় ${time} 🕒💗`;
  }
  return null;
}

module.exports = { getReply, PREFIX, botName, owner };
