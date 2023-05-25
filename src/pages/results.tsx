import { useRouter } from 'next/router';

export default function ResultsPage() {
  const router = useRouter();
  const { country, season, league } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resultados</h1>

      {country && season && league && (
        <p>País: {country}, Liga: {league}, Temporada: {season}</p>
      )}
    </div>
  );
}
