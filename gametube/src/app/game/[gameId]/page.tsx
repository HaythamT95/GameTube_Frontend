import axios from "axios";
import { Game } from "../../datatypes/datatypes";

async function getGameById(gameId: string) {
    const res = await axios.get(`http://localhost:3000/games/game_by_id/${gameId}`)
    const data = await res.data;

    const game: Game = data.game;
    return game;
}

export default async function GameDetailPage({ params }: {
    params: {
        gameId: string
    }
}) {
    const game = await getGameById(params.gameId);

    return (
        <main >
            <h1 className="text-2xl font-bold mb-4">{game._id}</h1>
        </main>
    );
}