import { FC } from "react";

import Title from "./Components/Title";
import Search from "./Components/Search";

interface HeaderProps {
  inputRef: React.RefObject<HTMLInputElement>;
  onSend: () => void;
}

const Header: FC<HeaderProps> = ({ inputRef, onSend }) => {
  return (
    <>
      <Title title="Todos" />
      <Search inputRef={inputRef} handleSendTodo={onSend} />
    </>
  );
};

export default Header;
