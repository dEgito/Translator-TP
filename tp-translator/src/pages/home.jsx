import {img} from '../assets/content-background.jpg'

import { GithubLogo } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Content,
  Box,
  ButtonGroup,
  Title,
  Textarea,
  Button,
  Div,
} from "./style";

export default function Home() {
  const [entrada, setInput] = useState("");
  const [saida, setOutput] = useState("");

  const handleTranslate = () => {
    const input = document.getElementById("input").value; //pegar o input
    let output = "";

    // setInput(event.target.value)

    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      let translatedChar = char;

      switch (char.toUpperCase()) {
        // ## T para P
        case "T":
          translatedChar = "P";
          break;
        case "E":
          translatedChar = "O";
          break;
        case "N":
          translatedChar = "L";
          break;
        case "I":
          translatedChar = "A";
          break;
        case "S":
          translatedChar = "R";
          break;

        //## P para T
        case "P":
          translatedChar = "T";
          break;
        case "O":
          translatedChar = "E";
          break;
        case "L":
          translatedChar = "N";
          break;
        case "A":
          translatedChar = "I";
          break;
        case "R":
          translatedChar = "S";
          break;

        // ## CASOS ESPECIAIS
        // # AGUDO
        case "Á":
          translatedChar = "Í";
          break;
        case "É":
          translatedChar = "Ó";
          break;
        case "Í":
          translatedChar = "Á";
          break;
        case "Ó":
          translatedChar = "É";
          break;

        // # CIRCUNFLEXO
        case "Â":
          translatedChar = "Î";
          break;
        case "Ê":
          translatedChar = "Ô";
          break;
        case "Î":
          translatedChar = "Â";
          break;
        case "Ô":
          translatedChar = "Ê";
          break;

        // # TIL
        // - Não existe acentuação com til para as letras E e I
        // - Por este motivo não será possível retornar o Ã e Õ
        case "Ã":
          translatedChar = "I";
          break;
        case "Õ":
          translatedChar = "E";
          break;
        case "Ñ":
          translatedChar = "L";
          break;
      }

      output += translatedChar;
    }

    document.getElementById("output").textContent = output; //setar na texte area
  };

  const handleClean = () => {
    setInput("");
    setOutput("");
  };

  return (
    <Container>
      <Navbar>
        <h1>Tênis-Polar</h1>
        <a href="https://github.com/degito" target="_blank">
          <span>
            <GithubLogo size={24} weight="fill" color="#021756" />
          </span>
        </a>
      </Navbar>
      <Content>
        <Div>
          <Box>
            <Title>Entrada</Title>
            <Textarea
              value={entrada}
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>
          <Box>
            <Title>Saída</Title>
            <Textarea
              value={saida}
              onChange={(e) => setOutput(e.target.value)}
            />
          </Box>
      
        </Div>

        <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <ButtonGroup>
          <Button type="primery" onClick={handleTranslate}>
            Traduzir
          </Button>
          <Button type="secundary" onClick={handleClean}>
            Limpar
          </Button>
        </ButtonGroup>
      </div>
      </Content>
      
    </Container>
  );
}
