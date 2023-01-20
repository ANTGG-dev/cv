import emoji from "react-easy-emoji";

export const greetings = {
	name: "Antonio García Gutiérrez",
	title: "Hi all, I'm Antonio",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Java, Spring, Python, Django, React.js, Next.js and Machine Learning development, knowledge in SQL and Oracle DB as well.",
	resumeLink:
		"https://drive.google.com/file/d/1U1QVKv3H50qCa2JOorsZ_YpVU_s3WmU3/view?usp=sharing",
};

export const openSource = {
	githubUserName: "antgg-dev",
};

export const contact = {};

export const socialLinks = {
	url: "https://antonio.codicusx.com",
	linkedin: "https://www.linkedin.com/in/antonio-garcia-gutierrez-02348215b/",
	github: "https://github.com/ANTGG-dev",
	instagram: "",
	facebook: "",
	twitter: "",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & SpringBoot"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Oracle",
					fontAwesomeClassname: "logos:oracle",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Spring",
					fontAwesomeClassname: "logos:spring",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Machine Learning",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡Experience in developing with PyTorch"
				),
				emoji(
					"⚡Building Scripts for predict with Python"
				),
				emoji(
					"⚡Experience of using Pandas, Numpy, Matplotlib"
				),
				emoji(
					"⚡Building Heuristics algorithms"
				),
			],
			softwareSkills: [
				{
					skillName: "PyTorch",
					fontAwesomeClassname: "logos:pytorch",
				},
				{
					skillName: "Numpy",
					fontAwesomeClassname: "logos:numpy",
				},
				{
					skillName: "Matplotlib",
					fontAwesomeClassname: "logos:matplotlib",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "TensorFlow",
					fontAwesomeClassname: "logos:tensorflow",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Algorithm Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "Autonomus University of Queretaro",
		subHeader: "Master of Science in Artificial Intelligence",
		duration: "July 2021 - Present",
		grade: "M.Sc",
		descBullets: [
			"Course in Automation",
		],
	},
	{
		schoolName: "Autonomus University of Queretaro",
		subHeader: "Bachelor's degree in Computer Science",
		duration: "July 2016 - July 2020",
		grade: "L.I",
		descBullets: [
			"Diplomat in Web Development",
			"Course in Microservices",
			"Course in Control",
		],
	},
];

export const experience = [
	{
		role: "Full Stack Developer",
		company: "UAQ",
		companylogo: "/img/icons/common/download.png",
		date: "Sept 2018 - Present",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		github: "https://github.com/1hanzla100/Django-React-Marketplace",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/1hanzla100/django-react-forum",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/1hanzla100/Django-ecommerce",
	},
];


// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Antonio García Gutiérrez",
	description:
		"A passionate Full Stack Web Developer and Machine Learning Developer.",
	author: "Antonio García Gutiérrez",
	image: "/img/icons/common/pic.jpg",
	url: "https://antonio.codicusx.com/",
	keywords: [
		"Antonio",
		"Antonio García Gutiérrez",
		"@antgg-dev",
		"antgg-dev",
		"Portfolio",
		"Antonio Portfolio ",
		"Antonio García Gutiérrez Portfolio",
	],
}
