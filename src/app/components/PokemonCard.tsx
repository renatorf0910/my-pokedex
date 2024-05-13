'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PokemonId from '../pokemon/[pokemonId]/page';

interface PokemonCardProps {
    name: string;
    url: string
}

export interface Pokemon {
    abilities: Ability[]
    base_experience: number
    cries: Cries
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_abilities: any[]
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
}

export interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
}

export interface Ability2 {
    name: string
    url: string
}

export interface Cries {
    latest: string
    legacy: string
}

export interface Form {
    name: string
    url: string
}

export interface Index {
    game_index: number
    version: Version
}

export interface Version {
    name: string
    url: string
}

export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
}

export interface Move {
    name: string
    url: string
}

export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
}

export interface MoveLearnMethod {
    name: string
    url: string
}

export interface VersionGroup {
    name: string
    url: string
}

export interface Species {
    name: string
    url: string
}

export interface Sprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    other: Other
    versions: Versions
}

export interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
}

export interface DreamWorld {
    front_default: string
    front_female: any
}

export interface Home {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface OfficialArtwork {
    front_default: string
    front_shiny: string
}

export interface Showdown {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
}

export interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
}

export interface RedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}

export interface Yellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}

export interface GenerationIi {
    crystal: Crystal
    gold: Gold
    silver: Silver
}

export interface Crystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
}

export interface Gold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}

export interface Silver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}

export interface GenerationIii {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
}

export interface Emerald {
    front_default: string
    front_shiny: string
}

export interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface GenerationIv {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
}

export interface DiamondPearl {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface HeartgoldSoulsilver {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface Platinum {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface GenerationV {
    "black-white": BlackWhite
}

export interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface Animated {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
}

export interface OmegarubyAlphasapphire {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface XY {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface GenerationVii {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
}

export interface Icons {
    front_default: string
    front_female: any
}

export interface UltraSunUltraMoon {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

export interface GenerationViii {
    icons: Icons2
}

export interface Icons2 {
    front_default: string
    front_female: any
}

export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
}

export interface Stat2 {
    name: string
    url: string
}

export interface Type {
    slot: number
    type: Type2
}

export interface Type2 {
    name: string
    url: string
}


const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
    const [pokemon, setPokemon] = React.useState<Pokemon>();
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((pokemon) => {
                setPokemon(pokemon);
            })
    }, [url])

    const capitalizeFirstLetter = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
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
        <div className="card w-96 bg-base-100 shadow-xl">
            <Link href={`/pokemon/${pokemon?.name}?id=${pokemon?.id}`}>
                <div className='flex justify-center'>
                    <figure><img src={pokemon?.sprites.front_default} alt="Shoes" /></figure>
                    <figure><img src={pokemon?.sprites.front_shiny} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {pokemon?.name && capitalizeFirstLetter(pokemon.name)}
                        <div className="badge badge-secondary"> {pokemon?.order} </div>
                    </h2>
                    <div className="card-actions justify-end" >
                        {pokemon?.types && pokemon.types.map((type, index) => <div key={index} className={"badge " + getBadgeColorByType(type.type.name)}> {capitalizeFirstLetter(type.type.name)} </div>)}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PokemonCard;