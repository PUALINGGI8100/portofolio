import Layout from './components/Layout';
import Welcome from './components/Welcome';
import Se from './components/Se';
import Networking from './components/Networking';
// SE components
import Espdht from './components/Se/Espdht';

let isServer = false;

export default [
    {
        id: 'layout',
        path: '/',
        Component: Layout,
        children: [
            { id: 'welcome', index: true, Component: Welcome, },
            { id: 'se', path: 'se', Component: Se, children: [
                { id: "se.null", index: true, Component: null },
                {
                    id: 'espdht',
                    path: "espdht",
                    Component: Espdht
                },
            ] },
            { id: 'networking', path: 'networking', Component: Networking, }
        ]
    }
];