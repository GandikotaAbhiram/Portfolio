//about.js
import Abhiram from "./abhi pic.jpg";

export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-emerald-200 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src={Abhiram} alt="Abhiram" width="200px" className="rounded-full"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-emerald-500 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
                I am a final-year Computer Science and Engineering student pursuing B.Tech degree. As a MERN Stack Developer, I have a passion for staying up-to-date with the latest technologies and programming languages. I have experience with languages such as C, C++, Python, and Java, as well as web development tools such as HTML, CSS, and JavaScript, ReactJs, NodeJs and MongoDB.
				</p>
			</div>
		</section>
	);
}