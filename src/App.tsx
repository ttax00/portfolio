import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className="bg-white dark:bg-gray-600">
      <nav className="bg-gray-500 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className="relative flex items-center justify-between h-16 col-span-2">
            <div className="text-black dark:text-white">Portfolio</div>
            <button className="btn-primary">Test1</button>
            <button className="btn-primary">Test2</button>
            <button className="btn-primary">Test3</button>
            <button className="btn-primary">Test4</button>
          </div>
          <div className="relative flex items-center justify-end h-16">
            <div>Made With</div>
            <span>React</span>
            <span>Typescript</span>
          </div>
        </div>
      </nav>
      <header>
        Hello World
        <br />
        <br />
        <button onClick={() => setDark(!dark)} className="btn-primary animate-bounce">Toggle</button>
      </header>
    </div>
  );
}

export default App;
