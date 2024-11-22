import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Bio() {
	
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/shams03",
			text: "@shams03",
		},
		{
			title:"",
			Icon: FaXTwitter,
			href: "https://x.com/shams_zero",
			text: "@shams_zero",
		},
	];

	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-8 mb-3 ">
				<img
					src="./me.jpg"
					alt="Shams"
					className="w-60 h-60 rounded-full border-2 border-white object-cover"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Shams Zaman</h1>
					</div>
					<p className="text-lg text-gray-400">I am 21 years old.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software developer.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
