import Button from "./components/Button";
import QueryForm from "./components/QueryForm";
import { CardProvider } from "./context/CardContext";

function App() {
  return (
    <CardProvider>
      <main className="container mx-auto my-8 px-4">
        <nav className="flex items-center justify-between text-white">
          <h1 className="text-lg md:text-3xl">İzmirim Kart Bakiye Sorgula</h1>

          <Button>Kart Ekle</Button>
        </nav>
        <QueryForm />
      </main>
    </CardProvider>
  );
}

export default App;
