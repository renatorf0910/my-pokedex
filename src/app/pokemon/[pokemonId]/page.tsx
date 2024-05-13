"use client";
import React, { useEffect, useState } from 'react';
import { Pokemon } from "@/app/components/PokemonCard";

interface PokemonIdProps {
  searchParams: {
    id: string;
  }
}

const PokemonId: React.FC<PokemonIdProps> = ({ searchParams }: PokemonIdProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const getPokemon = useState(searchParams.id)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemon[0]}`);
        if (!response.ok) {
          throw new Error('Fail.');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPokemon();
  }, [getPokemon]);


  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const handleGoBack = () => {
    window.history.back();
  };


  return (
    <>
      {pokemon ? (
        <>
          
          <div className='max-w-md mx-auto mt-8 bg-gray-700 bg-opacity-75 rounded-xl overflow-hidden shadow-lg p-6'>
          <button onClick={handleGoBack}>
            &#8592; Back
          </button>
            <div className="flex justify-center mb-4">
              <figure className="mr-6"><img src={pokemon.sprites.front_default} alt={pokemon.name} width={250} /></figure>
              <figure><img src={pokemon.sprites.front_shiny} alt={pokemon.name} width={250} /></figure>
            </div>
            <p className=" text-center text-x1 font-bold mb-5">{capitalizeFirstLetter(pokemon.name)}</p>
            <div>
              {pokemon.stats.map((statsName, index) => (
                <div key={index} className="mb-2">
                  <div className="bg-gray-400 rounded p-2 text-gray-800">
                    <div>{capitalizeFirstLetter(statsName.stat.name)}: {statsName.base_stat}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-2 bg-gray-400 rounded p-2 text-gray-800">
              <p className="text-black-300">Type: {pokemon.types.map((type, index) => capitalizeFirstLetter(type.type.name)).join(', ')}</p>
            </div>
            <div className="mb-2 bg-gray-400 rounded p-2 text-gray-800">
              <p className="text-black-300">Abilities: {pokemon.abilities.map((ability, index) => capitalizeFirstLetter(ability.ability.name)).join(', ')}</p>
            </div>
            <div className="mb-2 bg-gray-400 rounded p-2 text-gray-800">
              <p className="text-black-300">Base Experience: {pokemon.base_experience}</p>
            </div>
          </div>
        </>

      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export default PokemonId;