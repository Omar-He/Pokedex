import React, { useEffect, useState } from "react";
import { StyledCard, Container, StyledSection, StyledEvo } from "./styled";
import { getEvolutions, getSinglePokemon } from "@/utils/request";
import { Pokemon, PokeInfoType, EvoType, SectionTypes } from "@/types/pokemon";
import { detailsList } from "./constants";
import Image from "next/image";
import SectionList from "./SectionList/SectionList";

const PokeItem = ({ pokeData }: { pokeData: Pokemon }) => {
  const [pokeFullDetails, setPokeFullDetails] = useState<PokeInfoType>();
  const [evo, setEvo] = useState<EvoType[] | void>();
  const [selectedSection, setSelectedSection] = useState<SectionTypes | null>();
  const { stats, held_items, moves } = pokeFullDetails || {};
  const isMovesSection = selectedSection?.id === 1;
  const isEvoSection = selectedSection?.id === 2;
  const isItemsSections = selectedSection?.id === 3;
  const isStatsSection = selectedSection?.id === 4;

  useEffect(() => {
    const getInfo = async () => {
      const singlePokeData = await getSinglePokemon(pokeData.url);
      const evoResult = await getEvolutions(pokeData.id);
      setPokeFullDetails(singlePokeData);
      setEvo(evoResult);
    };
    if (pokeData?.url) {
      getInfo();
    }
  }, [pokeData]);

  return (
    <StyledCard>
      {!selectedSection && (
        <Container>
          <span className="card-title">{pokeData.name}</span>
          {pokeData.image && (
            <Image
              width={215}
              height={215}
              src={pokeData.image}
              alt="poke-img"
            />
          )}
          <div className="details-container">
            {detailsList.map((item, key) => (
              <StyledSection key={key} onClick={() => setSelectedSection(item)}>
                {item.title}
              </StyledSection>
            ))}
          </div>
        </Container>
      )}
      {selectedSection && (
        <>
          <span className="back-btn" onClick={() => setSelectedSection(null)}>
            Back
          </span>
          {isStatsSection && (
            <SectionList sectionItems={stats} sectionKey="stat" />
          )}
          {isItemsSections && (
            <SectionList sectionItems={held_items} sectionKey="item" />
          )}
          {isMovesSection && (
            <SectionList sectionItems={moves} sectionKey="move" />
          )}
          {isEvoSection && (
            <div>
              {evo?.map((item, key) => (
                <>
                  <StyledEvo>
                    <span>{item.name}</span>
                    <Image
                      width={130}
                      height={130}
                      src={item.img}
                      alt="evo-img"
                    />
                  </StyledEvo>
                </>
              ))}
            </div>
          )}
        </>
      )}
    </StyledCard>
  );
};

export default PokeItem;
