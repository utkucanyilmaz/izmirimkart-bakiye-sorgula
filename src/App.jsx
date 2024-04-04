import { CardProvider } from "./context/CardContext";
import { ModalProvider } from "./context/ModalContext";

import QueryForm from "./components/QueryForm";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  return (
    <ModalProvider>
      <CardProvider>
        <Navbar />
        <main className="container mx-auto grid grid-cols-1 place-items-center px-4 my-4 md:my-8 space-y-4">
          <QueryForm />
          <CardList />
        </main>
      </CardProvider>
    </ModalProvider>
  );
}

export default App;
