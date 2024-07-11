//navbar.js
export default function Navbar() {
	return (
		<div>
			<nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
							backdrop-blur-lg fixed top-0 z-10 bg-blue-500">
				<div className="container flex flex-col lg:flex-row
								gap-5 justify-between w-full 
								items-center max-w-5xl mx-auto">
					<h3 className="text-3xl text-emerald-500 font-bold text-white">
						Abhiram Gandikota
					</h3>
					<ul className="flex gap-3 align-center p-1 flex-wrap">
						<li>
							<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
										transition rounded hover:text-white 
										 text-black font-bold"
								href="#about">
								About
							</a>
						</li>
						<li>
							<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
										transition rounded hover:text-white 
										text-black font-bold"
								href="#education">
								Education
							</a>
						</li>
						<li>
							<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
										transition rounded hover:text-white 
										 text-black font-bold"
								href="#skills">
								Skills
							</a>
						</li>
						<li>
							<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
										transition rounded hover:text-white 
										text-black font-bold"
								href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="text-sm sm:text-base px-2 lg:px-5 py-2 
										transition rounded hover:text-white 
										text-black font-bold"
								href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}