import Link from 'next/link';
import { useState } from 'react';
import Login from './login';

export default function IndexPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (apiKey: string) => {
    if (apiKey === 'hc7fm4u9') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Meu Time</h1>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Navegação:</h2>
            <ul>
              <li>
                <Link href="/countries">Países</Link>
              </li>
              <li>
                <Link href="/seasons">Temporadas</Link>
              </li>
              <li>
                <Link href="/leagues">Ligas</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
