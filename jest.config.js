module.exports = {
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    globals: {
      'ts-jest':{
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