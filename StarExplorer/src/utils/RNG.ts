let seed = Math.random();

const xorshift = () => {
  seed ^= seed << 13;
  console.log("🚀 ~ xorshift ~ seed ^= seed << 13:", (seed ^= seed << 13));
  seed ^= seed >> 17;
  console.log("🚀 ~ xorshift ~ seed ^= seed >> 17:", (seed ^= seed >> 17));
  seed ^= seed << 5;
  console.log("🚀 ~ xorshift ~ seed ^= seed << 5:", (seed ^= seed << 5));
  console.log("🚀 ~ xorshift ~ seed:", seed);
  return seed;
};

export const random = () => {
  console.log();

  console.log("🚀 ~ random ~ xorshift():", xorshift());
  console.log("🚀 ~ random ~ xorshift() >>> 0:", xorshift() >>> 0);
  console.log(
    "🚀 ~ random ~ (xorshift() >>> 0) / 0xffffffff:",
    (xorshift() >>> 0) / 0xffffffff
  );
  return (xorshift() >>> 0) / 0xffffffff;
};
