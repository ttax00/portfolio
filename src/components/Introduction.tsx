export default function Introduction() {
	return (
		<section id="introducton" className="section-commons px-8 sm:px-12 lg:px-32 grid grid-cols-2 md:grid-cols-3 content-center">
			<div className="flex flex-col justify-center content-start col-span-2">
				<p className="text-left mt-16 text-xl">
					<span className="motion-safe:animation fade-in text-3xl sm:text-5xl  md:text-7xl text-blue-600 dark:text-red-700">
						Welcome, I'm Tech.
					</span>
					<br />
					<span className="motion-safe:animation delay-1s fade-in md:text-4xl">
						A multi-lingual, multi-disciplined, self-taught hobbyist developer.
					</span>
				</p>
				<p className="motion-safe:animation delay-2s fade-in text-left mt-4 text-sm md:text-xl">
					I primary work on curious bite-sized projects, with more emphasis on discovery and understanding.
					Currently I'm on my journey to learn <a href="https://www.rust-lang.org/" className="text-blue-600 font-bold dark:text-red-700">Rust</a>.
				</p>
				<div className="motion-safe:animation delay-3s fade-in self-start mt-8">
					<a className="btn-primary block motion-safe:animation delay-4s animate-bounce" href="https://github.com/TechTheAwesome">
						Checkout my projects on github!
					</a>
				</div>
			</div>
			<div className="absolute self-end place-self-center">Test</div>
		</section>
	)
}
