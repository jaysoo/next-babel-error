module.exports = {
  displayName: 'demo',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['next/babel'] }],
  }
};
