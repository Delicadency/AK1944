import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: [
    "@testing-library/jest-dom", // Zaktualizowano do poprawnej ścieżki
    "<rootDir>/jest.setup.js", // Dodatkowy plik setup (opcjonalnie)
  ],
  testEnvironment: "jest-fixed-jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(customJestConfig);
