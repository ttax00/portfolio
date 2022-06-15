import { useEffect, useState } from "react";

export default function NavBar() {
	const [dark, setDark] = useState(false);

  useEffect(() => {
    // TODO: add browser storage & persistent setting
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])
  
	return (
		<header className="fixed z-10 w-screen bg-gray-500 dark:bg-gray-800">
			<nav className="mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-2">
				<div className="relative flex items-center justify-start h-16 col-span-1 md:col-span-2">
					<a href="#introducton" className="text-black dark:text-white">Portfolio</a>
					<div className="form-check form-switch ml-8">
						<input className="element-toggle" type="checkbox" role="switch" defaultChecked={dark} onChange={(e) => {
							setDark(!dark);
						}} />
					</div>
					<img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Darkmode_moon_shining_stars.svg"
						className="h-10 w-10 ml-3 grayscale" alt="dark mode" />
				</div>
				<div className="relative hidden sm:flex items-center justify-end h-16 text-black dark:text-white">
					<div className="mr-3">Made With:</div>
					<a href="https://www.typescriptlang.org/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
						className="h-10 w-10 mr-3" alt="Typescript" />
					</a>
					<a href="https://reactjs.org/" >
						<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
						className="object-fit h-10 w-10 mr-3" alt="React" />
					</a>
					<a href="https://tailwindcss.com/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
						className="h-10 w-10" alt="Tailwind CSS" />
					</a>
				</div>
			</nav>
		</header>
	)
}
