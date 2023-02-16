import { useEffect, useState } from "react";
import { getPokemonData } from "@/utils/request";
import { Pokemon } from "@/types/pokemon";

const usePokemon = (pageNumber = 0, perPage = 50) => {
  const [loading, setLoading] = useState(true);
  const [allPoke, setAllPoke] = useState<Record<string, any>[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [totalCount, setTotalCount] = useState<number | undefined>();

  const getPokeData = async () => {
    const response = await getPokemonData(pageNumber);
    const { results, count } = response || {};
    if (!totalCount) {
      setTotalCount(count);
    }
    setTimeout(() => {
      setHasMore(pageNumber * perPage !== count);
      if (results) {
        setAllPoke((oldPoke) => [...oldPoke, ...results]);
      }
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (!totalCount || allPoke.length < 1000) {
      setLoading(true);
      getPokeData();
    }
  }, [pageNumber]);
  return { loading, allPoke, hasMore };
};

export default usePokemon;
