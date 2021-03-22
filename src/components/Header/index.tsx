import logoImg from "../../assets/logo.svg";
import moonImg from "../../assets/moon.svg";
import sunImg from "../../assets/sun.svg";

import { useDarkTheme } from "../../hooks/useDarkTheme";
import { Container, Content } from "./styles";

interface HeaderProps {
 onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  const { changeToDarkTheme, isActive } = useDarkTheme();
  return (
    <Container>
      <Content>
        <main>
          <img src={logoImg} alt="dt money" />
          <button onClick={changeToDarkTheme}>
            {isActive ? (
              <img src={sunImg} alt="" />
            ) : (
              <img src={moonImg} alt="" />
            )}
          </button>
        </main>
        <button
          className="new-transaction"
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
       
      </Content>
    </Container>
  );
}
