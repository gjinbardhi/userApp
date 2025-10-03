import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

import App from './App.jsx';
import Users from './Users.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/users/:id', element: <Users /> },
]);

const theme = extendTheme({ initialColorMode: 'light', useSystemColorMode: false });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
