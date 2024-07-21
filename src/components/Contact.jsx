import LinkedIn from "./linkedin.png";
import GitHub from "./github.png";
import Gmail from "./gmail.png";


export default function Contact() {
	return (
		<section id="contact"
				className="my-40 align-center max-w-5xl mx-auto p-3">
			<h2 className="text-5xl font-bold text-emerald-500 text-center">
				Contact
			</h2>
			<div className="flex gap-5 justify-center my-10">
            <div className="text-center">
					<a
						rel="noreferrer"
						target="_blank"
						className="hover:underline"
						href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
					<img src={Gmail} alt="Linkedin" width="60px"/></a>
				</div>
				<div className="text-center">
					<a
						rel="noreferrer"
						target="_blank"
						className="hover:underline"
						href="https://www.linkedin.com/in/abhiram-gandikota-601639235">
					<img src={LinkedIn} alt="Linkedin" width="60px"/></a>
				</div>
				<div className="text-center">
					<a
						rel="noreferrer"
						target="_blank"
						className="hover:underline"
						href="https://github.com/GandikotaAbhiram">
                    <img src={GitHub} alt="GitHub" width="60px" height="300px"/>
					</a>
				</div>
			</div>
			<div>
				<h4 class="font-bold text-2xl text-gray text-center">You can <a href="https://drive.google.com/file/d/1ClrtEBbh-WkkYVvGxYiI7ibo8xwBtKRy/view?usp=drive_link" target="_blank" style={{textDecoration:"underline blue", margin:"0px auto"}}>download my resume</a>.</h4>
			</div>
		</section>
	);
}