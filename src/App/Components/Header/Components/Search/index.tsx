import { forwardRef } from "react";

import { SearchProps } from "./interfaces";

import SendIcon from "../../../../../Icons/SendIcon";

import "./styles.scss";

const Search = forwardRef<HTMLInputElement, SearchProps>(({ handleSendTodo }, ref) => {
  return (
    <div className="input--wrapper">
      <input ref={ref} type="text" className="input" />
      <SendIcon onClick={handleSendTodo} />
    </div>
  );
});

export default Search;
