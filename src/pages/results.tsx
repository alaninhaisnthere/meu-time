import { useRouter } from 'next/router';
import { usePlayers } from '../utils/usePlayers';
import { useFormation } from '../utils/useFormation';

export default function ResultsPage() {
  const router = useRouter();
  const { country, season, league } = router.query;
  const players = usePlayers();
  const formations = useFormation();

  return (
    <>
      <div className="flex flex-col min-h-auto mt-10 font-mulish">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Resultados</h1>
          <div className="container p-4 rounded-lg bg-purple-600 items-center mt-4 text-white text-xl w-auto">
            {country && season && league && (
              <div className="font-bold space-y-4">
                <p>País: {country}</p>
                <p>Liga: {league}</p>
                <p>Temporada: {season}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="flex mt-8 ml-10">
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
          </div>

          <div className="flex mt-8 ml-10">
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
          </div>
        </div>
      </div>
    </>
  );
}
