import type { FC } from "react";

import Title from "./Components/Title";
import Search from "./Components/Search";

import { useApp } from "../../context";

const Header: FC = () => {
  const { inputRef, handleSendTodo } = useApp();

  return (
    <>
      <Title title="Todos" />
      <Search ref={inputRef} handleSendTodo={handleSendTodo} />
    </>
  );
};

export default Header;
