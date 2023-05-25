import { useState } from 'react';

interface LoginProps {
  onLogin: (apiKey: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(apiKey);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meu Time</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          API Key:
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border border-gray-300 rounded-md p-2 ml-2"
          />
        </label>
        <button type="submit" className="bg-green-500 text-white rounded-md px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}
