import { render } from 'solid-js/web';
import { Router, useRoutes } from '@solidjs/router';
import routes from '~solid-pages';

import 'normalize.css/normalize.css';
import '@/assets/main.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
    );
}

render(() => {
    const Routes = useRoutes(routes);

    return (
        <Router>
            <Routes />
        </Router>
    );
}, document.getElementById('root') as HTMLElement);
