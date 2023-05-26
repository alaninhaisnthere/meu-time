import { useState } from 'react';
import { useRouter } from 'next/router';
import Logoff from '../assets/logoff.svg';
import Image from 'next/image';

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('apiKey');
    onLogout();
    router.push('/');
  };

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">
        Meu Time
      </h1>
      <button onClick={onLogout} className="ml-4">
        <Image
          src="/assets/logoff.svg"
          alt="Logoff"
          width={20}
          height={20} />
      </button>
    </header>
  );
}
