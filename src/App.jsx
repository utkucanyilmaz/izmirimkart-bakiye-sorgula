import { CardProvider } from "./context/CardContext";
import { ModalProvider } from "./context/ModalContext";
import Card from "./components/Card";
import QueryForm from "./components/QueryForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ModalProvider>
      <CardProvider>
        <Navbar />
        <main className="container mx-auto my-4 md:my-8 md:px-4">
          <QueryForm />
          <Card />
        </main>
      </CardProvider>
    </ModalProvider>
  );
}

export default App;
