const Terser = require("terser");
const fs = require("fs");

const options = {
  output: {
    comments: "some"
  }
};
const version = process.env.npm_package_version;
const result = Terser.minify(
  fs.readFileSync("./src/radar.js", "utf8"),
  options
);

fs.writeFileSync(`./dist/radar-${version}.min.js`, result.code);
