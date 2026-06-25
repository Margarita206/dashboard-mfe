import {defineConfig} from "@rspack/cli";
import {rspack} from "@rspack/core";
//@ts-ignore
import ReactRefreshRspackPlugin from '@rspack/plugin-react-refresh'
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";
// @ts-ignore
import {dependencies, name} from './package.json'
import * as path from "node:path";

const isDev = process.env.NODE_ENV === "development";

const envFile = isDev ? '.env.development' : '.env.production'

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default defineConfig({
    context: __dirname,
    entry: {
        main: "./src/bootstrap.js"
    },
    resolve: {
        extensions: ["...", ".ts", ".tsx", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: {not: [/url/]}, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(jsx?|tsx?)$/,
                use: [
                    {
                        loader: "builtin:swc-loader",
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                    tsx: true
                                },
                                transform: {
                                    react: {
                                        runtime: "automatic",
                                        development: isDev,
                                        refresh: isDev
                                    }
                                }
                            },
                            env: {targets}
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        server: 'https',
    },
    plugins: [
        new rspack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
            'process.env.VITE_MFE_REMOTES_SOURCE': JSON.stringify(
                process.env.VITE_MFE_REMOTES_SOURCE || 'http://localhost:3001'
            ),
        }),
        new rspack.HtmlRspackPlugin({
            template: "./index.html"
        }),
        new ModuleFederationPlugin({
            name: name,
            filename: 'remoteEntry.js',
            remotes: {},
            shared: {
                'antd': {singleton: true, requiredVersion: dependencies['antd']},
                '@mui/material': {
                    singleton: true,
                    requiredVersion: dependencies['@mui/material'],
                },
                '@emotion/react': {
                    singleton: true,
                    requiredVersion: dependencies['@emotion/react'],
                },
                '@emotion/styled': {
                    singleton: true,
                    requiredVersion: dependencies['@emotion/styled'],
                },
                "react": {singleton: true, requiredVersion: dependencies['react'], eager: true},
                "react-dom": {singleton: true, requiredVersion: dependencies['react-dom'], eager: true},
                "react-router-dom": {singleton: true, requiredVersion: dependencies['react-router-dom'], eager: true},
            }
        }),
              //@ts-ignore
        isDev ? new ReactRefreshRspackPlugin() : null
    ].filter(Boolean),
    optimization: {
        nodeEnv: isDev ? 'development' : 'production',
        minimizer: [
            new rspack.SwcJsMinimizerRspackPlugin(),
            new rspack.LightningCssMinimizerRspackPlugin({
                minimizerOptions: {targets}
            })
        ]
    },
    experiments: {
        css: true
    }
});
