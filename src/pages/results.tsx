import { useRouter } from 'next/router';

export default function ResultsPage() {
  const router = useRouter();
  const { country, season, league } = router.query;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-auto mt-10 font-mulish">
        <h1 className="text-4xl font-bold mb-4">Resultados</h1>
        <div className="container p-4 rounded-lg bg-purple-600 mt-4 text-white text-xl w-auto">

          {country && season && league && (
            <div className='font-bold space-y-4 '>
              <p> País: {country}</p>
              <p>Liga: {league}</p>
              <p>Temporada: {season}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
