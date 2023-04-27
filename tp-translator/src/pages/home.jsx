import { GithubLogo } from "@phosphor-icons/react";
import { useState } from "react";
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

function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslateClick = () => {
    let translatedText = "";
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText.charAt(i);
      switch (char.toLowerCase()) {
        case "t":
          translatedText += "p";
          break;
        case "e":
          translatedText += "o";
          break;
        case "n":
          translatedText += "l";
          break;
        case "i":
          translatedText += "a";
          break;
        case "s":
          translatedText += "r";
          break;

        // polar to tenis
        case "p":
          translatedText += "t";
          break;
        case "o":
          translatedText += "e";
          break;
        case "l":
          translatedText += "n";
          break;
        case "a":
          translatedText += "i";
          break;
        case "r":
          translatedText += "s";
          break;

        // acentuações
        case "ã":
          translatedText += "i";
          break;
        case "õ":
          translatedText += "e";
          break;
        case "â":
          translatedText += "î";
          break;
        case "ñ":
          translatedText += "l";
          break;

        case "ô":
          translatedText += "ê";
          break;
        case "ê":
          translatedText += "ô";
          break;
        case "î":
          translatedText += "â";
          break;

        case "á":
          translatedText += "í";
          break;
        case "í":
          translatedText += "á";
          break;
        case "ó":
          translatedText += "é";
          break;
        case "é":
          translatedText += "ó";
          break;
        default:
          translatedText += char;
      }
    }
    setOutputText(translatedText);
  };

  const handleClearClick = () => {
    setInputText("");
    setOutputText("");
  };

  const handleCopyClick = (event) => {
    const target = event.target.getAttribute("data-target");
    const textBox = document.querySelector(`#${target}`);
    textBox.select();
    document.execCommand("copy");
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
              id="input"
              value={inputText}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <Title>Saída</Title>
            <Textarea id="output" value={outputText} readOnly />
          </Box>
        </Div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <ButtonGroup>
            <Button type="primery" onClick={handleTranslateClick}>
              Traduzir
            </Button>

            <Button
              type="secundary"
              onClick={handleCopyClick}
              data-target="output"
            >
              Copiar
            </Button>

            <Button type="terciary" onClick={handleClearClick}>
              Limpar
            </Button>
          </ButtonGroup>
        </div>
      </Content>
    </Container>
  );
}
export default Home;
