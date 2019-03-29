// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
        "@babel/preset-react",
    ],
    "test": {
        plugin: ["transform-es2015-modules-commonjs"]
    }
};