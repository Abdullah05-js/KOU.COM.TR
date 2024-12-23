import rateLimit from "express-rate-limit";


export const LimitUserLogin = rateLimit({
  windowMs: 5 * 60 * 10000,
  max: 5,
  message: "LAN spamlama aq ya görüyorum seni ip'in de var piç",
});

export const LimitUserRegister = rateLimit({
  windowMs: 30 * 60 * 10000,
  max: 5,
  message: "LAN spamlama aq ya görüyorum seni ip'in de var piç",
});

export const LimitOTP = rateLimit({
  windowMs: 15 * 60 * 10000,
  max: 3,
  message: "LAN spamlama aq ya görüyorum seni ip'in de var piç",
});

export const LimitSearch = rateLimit({
  windowMs: 15 * 60 * 10000,
  max: 50,
  message: "yavaş kanka",
});

export const LimitCreatePost = rateLimit({
  windowMs: 15 * 60 * 10000,
  max: 10,
  message: "YOU CAN POST 10 POSTS EVERY 10 MİNUTES",
});
