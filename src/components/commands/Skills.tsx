import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiTerraform ,
	SiKubernetes
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaDocker,FaAws } from "react-icons/fa";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Tailwindcss",
		},
		{
			Icon: SiTypescript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",
		},
		{
			Icon: SiExpress,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Express.js",
		},
		{
			Icon: FaGolang,
			barWidth: "w-1/2",
			percentageValue: "50%",
			text: "GO",
		},
		{
			Icon: SiNextdotjs,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Next.js",
		},
		{
			Icon: FaDocker,
			barWidth: "w-3/5",
			percentageValue: "60%",
			text: "Docker",
		},
		{
			Icon: SiTerraform,
			barWidth: "w-1/2",
			percentageValue: "50%",
			text: "Terraform",
		},
		{
			Icon: SiKubernetes,
			barWidth: "w-1/2",
			percentageValue: "50%",
			text: "Kubernetes",
		},
		{
			Icon: FaAws,
			barWidth: "w-60",
			percentageValue: "30%",
			text: "AWS",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
