import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
`;

export const FeedbackButton = styled.button.attrs({ type: "button" })`
  box-sizing: border-box;
  appearance: none;
  background-color: #fff;
  border-radius: 25px;

  cursor: pointer;
  display: flex;
  align-self: center;
  margin: 10px;
  padding: 5px 15px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  transition: box-shadow 500ms ease-in-out, color 300ms ease-in-out;

  color: ${({ children }) => {
    switch (children) {
      case "good":
        return "#2ecc71";
      case "neutral":
        return "#f1c40f";
      case "bad":
        return "#C90016";

      default:
        return "#000";
    }
  }};

  border: ${({ children }) => {
    switch (children) {
      case "good":
        return "2px solid #2ecc71";
      case "neutral":
        return "2px solid #f1c40f";
      case "bad":
        return "2px solid #C90016";

      default:
        return "#000";
    }
  }};

  &:hover {
    color: #fff;
    outline: 0;

    box-shadow: ${({ children }) => {
      switch (children) {
        case "good":
          return "0 0 40px 40px  #2ecc71 inset";
        case "neutral":
          return "0 0 40px 40px  #f1c40f inset";
        case "bad":
          return "0 0 40px 40px  #C90016 inset";

        default:
          return "#000";
      }
    }};
  }
`;
