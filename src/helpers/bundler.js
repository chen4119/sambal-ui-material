const webpack = require("webpack");
const path = require("path");
// import nodeExternals from "webpack-node-externals";

const outputConfig = {
    library: {
        type: "umd"
    },
    globalObject: 'this'
};

const nodeJsConfig = {
    externalsPresets: { node: true }
    // externals: [nodeExternals()]
};

const webpackConfig = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // Apply rule for fonts files
                test: /\.(svg|woff|woff2|ttf|otf|eot)$/,
                type: "asset/inline"
            },
        ]
    }
};

async function bundleSambalFile(entry) {
    return new Promise((resolve, reject) => {
        const config = {
            ...webpackConfig,
            ...nodeJsConfig,
            entry: entry,
            mode: "production",
            output: {
                ...outputConfig,
                filename: "sambal.bundle.js",
                path: path.resolve(process.cwd(), `dist`)
            }
        };
        const compiler = webpack(config);
        compiler.run((err, stats) => {
            if (!err) {
                resolve();
            } else {
                reject(err);
            }
        });
    });
}

module.exports = {
    bundleSambalFile: bundleSambalFile
}