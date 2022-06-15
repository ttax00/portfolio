import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-600 dark:to-red-900">
        <Introduction />
      </main>

    </>
  );
}

export default App;


