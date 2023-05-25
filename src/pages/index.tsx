import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meu Time</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Navegação:</h2>
        <ul>
          <li>
            <Link href="/countries">
              Países
            </Link>
          </li>
          <li>
            <Link href="/seasons">
              Temporadas
            </Link>
          </li>
          <li>
            <Link href="/leagues">
              Ligas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
