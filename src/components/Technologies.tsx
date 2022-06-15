import React from 'react'

export default function Technologies() {
	return (
		<section id="introducton" className="section-commons px-8 sm:px-12 lg:px-32 flex flex-col justify-center content-center text-center">
			<span className="text-2xl sm:text-4xl text-blue-600 dark:text-red-700">Technologies I love</span>
			<ul className="flex flex-row flex-wrap justify-center content-center animation fade-in delay-2s" >
				<li className="h-24 w-24 m-2">
					<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg" alt="Python" />
				</li>
				<li className="h-24 w-24 m-2">
					<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" alt="IPFS" />
				</li>
				<li className="h-24 w-24 m-2">
					<img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" className=" scale-150" alt="Csharp" />
				</li>
				<li className="h-24 w-24 m-2 flex justify-center">
					<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
				</li>
				<li className="h-24 w-24 m-2">
					<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" />
				</li>
				<li className="h-24 w-24 m-2">
					<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" alt="Rust" />
				</li>
			</ul>
			<span className="text-sm">Icons from <a href="https://www.wikipedia.org/">wikipedia</a></span>
		</section>
	)
}
