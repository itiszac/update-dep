const fs = require("fs");

const package = require("./package.json");

const latestDeps = {};

Object.entries(latestDeps).forEach(([key, meta]) => {
  if (package.dependencies[key]) {
    package.dependencies[key] = `^${meta.latest}`;
  } else {
    package.devDependencies[key] = `^${meta.latest}`;
  }
});

fs.writeFileSync("./package.json", JSON.stringify(package, null, 2));
