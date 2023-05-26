import { useRouter } from 'next/router';
import { usePlayers } from '../utils/usePlayers';
import { useFormation } from '../utils/useFormation';
import { useGraphics } from '../utils/useGraphics';

export default function ResultsPage() {
  const router = useRouter();
  const { country, league, season } = router.query;
  const players = usePlayers();
  const formations = useFormation();
  const graphicsData = useGraphics();

  return (
    <>
      <div className="min-h-auto mt-10 font-mulish">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Resultados</h1>
          <div className="container p-5 rounded-lg bg-purple-600 items-center mt-4 text-white text-xl w-auto">
            {country && league && season && (
              <div className="font-bold space-y-4">
                <p>País: {country}</p>
                <p>Temporada: {season}</p>
                <p>liga: {league}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-evenly mt-8">

          <div className="flex flex-col">
            {players.map((player) => (
              <div
                key={player.player_id}
                className="bg-gray-200 p-4 rounded-lg flex items-center mb-4"
              >
                <div className="bg-purple-500 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">{player.name}</h3>
                  <p className="text-gray-600">Idade: {player.player_age}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {formations.map((formation) => (
              <div
                key={formation.formation_id}
                className="bg-gray-200 p-4 rounded-lg flex items-center mb-4"
              >
                <div className="flex flex-col items-center space-y-4">
                  <h1 className="font-bold text-2xl">
                    Formação mais utilizada
                  </h1>
                  <h3 className="font-bold text-4xl text-gray-600">{formation.type}</h3>
                  <p className="text-gray-600 font-bold text-xl">Utilizada {formation.usage} vezes</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {graphicsData.map((data) => (
              <div
                key={data.time}
                className="bg-gray-200 p-4 rounded-lg flex items-center mb-4"
              >
                <div className="w-16 mr-4">
                  <p className="text-lg font-bold">{data.time}:</p>
                </div>
                <div
                  dir="ltr"
                  className="w-64 bg-gray-400 h-6 rounded-lg"
                >
                  <div
                    dir="rtl"
                    className="h-full bg-purple-500 rounded-s-lg"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
                <p className="ml-4">{data.percentage.toFixed(2)}%</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
