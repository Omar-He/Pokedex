import styled from "@emotion/styled";

export const StyledSectionList = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  row-gap: 3px;
  column-gap: 5px;
  text-align: left;
  text-transform: capitalize;
  display: flex;
  margin-top: 20px;
  width: 100%;
  overflow: auto;

  li {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
    background: #fff19d;
    padding: 4px 6px;
    border-radius: 4px;
    display: flex;
    gap: 15px;
    justify-content: center;
    text-transform: uppercase;
    .base-stat {
      color: #da4167;
    }
  }

  .not-found {
    color: #fff;
  }
`;
