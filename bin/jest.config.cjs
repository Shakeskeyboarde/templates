/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  bail: 0,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'out/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/\\.', '/_', '/index\\.tsx?$', '\\.d\\.ts$'],
  coverageProvider: 'v8',
  coverageReporters: ['text-summary', 'html-spa', 'lcov'],
  coverageThreshold: { global: { branches: 50, functions: 50, lines: 50, statements: 50 } },
  moduleNameMapper: {},
  preset: 'ts-jest/presets/js-with-babel',
  restoreMocks: true,
  roots: ['src'],
  setupFilesAfterEnv: [],
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/core-js/'],
  verbose: true,
};
