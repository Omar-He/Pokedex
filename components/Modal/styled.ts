import styled from "@emotion/styled";
import Modal from "react-modal";

export const RModal = styled(Modal)`
  position: absolute;
  inset: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  background: #d5d5d5;
  padding: 20px;
  max-width: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  height: 75%;

  .bc-overlay {
    position: fixed;
    inset: 0px;
    background-color: #5c575759;
  }

  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    max-width: unset;
    padding: unset;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;
export const ModalTitle = styled.span`
  font-size: 20px;
`;
export const StyledCloseIcon = styled.span`
  &:hover {
    color: #c54a4a;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  height: calc(100% - 63px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
