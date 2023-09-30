const versions = {
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  vite: "^4.4.9",
  vike: "^0.4.142",
  express: "^4.18.2",
  compression: "^1.7.4",
  sirv: "^2.0.3",
  "cross-fetch": "^4.0.0",
  "node-fetch": "^3.3.2",
};

const devVersions = {
  "@types/node-fetch": "^2.6.4",
  "@types/compression": "^1.7.2",
  "@types/express": "4.17.17",
  "@types/node": "^20.5.6",
  "@types/react": "^18.2.20",
  "@types/react-dom": "^18.2.7",
  "@typescript-eslint/eslint-plugin": "^6.3.0",
  "@typescript-eslint/parser": "^6.3.0",
  "@vitejs/plugin-react": "^4.0.4",
  "cross-env": "^7.0.3",
  eslint: "^8.47.0",
  "eslint-plugin-react": "^7.33.1",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  prettier: "3.0.1",
  "prettier-plugin-organize-imports": "^3.2.3",
  rimraf: "^5.0.1",
  "ts-node": "^10.9.1",
  typescript: "5.1.x",
  "@brillout/test-e2e": "^0.5.15",
};

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
        if (version === "workspace:override" && versions[pkg]) {
          packageJson[depType][pkg] = versions[pkg];
        }
        if (version === "workspace:override" && devVersions[pkg]) {
          packageJson[depType][pkg] = devVersions[pkg];
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
