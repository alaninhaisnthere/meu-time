import { useState } from 'react';
import Image from 'next/image';

import Player from '../assets/player.svg';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [apiKey, setApiKey] = useState('');

  const handleLogin = () => {
    if (apiKey === 'hc7fm4u9') {
      localStorage.setItem('apiKey', apiKey);
      onLogin();
    } else {
      alert('Erro de login');
    }
  };

  return (
    <div className='bg-login'>
      <div className='flex items-center justify-evenly font-mulish'>
        <div className='flex justify-center items-center h-screen'>
          <Image src={Player} alt='player' className='' />
        </div>
        <div className=''>
          <h1 className='font-black text-9xl text-yellow-400 mb-10'>
            Meu Time
          </h1>
          <div className='flex justify-center'>
            <div>
              <h2 className='flex justify-start font-bold text-white mb-2 text-xl'>
                Chave de acesso:
              </h2>
              <div className='flex flex-row'>
                <input
                  type='text'
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder='Insira aqui a API key'
                  className='rounded-lg mr-10 py-4 px-10 focus:outline-noneplaceholder:text-slate-400'
                />
                <div>
                  <button
                    className='bg-yellow-400 text-black font-bold text-2xl py-4 px-8 rounded-lg'
                    onClick={handleLogin}
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
