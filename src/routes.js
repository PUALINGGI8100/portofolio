import Layout from './components/Layout';
import Welcome from './components/Welcome';
import Se from './components/Se';
import Networking from './components/Networking';
// SE components
import IndexSe from './components/Se/IndexSe';
import Espdht from './components/Se/Espdht';
import BomarFood from './components/Se/BomarFood'

let isServer = false;

export default [
    {
        id: 'layout',
        path: '/',
        Component: Layout,
        children: [
            { id: 'welcome', index: true, Component: Welcome, },
            { id: 'se', path: 'se', Component: Se, children: [
                { id: "se.null", index: true, Component: IndexSe },
                {
                    id: 'espdht',
                    path: "espdht",
                    Component: Espdht
                },
                {
                    id: 'bomarfood',
                    path: "bomarfood",
                    Component: BomarFood
                },
            ] },
            { id: 'networking', path: 'networking', Component: Networking, }
        ]
    }
];