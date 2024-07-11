//hero.js
export default function Hero() {
	return (
		<section
			id="hero"
			className="px-10 w-full flex flex-col justify-center items-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto h-[80vh]">
			<style jsx>{`
				@keyframes fadeInUp {
					0% {
						opacity: 0;
						transform: translateY(20px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in-up {
					animation: fadeInUp 1s ease-in-out;
				}
			`}</style>
			<div className="flex flex-col justify-center items-center gap-5 text-center">
				<h2 className="text-emerald-500 text-5xl font-bold animate-fade-in-up">
					Hi, I am <span style={{ color: "red" }}>Abhiram</span>
				</h2>
				<h3 className="text-2xl font-bold text-gray">
					Computer Science Student
				</h3>
				<h1 className="text-2xl text-gray-800">
					Passionate about learning new Technologies and programming.
				</h1>
			</div>
		</section>
	);
}