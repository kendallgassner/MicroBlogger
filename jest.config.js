module.exports = {
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
            statements: 95,
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