import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from './src/pages/Notfound';
import { Homepage } from './src/pages/Homepage';
import RetrieveLiriumBlocks from './src/components/GetLiriumBlocks';
import { Layout } from './src/pages/Layout';
import SendTransaction from './src/components/SendTransaction';
import UnderMaintenance from './src/pages/UnderMaintenance';
import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import Logout from './src/components/Logout';




export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/transactions',
        element: <RetrieveLiriumBlocks />,
      },
      {
        path: '/sendtransaction',
        element: <SendTransaction />,
      },
      {
        path: '/signup',
        element: <SignUpPage/>,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
      {
        path: '/maintenance',
        element: <UnderMaintenance />,
      },
    ],
  },
]);
