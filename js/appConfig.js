/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import security from '@mapstore/reducers/security';

import pluginsDef from './plugins.js';

export default {
    pages: [{
        name: "home",
        path: "/",
        component: require('@mapstore/product/pages/Maps').default,
        pageConfig: {
            name: 'home'
        }
    }, {
        name: "maps",
        path: "/maps",
        component: require('@mapstore/product/pages/Maps').default,
        pageConfig: {
            name: 'maps'
        }
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId",
        component: require('@mapstore/product/pages/MapViewer').default,
        pageConfig: {
            name: 'mapviewer'
        }
    }, {
        name: "mapviewer",
        path: "/viewer/:mapId",
        component: require('@mapstore/product/pages/MapViewer').default
    }, {
        name: 'context',
        path: "/context/:contextName",
        component: require('@mapstore/product/pages/Context').default
    }, {
        name: 'context',
        path: "/context/:contextName/:mapId",
        component: require('@mapstore/product/pages/Context').default
    }, {
        name: 'context-creator',
        path: "/context-creator/:contextId",
        component: require('@mapstore/product/pages/ContextCreator').default
    }, {
        name: "manager",
        path: "/manager",
        component: require('@mapstore/product/pages/Manager').default
    }, {
        name: "manager",
        path: "/manager/:tool",
        component: require('@mapstore/product/pages/Manager').default
    }, {
        name: "context-manager",
        path: "/context-manager",
        component: require('@mapstore/product/pages/ContextManager').default
    }, {
        name: "dashboard",
        path: "/dashboard",
        component: require('@mapstore/product/pages/Dashboard').default
    }, {
        name: "dashboard",
        path: "/dashboard/:did",
        component: require('@mapstore/product/pages/Dashboard').default
    }, {
        name: "rulesmanager",
        path: "/rules-manager",
        component: require('@mapstore/product/pages/RulesManager').default
    }, {
        name: "geostory",
        path: "/geostory/:gid",
        component: require('@mapstore/product/pages/GeoStory').default
    }, {
        name: "geostory",
        path: "/geostory/:gid/section/:sectionId",
        component: require('@mapstore/product/pages/GeoStory').default
    }, {
        name: "geostory",
        path: "/geostory/:gid/section/:sectionId/column/:columnId",
        component: require('@mapstore/product/pages/GeoStory').default
    }, {
        name: "geostory",
        path: "/geostory/shared/:gid",
        component: require('@mapstore/product/pages/GeoStory').default
    },
    {
        name: "geostory",
        path: "/geostory/shared/:gid/section/:sectionId",
        component: require('@mapstore/product/pages/GeoStory').default
    },
    {
        name: "geostory",
        path: "/geostory/shared/:gid/section/:sectionId/column/:columnId",
        component: require('@mapstore/product/pages/GeoStory').default
    }],
    pluginsDef,
    initialState: {
        defaultState: {
            mousePosition: { enabled: false },
            controls: {}
        },
        mobile: {
            mapInfo: { enabled: true, infoFormat: 'application/json' },
            mousePosition: { enabled: true, crs: "EPSG:4326", showCenter: true }
        }
    },
    themeCfg: {
        theme: "default"
    },
    appReducers: {
        security
    },
    appEpics: {},
    storeOpts: {
        persist: {
            whitelist: ['security']
        }
    }
};
