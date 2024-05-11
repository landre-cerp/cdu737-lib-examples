const adjustBrightness = (setting, value) => {
  const newValue = setting + value;
  return Math.min(Math.max(newValue, 0), 0xff);
};

let brt = 250;
console.log(adjustBrightness(brt, 2));
console.log(adjustBrightness(brt, -300));
