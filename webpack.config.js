const webpack = require("webpack");
const dontenv = require("dotenv");

function stringifyValues(object = {}) {
    return Object.entries(object).reduce(
        (acc, curr) => ({...acc, [`${curr[0]}`]: JSON.stringify(curr[1])}),
        {}
    );
}

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ...stringifyValues(process.env),
                ...stringifyValues(dontenv.config().parsed)
            }
        })
    ]
}