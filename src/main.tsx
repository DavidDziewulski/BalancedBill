import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.scss';
import { router } from './router';

const main = () => {
    const $el = document.getElementById('root');

    if(!$el){
        throw new Error('There are no valid container');
    }

    const root = createRoot($el);

    root.render(
        <RouterProvider router={router} />
    )
};

main();
