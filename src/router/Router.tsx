import { createBrowserRouter } from 'react-router-dom';
import { RouterPath } from '@/constants';
import { Home, Login, Register } from '@/pages';
import { ProviderRouter } from './ProviderRouter';

export const router = createBrowserRouter([
    {
        path: RouterPath.base,
        element: <ProviderRouter />,
        children:[
            {
                path: RouterPath.base,
                element: <Home />
            }
        ]
    },
    {
        path: RouterPath.login,
        element: <Login />
    },
    {
        path: RouterPath.register,
        element: <Register />
    }
])
