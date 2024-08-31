import axios from "axios";
import { Game } from "../../datatypes/datatypes";

async function getGameById(gameId: string): Promise<Game | null> {
    try {
        const res = await axios.get(`http://localhost:3000/games/game_by_id/${gameId}`);
        const data = await res.data;

        return data.game as Game;
    } catch (error) {
        return null;
    }
}

export default async function GameDetailPage({ params }: {
    params: {
        gameId: string
    }
}) {
    const game = await getGameById(params.gameId);

    if (!game) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-white text-2xl">Game not found.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <header className="relative w-full h-72">
                <img
                    src={game.img}
                    alt={game.gameName}
                    className="w-full h-full object-cover rounded-b-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-b-lg" />
                <h1 className="absolute bottom-4 left-4 text-white text-4xl font-bold drop-shadow-lg">
                    {game.gameName}
                </h1>
            </header>

            <section className="p-6 max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-6 items-start">
                    {game.categories.map((category) => (
                        <span
                            key={category}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-1 text-sm shadow-md hover:scale-105 transition-transform"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                <p className="text-white text-lg leading-relaxed text-left">
                    {game.description || "No description available for this game."}
                </p>
            </section>

        </main>
    );
}