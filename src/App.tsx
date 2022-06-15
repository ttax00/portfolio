import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <>
      <header className="absolute w-screen bg-gray-500 dark:bg-gray-800">
        <nav className="mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className="relative flex items-center justify-start h-16 col-span-2">
            <div className="text-black dark:text-white">Portfolio</div>
            <div className="form-check form-switch ml-8">
              <input id="toggle-darkmode" className="element-toggle" type="checkbox" role="switch" defaultChecked={dark} onChange={(e) => {
                setDark(!dark);
              }} />
              <label htmlFor="toggle-darkmode" className="text-black dark:text-white">darkmode</label>
            </div>
          </div>
          <div className="relative flex items-center justify-end h-16 text-black dark:text-white">
            <div>Made With</div>
            <span>React</span>
            <span>Typescript</span>
          </div>
        </nav>
      </header>
      <main className="flex flex-col bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-600 dark:to-red-900">
        <section id="introducton" className="section-commons px-8 sm:px-12 lg:px-32 flex flex-col justify-center content-start">
          <p className="text-left mt-16 text-xl max-w-4xl">
            <span className="motion-safe:animation fade-in text-3xl sm:text-5xl  md:text-7xl text-red-700">
              Welcome, I'm Tech.
            </span>
            <br />
            <span className="motion-safe:animation delay-1s fade-in md:text-4xl">
              A multi-lingual, multi-disciplined, self-taught hobbyist developer.
            </span>
          </p>
          <p className="motion-safe:animation delay-2s fade-in text-left mt-4 text-sm md:text-xl max-w-4xl">
            I primary work on curious bite-sized projects, with more emphasis on discovery and understanding. Currently I'm on my journey to learn Rust.
          </p>
          <div className="motion-safe:animation delay-3s fade-in self-start mt-8">
            <a className="btn-primary block motion-safe:animation delay-4s animate-bounce   " href="https://github.com/TechTheAwesome">
              Checkout my projects on github!
            </a>
          </div>

        </section>
        <section id="about-me" className="section-commons">
          <span className="text-center mt-16">
            <h1 className=" text-3xl">
              Hi there!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h1>
          </span>
        </section>
        <section id="project-1" className="section-commons">

        </section>
      </main>

    </>
  );
}

export default App;


