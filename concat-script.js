// Añadir en el package.json
// "build:component": "ng build --prod --output-hashing none && node build-web-cp.js"
const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./dist/menu-colombia/runtime.js",
    "./dist/menu-colombia/polyfills.js",
    "./dist/menu-colombia/main.js",
  ];

  await fs.ensureDir("widget");
  await concat(files, "widget/menu-widget.js");
};
build();
