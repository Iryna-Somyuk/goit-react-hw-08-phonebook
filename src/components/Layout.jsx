import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '60px 16px' }}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

// style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}