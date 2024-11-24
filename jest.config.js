import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', 
});

const customJestConfig = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', 
    '<rootDir>/jest.setup.js', 
  ],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], 
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', 
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

export default createJestConfig(customJestConfig);
