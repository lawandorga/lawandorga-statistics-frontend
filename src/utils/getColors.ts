const bright = [
  "#4477aa",
  "#ee6677",
  "#2288ee",
  "#ccbb44",
  "#66ccee",
  "#aa3377",
  "#bbbbbb",
];

const getColors = (n: number): string[] => {
  const ret = [];

  for (let i = 0; i < n; i++) {
    ret.push(bright[i % bright.length]);
  }

  return ret;
};

export default getColors;
