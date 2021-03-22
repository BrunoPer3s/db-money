import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.25rem 1rem 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  main {
    button {
      background: transparent;
      margin-left: 1.5rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  button {
    &.new-transaction {
      background: var(--blue-light);
      color: var(--shape);
      font-weight: 600;
      font-size: 1rem;
      padding: 12px 32px;
      border-radius: 0.25rem;
      transition: filter 0.2s ease;
    }
    

    &:hover {
      filter: brightness(0.9);
    }
  }

  
`;
