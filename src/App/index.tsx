import type { FC } from "react";

import Header from "./Components/Header";
import Actions from "./Components/Actions";
import TodoItems from "./Components/TodoItems";

import "./styles.scss";

const App: FC = () => {
  return (
    <main className="todos">
      <Header />
      <div className="todos--content">
        <Actions />
        <TodoItems />
      </div>
    </main>
  );
};

export default App;
