import styled from "@emotion/styled";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  height: 470px;
  width: 300px;
  background: rgb(125, 203, 205);
  background: radial-gradient(circle, #c9b1fd 0%, hwb(198deg 4% 74%) 100%);

  .card-title {
    background: linear-gradient(90deg, #91765b 0%, #de9e57 100%);

    text-transform: capitalize;
    text-align: center;
    color: #fff;
    padding: 5px 10px;
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

  .back-btn {
    background: rgb(164 78 114);
    padding: 4px 6px;
    border-radius: 4px;
    color: #fff;
    align-self: flex-start;
    &:hover {
      cursor: pointer;
      background: linear-gradient(
        90deg,
        rgba(164, 78, 114, 1) 0%,
        rgba(75, 38, 53, 1) 100%
      );
    }
  }

  .details-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    column-gap: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

export const StyledSection = styled.div`
  background: #f6e0e4;
  text-align: center;
  border-radius: 20rem;
  font-size: 14px;
  padding: 6px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #862840 0%, #da4167 100%);
    color: #fff;
  }
`;

export const StyledEvo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  text-transform: CAPITALIZE;
  color: #fff;
  font-size: 18px;
`;
