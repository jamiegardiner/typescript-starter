module.exports = {
  "*.ts": [
    () => "npm run test:types",
    "npm run lint:fix",
    "npm run format:write",
  ],
  "*.{js,json,md}": ["npm run format:write"],
};
