import styled from "@emotion/styled";

export const MainContainer = styled.div``;
export const ImagesGrid = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;

  img {
    padding: 5px;
    width: 250px;
    height: 200px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  box-shadow: 5px 5px 15px 5px #c7c7c7;
  border-radius: 8px;
  background: #eeeeee;

  &:hover {
    background: #80b8d942;
  }
  span {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px 24px;
    background: #91785d;
    width: 100%;
    opacity: 0.7;
    color: #fff;
    text-transform: capitalize;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const LoadingSection = styled.div`
  font-size: 24px;
  color: #e1e1e1;
  background: #0b3142;
  padding: 20px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
  opacity: 0.8;
`;

export const StyledCard = styled.div`
  padding: 20px;
  background: #917963;
  border-radius: 8px;
  width: 300px;

  .card-title {
    text-transform: capitalize;
    text-align: center;
    background: #2d2d2d;
    color: #fff;
    padding: 5px;
    font-size: 24px;
    border-radius: 4px;
    display: block;
  }

  image {
    width: 150px;
    max-width: 90%;
    object-fit: contain;
    max-height: 400px;
    border-radius: 8px;
  }
`;
export const ModalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 15px 5px #9d9d9d;
  overflow: auto;
  border-radius: 8px;
`;
export const StyledDetails = styled.div`
  position: fixed;
  bottom: 0;
  background: #5c5a5aa6;
  color: #fff;
  width: 100%;
`;
export const StyledDescription = styled.span`
  display: block;
  padding: 13px 25px;
  text-align: center;
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  cursor: pointer;
  opacity: 0.8;
  background: #0b3142;
  border: 3px solid #0b3142;

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    top: 45%;
    padding: 20px;
  }
`;
export const PrevButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  cursor: pointer;
  opacity: 0.8;
  background: #0b3142;
  border: 3px solid #0b3142;

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    top: 45%;
    padding: 20px;
  }
`;
