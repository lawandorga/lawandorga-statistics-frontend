const lawandorga = require("@lawandorga/components");

const content = ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];

module.exports = lawandorga.utils.getTailwindConfig(content);
