import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-600 dark:to-red-900">
        <Introduction />
				<Technologies />
      </main>
      <footer className="text-center text-black dark:text-white bg-gray-500 dark:bg-gray-800 pb-8 pt-6">Designed & Built by TechTheAwesome</footer>
    </>
  );
}

export default App;


