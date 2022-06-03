import { FC } from "react";
import { AppRouter, Header } from "./components";

const App: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
};

export default App;
