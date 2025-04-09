import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

// Initialize React Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
