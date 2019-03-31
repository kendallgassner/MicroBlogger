module.exports = {
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: ['/spec/', "src/index.tsx", "src/serviceWorker.ts"],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        }
    },
    globals: {
      'ts-jest':{
          tsConfig: 'tsconfig.test.json',
          diagnostics: false
      }
    },

    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    //enzyme
    setupFiles: ['<rootDir>/src/setupTests.ts'],

    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],

    transform: {'^.+\\.tsx?$': 'ts-jest'},

    moduleNameMapper:{
        ".*\\.css$": "<rootDir>/mocks/cssModule.js",
    }
};