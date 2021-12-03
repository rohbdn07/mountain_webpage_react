import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import SEO from './seo/landingPage';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <SEO title="Mountain ski resort" description="Ski resort in the north of the Finland " />
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
