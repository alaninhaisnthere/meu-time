import '../styles/styles.css'

import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import LoginPage from './login';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey === 'hc7fm4u9') {
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
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          <Component {...pageProps} isLoggedIn={isLoggedIn} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default MyApp;
