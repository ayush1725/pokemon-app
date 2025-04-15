
/**
 * Represents a Pokemon with a name and URL.
 */
export interface Pokemon {
  /**
   * The name of the Pokemon.
   */
  name: string;
  /**
   * The URL of the Pokemon's details.
   */
  url: string;
}

/**
 * Represents the response from the PokeAPI for a list of Pokemon.
 */
export interface PokemonListResponse {
  /**
   * The count of total Pokemon.
   */
  count: number;
  /**
   * The URL for the next page of results, if available.
   */
  next: string | null;
  /**
   * The URL for the previous page of results, if available.
   */
  previous: string | null;
  /**
   * An array of Pokemon objects.
   */
  results: Pokemon[];
}

/**
 * Asynchronously retrieves a list of Pokemon from the PokeAPI.
 * @param limit The number of Pokemon to retrieve per page.
 * @param offset The offset for pagination.
 * @returns A promise that resolves to a PokemonListResponse object.
 */
export async function getPokemonList(limit: number, offset: number): Promise<PokemonListResponse> {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: PokemonListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokemon list:", error);
    throw error;
  }
}

/**
 * Represents detailed information about a Pokemon.
 */
export interface PokemonDetails {
  /**
   * The unique identifier for the Pokemon.
   */
  id: number;
  /**
   * The name of the Pokemon.
   */
  name: string;
  /**
   * The height of the Pokemon.
   */
  height: number;
  /**
   * The weight of the Pokemon.
   */
  weight: number;
  /**
   * An array of sprites URLs for the Pokemon.
   */
  sprites: {
    front_default: string;
  };
}

/**
 * Asynchronously retrieves detailed information for a specific Pokemon.
 *
 * @param name The name of the Pokemon to retrieve.
 * @returns A promise that resolves to a PokemonDetails object.
 */
export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: PokemonDetails = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch Pokemon details:", error);
        throw error;
    }
}
