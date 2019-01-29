const Terser = require("terser");
const fs = require("fs");

const version = process.env.npm_package_version;
const result = Terser.minify(fs.readFileSync("./docs/radar.js", "utf8"));

fs.writeFileSync(`./dist/radar-${version}.min.js`, result.code);
