let seed = Math.random();

const xorshift = () => {
  seed ^= seed << 13;
  seed ^= seed >> 17;
  seed ^= seed << 5;
  return seed;
};

export const random = () => {
  return (xorshift() >>> 0) / 0xffffffff;
};
