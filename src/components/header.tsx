import Image from 'next/image';
import Link from 'next/link';
import Logoff from '../assets/logoff.svg';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  if (!isLoggedIn) {
    return null;
  }

  const handleLogout = () => {
    const confirmLogout = window.confirm('Deseja sair?');
    if (confirmLogout) {
      onLogout();
    }
  };

  return (
    <div>
      <header className='bg-purple-600 flex justify-between items-center px-4 py-2 px-5'>
        <div>
          <Link href="/" className='text-yellow-400 font-bold text-4xl'>
            Meu Time
          </Link>
        </div>
        <div>
          <button onClick={handleLogout}>
            <Image src={Logoff} alt="Logout" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
