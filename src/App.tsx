import { FC } from "react";
import { Header } from "./components";
import { AllCats } from "./pages";

const App: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AllCats />
      </div>
    </>
  );
};

export default App;
