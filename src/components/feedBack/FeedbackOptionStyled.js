import styled from "styled-components";

export const FeedbackOptionsStyled = styled.div`
  margin-left: 10px;
  .feedbackBtn {
    margin-right: 5px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;

    &:active {
      background-color: blue;
      color: white;
    }
  }
`;
