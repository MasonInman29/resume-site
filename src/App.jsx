import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DOMAIN_NAME = null; // or whatever fallback you want

// Define tags with full + abbreviation + colors
const tagInfo = {
  Python: {
    full: "Python",
    abbr: "Python",
    color: "bg-blue-200 text-blue-800",
  },
  CV: {
    full: "Computer Vision",
    abbr: "CV",
    color: "bg-green-200 text-green-800",
  },
  AI: {
    full: "Artificial Intelligence",
    abbr: "AI",
    color: "bg-pink-200 text-pink-800",
  },
  ML: {
    full: "Machine Learning",
    abbr: "ML",
    color: "bg-yellow-200 text-yellow-800",
  },
  DL: {
    full: "Deep Learning",
    abbr: "DL",
    color: "bg-purple-200 text-purple-800",
  },
  FPGA: {
    full: "Embedded System",
    abbr: "FPGA",
    color: "bg-indigo-200 text-indigo-800",
  },
  AWS: { full: "AWS", abbr: "AWS", color: "bg-red-200 text-red-800" },
  JAVA: { full: "Java", abbr: "Java", color: "bg-orange-200 text-orange-800" },
  C: { full: "C/C++", abbr: "C", color: "bg-cyan-200 text-cyan-800" },
};

// Example projects
const projects = [
  {
    id: 1,
    title: "Real Time Pupil Segmentation",
    description:
      "Deployed optimized CNNs on an Ultra96v2 FPGA board for real-time video processing. The pipeline segmented the pupil of an eye in real time, an important aspect in seizure detection.",
    image: "assets/ultra96.png",
    link: "https://sdmay25-01.sd.ece.iastate.edu/",
    linkLabel: "Project Website",
    tags: ["Python", "CV", "ML", "DL", "AI", "FPGA"],
  },
  {
    id: 2,
    title: "Automated Lameness Detection for Dairy Farms",
    description:
      "Patent Pending Research for my Master's Thesis; A system to detect lame cows in dairy farms utilizing ML, AI, and AWS architectures.",
    image: "assets/yoloResults.jpg",
    link: null, // no external link
    linkLabel: "Thesis Paper (In Progress)", // show this text
    tags: ["Python", "CV", "ML", "DL", "AI", "AWS"],
  },
  {
    id: 3,
    title: "Automated Image Captioning",
    description:
      "A generalized image captioning model capable of captioning a wide variety of images. A customized deep-learning architecture was used and evaluated.",
    image: "assets/image-captioning-arch.png",
    link: "https://github.com/MasonInman29/image-captioning", // no external link
    linkLabel: "Github", // show this text
    tags: ["Python", "ML", "AI", "DL"],
  },
  {
    id: 4,
    title: "Adversarial Search Agent",
    description:
      "An AI agent that performs a hybrid Bayesian-Monte-Carlo-Tree-Search. My agent was recognized as one of the top performers amongst all my classmates by my professor.",
    image: "assets/adversarial-search-agent.png",
    link: null, // no external link
    linkLabel: "Github redacted for academic purposes.", // show this text
    tags: ["Python", "ML", "AI", "DL"],
  },
  {
    id: 5,
    title: "Cancer Prediction",
    description:
      "Analyzed the effectiveness of Logistic Regression vs Random Forest techniques at predicting if a tumor is cancerous.",
    image: "assets/dataset-cover-cancer-prediction.jpg",
    link: "https://github.com/MasonInman29/CancerPrediction/tree/main", // no external link
    linkLabel: "Github", // show this text
    tags: ["Python", "ML"],
  },
  {
    id: 6,
    title: "Fit Fusion Network",
    description:
      "A social networking gym app aimed to connect fellow members of their gyms, share goals, and hold accountability. With my team, I developed an android app using Java and Springboot.",
    video: "https://www.youtube.com/embed/7NcvrdOqD5g",
    link: "https://github.com/MasonInman29/FitFusionNetworkGymApp/tree/main/ta_126-main", // no external link
    linkLabel: "Github", // show this text
    tags: ["JAVA"],
  },
  {
    id: 7,
    title: "Facial Detection",
    description:
      "Utilizing OpenCV, I developed a real time facial detection system to familiarize myself with leading CV technology and create a filter.",
    link: "https://github.com/MasonInman29/Live_Facial_Detection", // no external link
    linkLabel: "Github", // show this text
    image: "assets/FacialDetection.png",
    tags: ["Python", "CV"],
  },
  {
    id: 8,
    title: "Disassembler",
    image: "assets/arm-example.png",
    description:
      "Disassembling a binary file into ARMv8 assembly language, more specifically the LEGv8 subset.",
    link: null, // no external link
    linkLabel: "Github redacted for academic purposes.", // show this text
    tags: ["C"],
  },
  {
    id: 9,
    title: "Procedurally Generated Pokemon Game",
    image: "assets/pokemonscreenshot.png",
    description:
      "Full Rogue-like Pokemon. Automatic terrain, path, gym, market, and NPC generation.",
    link: null, // no external link
    linkLabel: "Github redacted for academic purposes.", // show this text
    tags: ["C"],
  },
];

export default function App() {
  const [activeTag, setActiveTag] = useState("All");

  // Collect all tags from projects
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  // Filtered projects
  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="font-sans text-gray-900">
      <header className="bg-gray-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Mason Inman</h1>
        <p className="mt-2 text-lg">Software Engineer with a focus on AI/ML</p>
        <nav className="mt-4 space-x-4">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#education" className="hover:underline">
            Education
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="assets/InmanMasonResume_2025.pdf" className="hover:underline">
            View My Resume
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <section id="about" className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <img
          src="assets/masonPhoto.jpg"
          alt="Picture of Mason"
          className="w-full object-cover"
        />
        <p>
          I’m Mason Inman, a Master's student studying AI at Iowa State
          University, with a focus in Deep Learning, Computer Vision, and Model
          Deployments.
        </p>
      </section>

      <section id="education" className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>

        <div className="space-y-6">
          {/* Master's Degree */}
          <div>
            <h3 className="text-xl font-semibold">
              Master of Science in Artificial Intelligence
            </h3>
            <p className="text-gray-700">Iowa State University, Ames, IA</p>
            <p className="text-gray-600 text-sm">Expected Graduation: 2026</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Focused on deep learning, computer vision, and model deployment.
              </li>
              <li>
                Thesis Topic (Tentative): Automated Lameness Detection for Dairy
                Farms using AI and ML.
              </li>
            </ul>
          </div>

          {/* Bachelor's Degree */}
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Software Engineering
            </h3>
            <p className="text-gray-700">Iowa State University, Ames, IA</p>
            <p className="text-gray-600 text-sm">Graduated: 2025; GPA: 3.88</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Completed internships focusing on FPGA deployment and computer
                vision projects.
              </li>
              <li>
                Senior projects involved real-time video processing and model
                optimization.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 mt-6">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1 rounded-full border text-sm font-medium ${
                  activeTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tag === "All"
                  ? "All"
                  : `${tagInfo[tag]?.full} (${tagInfo[tag]?.abbr})`}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-md rounded-xl overflow-hidden"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                {project.video &&
                  (project.video.includes("youtube.com") ? (
                    <iframe
                      src={project.video}
                      title={project.title}
                      className="w-full h-48"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video controls className="w-full h-48 object-cover">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-700">{project.description}</p>

                  {/* Abbreviation tags */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-sm ${
                          tagInfo[tag]?.color || "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tagInfo[tag]?.abbr || tag}
                      </span>
                    ))}
                  </div>

                  {/* Link or Label */}
                  <div className="mt-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {project.linkLabel || "Project Link"}
                      </a>
                    ) : project.linkLabel ? (
                      <span className="text-gray-600 italic">
                        {project.linkLabel}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Advanced Software Engineering Intern
            </h3>
            <p className="text-gray-700">Kingland Systems, Ames, IA</p>
            <p className="text-gray-600 text-sm">Summer 2025; Summer - Winter 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Delivered full-stack features in an agile environment using Java, SQL, AWS, Jira, and many other technologies.
              </li>
              <li>
                Developed enterprise-level software that works with encrypted and highly confidential data.
              </li>
              <li>
                Responsible for engineering custom broker-data processors, encryption algorithms, SSH key authentication, and directly onboarding new brokers, which directly increased revenue.
              </li>
            </ul>
            <br></br>
            <p className="text-gray-600 text-sm">Skills Developed: Java, AWS, SQL, Jira, Agile, Teamwork, and Professionalism</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Senior Martial Arts Instructor and Program Director
            </h3>
            <p className="text-gray-700">Ankeny Martial Arts, Ankeny, IA</p>
            <p className="text-gray-600 text-sm">Spring 2018 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Wearing many hats, I help the owner with any and all activities the dojo is involved in: teaching classes, recruitment, curriculum/class planning, and promoting students.
              </li>
              <li>
                Primary Mentor for many young students as a young instructor; something I am very proud to have the opportunity to do.
              </li>
              <li>
                Ranks held: 5th Dan Black belt of Taekwondo, 1st Dan Black belt of Combat Hapkido, and Black Sash in Asian Weapons.
              </li>
              <li>
                Titles Held: Senior Instructor, Program Director, Demo-Team Leader, and Master of Taekwondo.
              </li>
            </ul>
            <br></br>
            <p className="text-gray-600 text-sm">Skills Developed: Leadership , Mentorship, Teaching, Teamwork, Courtesy, Integrity, Self-Control, and Indomitable Spirit.</p>

          </div>
        </div>
      </section>

      <section id="resume" className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Resume</h2>

      <a
          href="assets/InmanMasonResume_2025.pdf" // replace with your PDF path
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg font-medium 
                    hover:bg-white hover:text-gray-900 border border-gray-900 transition"
        >
          View My Resume (PDF)
        </a>
        
      </section>
      
      <section
  id="contact"
  className="bg-gray-900 text-white px-4 py-12 text-center"
>
  <h2 className="text-2xl font-bold mb-4">Contact</h2>
  <p className="mb-2">
    Email:{" "}
    <a href="mailto:inmanmason@gmail.com" className="underline">
      inmanmason@gmail.com
    </a>
  </p>

  <div className="flex justify-center gap-6 mt-4">
    <a
      href="https://github.com/MasonInman29"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-gray-300"
    >
      <FaGithub className="w-5 h-5" />
      Github
    </a>

    <a
      href="https://www.linkedin.com/in/mason-inman/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-gray-300"
    >
      <FaLinkedin className="w-5 h-5" />
      LinkedIn
    </a>
  </div>
</section>
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        © 2025 Mason Inman
      </footer>
    </div>
  );
}
