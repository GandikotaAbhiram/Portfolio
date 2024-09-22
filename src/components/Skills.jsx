export default function Skills() {
	const skills = {
		"Programming Languages": ["C", "C++", "Python"],
		"Web Development": ["HTML", "CSS", "JavaScript", "ReactJs", "NodeJs", "MongoDB", "SQL", "Bootstrap"],
		"Version Control": ["Git", "GitHub"]
	};
	
	return (
		<section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
			<h2 className="text-center text-6xl text-emerald-500 font-bold">
				My Skills...
			</h2>
			<div className="mt-10 p-8 border-2 border-emerald-500 rounded-lg shadow-lg text-center">
				{Object.keys(skills).map((category, index) => (
					<div key={index} className="mb-6">
						<h3 className="text-4xl text-emerald-500 font-bold mb-3">{category}</h3>
						<div className="flex flex-wrap justify-center gap-4">
							{skills[category].map((skill, skillIndex) => (
								<span key={skillIndex} className="px-4 py-2 bg-emerald-200 rounded-lg text-lg font-bold">
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}