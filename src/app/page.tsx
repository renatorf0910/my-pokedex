'use client'

import { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard';
import { AiOutlineSearch } from "react-icons/ai";
import Link from 'next/link';

export interface IPokemon {
  count: number;
  next: string;
  previous: string;
  results: IPokemonResult[];
}

export interface IPokemonResult {
  name: string;
  url: string;
}

export default function Home() {

  const [data, setData] = useState<IPokemon>({
    count: 0,
    next: '',
    previous: '',
    results: []
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (!search && data.count <= 1) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((res) => res.json())
        .then((pokemon) => {
          setData(pokemon)
        })
    }
  }, [search])

  const loadMore = () => {
    setLoading(true);

    fetch(data.next)
      .then((res) => res.json())
      .then((pokemon) => {
        setData({
          ...pokemon,
          results: [...data.results, ...pokemon.results]
        })

        setLoading(false);
      })
  }

  const searchPokemon = () => {
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then((res) => res.json())
      .then((pokemon) => {
        pokemon.url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
        setData({
          count: 1,
          next: '',
          previous: '',
          results: [pokemon]
        })

        setLoading(false);
      })
  }

  
  const getBadgeColorByType = (type: string) => {
    const colors = {
        'normal': 'bg-gray-500 text-gray-900',
        'fighting': 'bg-red-500 text-white',
        'flying': 'bg-blue-500 text-white',
        'poison': 'bg-purple-500 text-white',
        'ground': 'bg-yellow-500 text-white',
        'rock': 'bg-yellow-700 text-white',
        'bug': 'bg-green-500 text-white',
        'ghost': 'bg-purple-700 text-white',
        'steel': 'bg-gray-700 text-white',
        'fire': 'bg-red-700 text-white',
        'water': 'bg-blue-700 text-white',
        'grass': 'bg-green-700 text-white',
        'electric': 'bg-yellow-500 text-white',
        'psychic': 'bg-pink-500 text-white',
        'ice': 'bg-blue-300 text-white',
        'dragon': 'bg-red-700 text-white',
        'dark': 'bg-gray-900 text-white',
        'fairy': 'bg-pink-300 text-white',
        'unknown': 'bg-gray-500 text-gray-900',
        'shadow': 'bg-gray-500 text-gray-900',
    }

    return colors[type as keyof typeof colors]
}


  return (
    <main className="min-h-screen flex-col p-24">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search for pokemons" className='input input-bordered w-full max-w-lg grow' />
          <button onClick={searchPokemon} className='btn btn-secondary btn-circle'> <AiOutlineSearch /> </button>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
          {data.results && data.results.map((pokemon, index) => <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />)}
        </div>
        <button disabled={loading || data.count == 1} className='btn btn-primary' onClick={loadMore}>
          {loading && <span className='loading loading-spinner'></span>} Load more
        </button>
      </div>
    </main>
  );
}