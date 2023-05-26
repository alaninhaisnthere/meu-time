import { useState } from 'react';
import Image from 'next/image';

import Player from '../assets/player.svg'
import Field from '../assets/campo.svg'


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
    <div className='bg-login'>
      <div className='flex items-center font-mulish'>
        <div className='items-center'>
          <Image
            src={Player}
            alt='player'
            className='' />
          <Image
            src={Field}
            alt='field'
            className='' />
        </div>
        <div className=''>
          <h1 className='font-black text-8xl text-yellow-400'>
            Meu Time
          </h1>
          <div className='flex flex-col space-y-4'>
            <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className='' />
            <div>
              <button className='bg-yellow-400 text-black font-bold text-2xl py-4 px-8 rounded-lg' onClick={handleLogin}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
