import { createGlobalStyle, css } from "styled-components";

interface DarkTheme {
  isActive: boolean;
}

export const GlobalStyle = createGlobalStyle<DarkTheme>`
  :root {
    --background: #f0f2f5;
    --shape: #fff;

    --red: #e52e4d;
    --green: #33cc95;

    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --modal-input-background: #e7e9ee;
    --modal-input-border: #d7d7d7;
    --modal-button-border: #d7d7d7;
    --modal-input-text: #969cb3;

    ${props => props.isActive === true && css`
      --background: #192734;
      --shape: #15202B;


      --blue: #00004d;
      --blue-light: #6933ff;

      --text-title: #969CB2;
      --text-body: #969CB2;

      --modal-input-background: #cacdd2;
      --modal-input-text: #15202b;
      --modal-button-border: transparent;
    `}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background:var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  .react-modal-overlay {
    background: rgba(0,0,0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
    border: 0;
    outline: none;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;
