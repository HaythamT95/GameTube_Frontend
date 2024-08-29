import React from "react";
import axios from "axios";
import Link from 'next/link';
import { Game, CategoryMap } from "./datatypes/datatypes";

export default async function Home() {
  const res = await axios.get('http://localhost:3000/games/all_games');
  if (res.status === 500) {
    return (
      <ServerError />
    )
  }
  const data = await res.data;

  const games: Game[] = data.games;

  const categoryMap: CategoryMap = {};
  games.forEach(game => {
    game.categories.forEach(category => {
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push(game);
    });
  });


  return (
    <main className="p-6">
      {Object.keys(categoryMap).map((category) => (
        <section key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryMap[category].map((game) => (

              <div key={game._id} className="border rounded-lg p-4 shadow-md">
                <Link
                  key={game._id}
                  href={{
                    pathname: `/game/[gameId]`,
                    query: {
                      gameId: game._id
                    },
                  }}
                  as={`/game/${game._id}`}
                >
                  <img
                    src={game.img}
                    alt={game.gameName}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{game.gameName}</h3>
                </Link>
                <div className="flex flex-wrap gap-2">
                  {game.categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export function ServerError() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Server Error</h1>
    </main>
  )
}