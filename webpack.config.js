const path = require("path");

const themeEntries = require('./MapStore2/build/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;
const ModuleFederationPlugin = require('./MapStore2/build/moduleFederation').plugin;
const port = "8080";
const host = "localhost";
const protocol = "http";

module.exports = require('./MapStore2/build/buildConfig')(
    {
        'ClevelandMetropark': path.join(__dirname, "js", "app"),
        'ClevelandMetropark-embedded': path.join(__dirname, "js", "embedded"),
        'ClevelandMetropark-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api"),
        'geostory-embedded': path.join(__dirname, "js", "geostoryEmbedded"),
        "dashboard-embedded": path.join(__dirname, "js", "dashboardEmbedded")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    [extractThemesPlugin, ModuleFederationPlugin],
    false,
    undefined,
    '.ClevelandMetropark',
    [],
    {
        "@mapstore/patcher": path.resolve(__dirname, "node_modules", "@mapstore", "patcher"),
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        "@js": path.resolve(__dirname, "js")
    },
    {
        '/rest/geostore': {
            target: `${protocol}://${host}:${port}/mapstore`,
            secure: false,
            headers: {
                host: `${host}`
            }
        },
        '/pdf': {
            target: `${protocol}://${host}:${port}/mapstore`,
            secure: false,
            headers: {
                host: `${host}`
            }
        },
        '/mapstore/pdf': {
            target: `${protocol}://${host}:${port}/mapstore`,
            secure: false,
            headers: {
                host: `${host}`
            }
        },
        '/proxy': {
            target: `${protocol}://${host}:${port}/mapstore`,
            secure: false,
            headers: {
                host: `${host}`
            }
        },
        '/geoserver': {
            target: `${protocol}://${host}:${port}/`,
            secure: false,
            headers: {
                host: `${host}`
            }
        }
    }
);
