require('ignore-styles');
require('@babel/polyfill');
require('@babel/register')({
    ignore: [/\/(dist|node_modules)\//],
    presets: ['@babel/preset-react', "@babel/preset-env"],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: false }],
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime",
        'dynamic-import-node',
    ]
});

require('./index');
