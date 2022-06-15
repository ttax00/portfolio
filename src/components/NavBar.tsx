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
	)
}
