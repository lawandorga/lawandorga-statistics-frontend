import lawandorga from 'lorga-ui';

const content = ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];

module.exports = lawandorga.utils.getTailwindConfig(content);
