import '../styles/styles.css';

import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Header from '@/components/header';
import LoginPage from './loginArea';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey === 'd98cd2a439afddad8db38ccc118dfe88') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('apiKey');
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {!isLoggedIn ? (
        <LoginPage onLogin={() => handleLogin()} />
      ) : (
        <Component {...pageProps} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
}

export default MyApp;
