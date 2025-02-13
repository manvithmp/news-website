module.exports = {  
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],  
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    testEnvironment: 'jest-environment-jsdom',
  
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },  
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    },
  };