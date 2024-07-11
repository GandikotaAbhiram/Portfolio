export default function Education() {
    return (
        <section id="education"
				className="my-20 w-full flex flex-col gap-5 items-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-emerald-500 font-bold text-center">
				Education
			</h2>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="flex flex-col items-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
                    B.Tech Computer Science Engineering
					</h2>
					<p className="text-center">
                        GVP College of Engineering<br></br>
                        2022-2025 | Pursuing
					</p>
				</div>
			</div>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
							max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full">
				<div className="flex flex-col items-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center w-full">
                        Intermediate Education
					</h2>
					<p className="text-center">
                        Bhashyam Jr College<br></br>
                        Guntur 2019-2021
					</p>
				</div>
			</div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="flex flex-col items-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
                       Secondary Schooling
					</h2>
					<p className="text-center">
                        Bhashyam High School<br></br>
                        Tadepalligudem 2018-2019
					</p>
				</div>
			</div>
		</section>
    );
};
