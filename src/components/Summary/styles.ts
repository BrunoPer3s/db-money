import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: -5rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 2rem;
    background: #fff;
    color: #363F5F;
    border-radius: 5px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      font-size: 2rem;
      font-weight: 500;
      margin-top: 1.25rem;
    }

    &.total-card {
      background: var(--green);
      color: #fff;
    }
  }
`;
