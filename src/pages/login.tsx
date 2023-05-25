import { useState } from 'react';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [apiKey, setApiKey] = useState('');

  const handleLogin = () => {
    if (apiKey === 'hc7fm4u9') {
      localStorage.setItem('apiKey', apiKey);
      onLogin();
    } else {
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
