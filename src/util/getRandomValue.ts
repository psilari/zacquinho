const f1 = require(".././media/zac1.mp3");
const f2 = require(".././media/zac2.mp3");
const f3 = require(".././media/zac3.mp3");
const f4 = require(".././media/zac4.mp3");
const f5 = require(".././media/zac5.mp3");
const f6 = require(".././media/zac6.mp3");
const f7 = require(".././media/zac7.mp3");
const f8 = require(".././media/zac8.mp3");
const f9 = require(".././media/zac9.mp3");
const f10 = require(".././media/zac10.mp3");
const f11 = require(".././media/zac11.mp3");
const f12 = require(".././media/zac12.mp3");

const getRandomValue = () => {
  const arr = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12];
  const randomElement = arr[Math.floor(Math.random() * arr.length)];

  return randomElement;
};

export default getRandomValue;
