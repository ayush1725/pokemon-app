"use client";

import { useState, useEffect } from 'react';
import { getPokemonList, Pokemon, getPokemonDetails, PokemonDetails } from '@/services/poke-api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

const PAGE_SIZE = 20;

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonList(PAGE_SIZE, offset);
      setPokemonList(data.results);
    };

    fetchPokemon();
  }, [offset]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSort = () => {
    setSortAscending(!sortAscending);
  };

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPokemon = [...filteredPokemon].sort((a, b) => {
    const idA = parseInt(a.url.split('/').slice(-2, -1)[0]);
    const idB = parseInt(b.url.split('/').slice(-2, -1)[0]);

    return sortAscending ? idA - idB : idB - idA;
  });

  const handleNextPage = () => {
    setOffset(prevOffset => prevOffset + PAGE_SIZE);
  };

  const handlePrevPage = () => {
    setOffset(prevOffset => Math.max(0, prevOffset - PAGE_SIZE));
  };

  const onCardClick = async (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpen(true);

    try {
        const details = await getPokemonDetails(pokemon.name);
        setPokemonDetails(details);
    } catch (error) {
        console.error("Failed to fetch Pokemon details:", error);
        setPokemonDetails(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PokeDexLite</h1>
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search Pokemon..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        <Button onClick={toggleSort} variant="secondary">
          Sort by ID ({sortAscending ? 'Asc' : 'Desc'})
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedPokemon.map(pokemon => (
          <Card key={pokemon.name} className="hover:shadow-md transition-shadow duration-200" onClick={() => onCardClick(pokemon)}>
            <CardHeader>
              <CardTitle>{pokemon.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png`}
                alt={pokemon.name}
                className="mx-auto"
                width={200}
                height={200}
                style={{objectFit: 'contain'}}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <Button onClick={handlePrevPage} disabled={offset === 0}>
          Previous
        </Button>
        <Button onClick={handleNextPage}>
          Next
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedPokemon?.name}</DialogTitle>
            <DialogDescription>
              {pokemonDetails ? (
                <div>
                  <img
                    src={pokemonDetails.sprites.front_default}
                    alt={pokemonDetails.name}
                    className="mx-auto"
                    width={200}
                    height={200}
                    style={{ objectFit: 'contain' }}
                  />
                  <p>Height: {pokemonDetails.height}</p>
                  <p>Weight: {pokemonDetails.weight}</p>
                  <p>ID: {pokemonDetails.id}</p>
                </div>
              ) : (
                <p>Loading details...</p>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
