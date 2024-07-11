//projects.js
export default function Projects() {
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-10 items-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-emerald-500 font-bold text-center mb-10">
				My Projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
				<div className="p-10 bg-white border-2 border-emerald-500 rounded-lg shadow transition hover:shadow-xl hover:scale-[102%]">
					<h2 className="font-bold text-3xl text-center mb-4">
						<a className="hover:underline" href="#">
							Portfolio using ReactJs
						</a>
					</h2>
					<p className="text-center">
						This is a project built on react which showcases my skills, contact, and my projects.
					</p>
				</div>
				<div className="p-10 bg-white border-2 border-emerald-500 rounded-lg shadow transition hover:shadow-xl hover:scale-[102%]">
					<h2 className="font-bold text-3xl text-center mb-4">
						<a className="hover:underline" href="https://gandikotaabhiram.github.io/Calculator/" target="_blank">
							Simple Calculator using HTML, CSS, and JavaScript
						</a>
					</h2>
					<p className="text-center">
						This project is a simple calculator built using HTML, CSS, and JavaScript to perform basic arithmetic operations.
					</p>
				</div>
				<div className="p-10 bg-white border-2 border-emerald-500 rounded-lg shadow transition hover:shadow-xl hover:scale-[102%]">
					<h2 className="font-bold text-3xl text-center mb-4">
						<a className="hover:underline" href="#">
							Responsive Hotel Booking Project based on HTML, CSS, Bootstrap
						</a>
					</h2>
					<p className="text-center">
						This project is a responsive hotel booking project built using HTML, CSS, and Bootstrap.
					</p>
				</div>
			</div>
		</section>
	);
}