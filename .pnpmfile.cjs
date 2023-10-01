const fs = require("fs");
const path = require("path");

const commonPackageJsonPath = path.resolve(__dirname, "common/package.json");
const commonPackageJson = JSON.parse(
  fs.readFileSync(commonPackageJsonPath, "utf8")
);

function readPackage(packageJson, context) {
  if (packageJson.name === "ts-ssr-react-style-mui-styled-components") {
    if (
      packageJson.dependencies &&
      packageJson.dependencies["@mui/styled-engine"]
    ) {
      packageJson.dependencies["@mui/styled-engine"] =
        "pnpm:@mui/styled-engine-sc@5.12.0";
    }
  }
  ["dependencies", "devDependencies"].forEach((depType) => {
    if (packageJson[depType]) {
      for (const [pkg, version] of Object.entries(packageJson[depType])) {
        // if (version === "workspace:override" && versions[pkg]) {
        //   packageJson[depType][pkg] = versions[pkg];
        // }
        // if (version === "workspace:override" && devVersions[pkg]) {
        //   packageJson[depType][pkg] = devVersions[pkg];
        // }
        if (
          commonPackageJson.dependencies &&
          version === "workspace:override" &&
          commonPackageJson.dependencies[pkg]
        ) {
          console.log(
            `commonPackageJson.dependencies[${pkg}] = ${commonPackageJson.dependencies[pkg]}`
          );
          packageJson[depType][pkg] = commonPackageJson.dependencies[pkg];
        }
        if (
          commonPackageJson.devDependencies &&
          version === "workspace:override" &&
          commonPackageJson.devDependencies[pkg]
        ) {
          console.log(
            `commonPackageJson.devDependencies[${pkg}] = ${commonPackageJson.devDependencies[pkg]}`
          );
          packageJson[depType][pkg] = commonPackageJson.devDependencies[pkg];
        }
      }
    }
  });
  return packageJson;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
