module.exports = {
    collectCoverageFrom: ['src/**/*.{ts,tsx,mjs}'],
    globals: {
      'ts-jest':{
          diagnostics: false
      }
    },

    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    //enzyme
    setupFiles: ['./src/setupTests.ts'],


    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],

    transform: {'^.+\\.tsx?$': 'ts-jest'}

};