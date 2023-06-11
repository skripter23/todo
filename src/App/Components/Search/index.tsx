import { FC } from "react";

import { SearchProps } from "./interfaces";

import SendIcon from "../../../Icons/SendIcon";

import "./styles.scss";

const Search: FC<SearchProps> = ({ inputRef, handleSendTodo }) => {
  return (
    <div className="input--wrapper">
      <input ref={inputRef} type="text" className="input" />
      <SendIcon onClick={handleSendTodo} />
    </div>
  );
};

export default Search;
