import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--modal-input-border);
    background: var(--modal-input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--modal-input-text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  border: 1px solid var(--modal-button-border);
  padding: 1.25rem 4.125rem;
  border-radius: 0.25rem;
  
  background: ${props => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : "transparent"};

  color: var(--text-title);
  font-size: 1rem;
  transition: border-color 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1.125rem;
  }
`;
