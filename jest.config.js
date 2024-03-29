module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue2-jest'
    },
    'collectCoverage': true,
    'collectCoverageFrom': ['**/*.{js,vue}','!**/node_modules/**'],
}