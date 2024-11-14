const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/index.tsx",
    output: {
        path: `${__dirname}/dist/`,
        filename: "bundle.js",
        publicPath: "/",
    },
    mode: "development",
    devServer: {
        static: {
            directory: "./dist",
        },
        historyApiFallback: {
            index: "index.html",
        },
        devMiddleware: {
            writeToDisk: (filePath) => {
                // hot-update ファイルを除外
                return !/\.hot-update\.(js|json|js\.map)$/.test(filePath);
            },
        },
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                // 拡張子cssのファイル（正規表現）；
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                // 拡張子.ts.tsxの場合
                test: /(\.ts|\.tsx)$/,
                // typescriptをコンパイルする
                use: "ts-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // テンプレートに使用するHTMLファイルを指定
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        // 拡張子を配列で指定
        extensions: [".tsx",".ts", ".js"],
    },
};