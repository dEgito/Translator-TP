import Background from "../assets/image.png";
import BackgroungContent from "../assets/bg.png";

import styled from "styled-components";

export const Container = styled.body`
  margin: 0;
  padding: 0;
  height: 100vh;

  background-image: url(${Background});
  background-position: center;
  background-attachment: fixed;
`;

export const Navbar = styled.nav`
  background: #ba3a3a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 0.5rem 2rem;
  margin-bottom: 3rem;

  font-family: "Rubik Wet Paint";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 18px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 56rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  background-image: url(${BackgroungContent});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  padding: 1rem 1rem 2rem 1rem;

  @media (max-width: 800px) {
    max-width: 40rem;
  }

  @media (max-width: 500px) {
    max-width: 20rem;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  gap: 16px;
  border-radius: 0.5rem;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  margin: 0;
`;

export const Textarea = styled.textarea`
  display: flex;
  width: 95%;
  min-height: 250px;
  padding: 0.5rem;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  resize: none;
  outline: none;

  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.073);
  backdrop-filter: blur(2px);

  &:focus {
    outline: 1px solid #ccc;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 12rem;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;

  color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#FFFFFF";

      case "secundary":
        return "#EB8B57";

      case "terciary":
        return "#EB8B57";

      default:
        return "#FFFFFF";
    }
  }};

  border: ${(props) => {
    switch (props.type) {
      case "primary":
        return "none";

      case "secundary":
        return "1px solid #EB8B57";

      case "terciary":
        return "1px solid #EB8B57";

      default:
        return "none";
    }
  }};

  background: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#ef4b4b";

      case "secundary":
        return "#ffddca";

      case "terciary":
        return "#FEF3ED";

      default:
        return "#ef4b4b";
    }
  }};

  &:hover {
    background: ${(props) => {
      switch (props.type) {
        case "primary":
          return "#DE6B6B";

        case "secundary":
          return "#fef3ed";

        case "terciary":
          return "#fff";

        default:
          return "#DE6B6B";
      }
    }};

    transition: all 0.2s ease-in-out;
  }
`;
