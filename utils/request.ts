import { Pokemon } from "@/types/pokemon";

interface PokemonType {
  count: number;
  results: Pokemon[];
}

interface EvoType {
  name: string;
  id: number;
  img: string;
  evolvesTo: any;
}

const pokemonURL = "https://pokeapi.co/api/v2/pokemon";
const assetsURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";
const speciesURL = "https://pokeapi.co/api/v2/pokemon-species";

export async function getPokemonData(
  pageNumber: number,
  perPage: number = 50
): Promise<void | PokemonType> {
  try {
    const offset = pageNumber * perPage;
    const req = fetch(`${pokemonURL}?offset=${offset}&limit=${perPage}`);
    const res = await req;
    const { results, count } = await res.json();
    const pokemonArr = results.map((pokeman: any, index: number) => {
      const itemIndex = pageNumber * perPage + index;
      const idLength = (itemIndex + 1).toString().length;
      const sliceValue = idLength > 3 ? -4 : -3;
      const paddedId = ("00" + (itemIndex + 1)).slice(sliceValue);
      const image = `${assetsURL}/${paddedId}.png`;
      return { ...pokeman, image, id: itemIndex + 1 };
    });
    return { results: pokemonArr, count };
  } catch (error) {
    console.error(error);
  }
}

export async function getSinglePokemon(url: any) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getEvolutions(id: any): Promise<void | EvoType[]> {
  try {
    const response1 = await fetch(`${speciesURL}/${id}/`);
    const data1 = await response1.json();
    const evolutionChainUrl = data1.evolution_chain.url;

    const response2 = await fetch(evolutionChainUrl);
    const data2 = await response2.json();

    const evolutions = [];
    let current = data2.chain;
    while (current) {
      const name = current.species.name;
      const id = current.species.url.match(/\/\d+\//)[0].replace(/\//g, "");
      const idLength = id.toString().length;
      const sliceValue = idLength > 3 ? -4 : -3;
      const paddedId = ("00" + id).slice(sliceValue);
      const img = `${assetsURL}/${paddedId}.png`;
      const evolvesTo = current.evolves_to.map((e: any) => e.species.name);
      evolutions.push({ name, id, img, evolvesTo });
      current = current.evolves_to[0];
    }
    return evolutions;
  } catch (error) {
    console.error(error);
  }
}
