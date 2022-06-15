export default function Introduction() {
  return (
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
  )
}
