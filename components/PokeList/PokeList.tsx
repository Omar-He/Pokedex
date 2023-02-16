import { useState, useEffect, useCallback, useRef } from "react";
import usePokemon from "@/hooks/usePokemon";
import {
  ImageContainer,
  ImagesGrid,
  LoadingSection,
  MainContainer,
  ModalImageContainer,
  NextButton,
  PrevButton,
  StyledDescription,
  StyledDetails,
} from "./styled";
import Modal from "@/components/Modal/Modal";
import LeftIcon from "@/icons/leftIcon";
import RightIcon from "@/icons/rightIcon";
import PokeItem from "../PokeItem/PokeItem";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";

interface RefObject {
  disconnect: () => void;
  observe?: (node: HTMLElement) => void;
}

const PokeList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [targetPoke, setTargetPoke] = useState<Pokemon | undefined>();
  const [openModal, setOpenModal] = useState(false);
  const { loading, allPoke, hasMore } = usePokemon(pageNumber);
  const isNextDisabled = targetPoke?.index
    ? allPoke.length === targetPoke.index + 1
    : false;
  const isPrevDisabled = targetPoke?.index === 0;

  const observer = useRef<RefObject>();
  const lastElementRef = useCallback(
    (node: HTMLImageElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node && observer.current.observe) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const openImage = (image: Pokemon, index: number) => {
    setOpenModal(true);
    setTargetPoke({ ...image, index });
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const nextImage = () => {
    if (targetPoke?.index || targetPoke?.index === 0) {
      const nextImage = allPoke[targetPoke?.index + 1];
      setTargetPoke({ ...nextImage, index: targetPoke.index + 1 });
    }
  };

  const prevImage = () => {
    if (targetPoke?.index) {
      const prevImage = allPoke[targetPoke?.index - 1];
      setTargetPoke({ ...prevImage, index: targetPoke?.index - 1 });
    }
  };

  return (
    <MainContainer>
      <ImagesGrid>
        {allPoke.length > 0 &&
          allPoke.map((poke, index) => {
            const isLast = allPoke.length === index + 1;
            return (
              <ImageContainer key={poke.id}>
                <Image
                  alt="img"
                  src={poke.image}
                  ref={isLast ? lastElementRef : null}
                  width={250}
                  height={200}
                  onClick={() => openImage(poke, index)}
                />
                <span>{poke.name}</span>
              </ImageContainer>
            );
          })}
      </ImagesGrid>
      {loading && <LoadingSection>Loading ...</LoadingSection>}
      <Modal
        title={`#${targetPoke ? targetPoke.id : ""}`}
        open={openModal}
        onClose={onCloseModal}
      >
        {targetPoke && (
          <ModalImageContainer>
            <PokeItem pokeData={targetPoke} />
            <NextButton disabled={isNextDisabled} onClick={nextImage}>
              <RightIcon />
            </NextButton>
            <PrevButton disabled={isPrevDisabled} onClick={prevImage}>
              <LeftIcon />
            </PrevButton>
          </ModalImageContainer>
        )}
        <StyledDetails>
          {targetPoke?.description && (
            <StyledDescription>{targetPoke?.description}</StyledDescription>
          )}
        </StyledDetails>
      </Modal>
    </MainContainer>
  );
};

export default PokeList;
