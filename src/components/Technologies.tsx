import React from 'react'

export default function Technologies() {
	return (
		<section id="technologies" className="section-commons px-8 sm:px-12 lg:px-32 flex flex-col justify-center content-center text-center">
			<span className="text-2xl sm:text-4xl text-blue-600 dark:text-red-700">Technologies I love</span>
			<ul className="flex flex-row flex-wrap justify-center content-center animation fade-in delay-2s" >
				<li className="m-2">
					<a href="https://www.python.org/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg"
						className="h-24 w-24" alt="Python" />
					</a>
				</li>
				<li className="m-2">
					<a href="https://ipfs.io/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" 
						className="h-24 w-24" alt="IPFS" />
					</a>
				</li>
				<li className="m-2 inline-block overflow-hidden">
					<a href="https://dotnet.microsoft.com/en-us/languages/csharp">
						<img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" className="h-24 w-24 scale-150" alt="Csharp" />
					</a>
				</li>
				<li className="m-2">
					<a href="https://reactjs.org/" >
						<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="object-fit h-24 w-24" alt="React" />
					</a>
				</li>
				<li className="m-2">
					<a href="https://www.typescriptlang.org/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
						className="h-24 w-24" alt="Typescript" />
					</a>
				</li>
				<li className="m-2">
					<a href="https://www.rust-lang.org/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
						className="h-24 w-24" alt="Rust" />
					</a>
				</li>
				<li className="m-2">
					<a href="https://tailwindcss.com/">
						<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
						className="h-24 w-24" alt="Tailwind CSS" />
					</a>
				</li>
				
			</ul>
			<span className="text-sm">Icons from <a href="https://www.wikipedia.org/">wikipedia</a></span>
		</section>
	)
}
