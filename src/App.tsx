import React, { useState, useRef, ReactNode } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import { IoIosHome, IoIosMail } from "react-icons/io";
import {
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
  FaSass,
  FaFigma,
  FaAngular,
  FaArrowLeft,
  FaDatabase,
} from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";
import { SketchPicker } from "react-color";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiTypescript,
  SiMongodb,
  SiPostman,
  SiJest,
  SiStyledcomponents,
  SiReactquery,
  SiMui,
  SiExpress,
  SiWebpack,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoVisualStudio } from "react-icons/bi";

interface CVData {
  name: string;
  position: string;
  email: string;
  phone: string;
  about: string;
  isEnglish: boolean;
  iconSize: number;
  color1: string;
  color2: string;
}

interface IOtherSkills {
  isActive: boolean;
  eng: string;
  pl: string;
}

interface ITechnicalSkills {
  isActive: boolean;
  name: string;
  icon: ReactNode;
}

interface IProjects {
  date: string;
  isActive: boolean;
  name: string;
  link: string;
  descriptionPl: string;
  descriptionEng: string;
  tech: string[];
}

const CV = React.forwardRef<
  HTMLDivElement,
  {
    data: CVData;
    otherSkills: IOtherSkills[];
    technicalSkills: ITechnicalSkills[];
    projects: IProjects[];
  }
>(({ data, otherSkills, technicalSkills, projects }, ref) => {
  return (
    <div ref={ref} className="page">
      <div className="margin" style={{ background: data.color1 }}>
        <div className="nameTitle" style={{ backgroundColor: data.color2 }}>
          <h1>{data.name}</h1>
        </div>
        <h3 style={{ margin: "15px 0 15px" }}>{data.position}</h3>
        <p style={{ textAlign: "center" }}>
          {data.about !== ""
            ? data.about
            : data.isEnglish
            ? "Beginning developer, for whom every encountered problem becomes a puzzle, that he can add to his programming knowledge."
            : "Początkujący developer, dla którego każdy napotkany problem to kolejny klocek, który dokłada do swojej programistycznej wiedzy."}
        </p>
        <div>
          <h3 className="marginTitles" style={{ backgroundColor: data.color2 }}>
            {data.isEnglish ? "Contact" : "Kontakt"}
          </h3>
          <span className="contactElement">
            <IoIosHome size={`${data.iconSize}em`} />
            <p>{data.isEnglish ? "Cracow / Poland" : "ul. Domagały, Kraków"}</p>
          </span>
          <span className="contactElement">
            <IoIosMail size={`${data.iconSize}em`} />
            <a href="mailto:bartek.gal23@gmail.com">bartek.gal23@gmail.com</a>
          </span>
          <span className="contactElement">
            <FaPhoneSquareAlt size={`${data.iconSize}em`} />
            <a href="tel:+48788839694">+48 788 839 694</a>
          </span>
          <span className="contactElement">
            <FaLinkedin size={`${data.iconSize}em`} />
            <a
              href="https://linkedin.com/in/bartlomiej-gal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/bartlomiej-gal/
            </a>
          </span>
          <span className="contactElement">
            <FaGithub size={`${data.iconSize}em`} />
            <a
              href="https://github.com/BGal23"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/BGal23
            </a>
          </span>
        </div>
        <div>
          <h3 className="marginTitles" style={{ backgroundColor: data.color2 }}>
            {data.isEnglish ? "Education" : "Edukacja"}
          </h3>
          <span className="eduElement">
            <PiCertificateLight size={`${data.iconSize}em`} />
            <div>
              <b>03.2023 - 03-2024</b>
              <span>{`GoIT ${
                data.isEnglish ? "course" : "kurs"
              } Full Stack`}</span>
            </div>
          </span>
          <span className="eduElement">
            <IoSchool size={`${data.iconSize}em`} />
            <div>
              <b>10.2016 - 04.2020</b>
              <span>
                {data.isEnglish
                  ? "Cracow University"
                  : "Politechnika Krakowska"}
              </span>
            </div>
          </span>
        </div>
        <div>
          <h3 className="marginTitles" style={{ backgroundColor: data.color2 }}>
            {data.isEnglish ? "Other Skills" : "Inne umiejętności"}
          </h3>
          <ul>
            {otherSkills.map((skill, index) =>
              skill.isActive ? (
                <li key={index}>- {data.isEnglish ? skill.eng : skill.pl}</li>
              ) : null
            )}
          </ul>
        </div>
        <div>
          <h3 className="marginTitles" style={{ backgroundColor: data.color2 }}>
            {data.isEnglish ? "Interests" : "Zainteresowania"}
          </h3>
          <span>
            &nbsp;&nbsp;&nbsp;
            {data.isEnglish
              ? "I am interested in new technologies and astronomy, which is also the reason for my interest in popular science books and sci-fi literature. I also like to watch movies and tv series focused on those topics. In my free time I like to play computer games, usually the strategic ones."
              : "Interesuje się nowościami technologicznymi i astronomią, stąd też lubię książki popularno naukowe jak i literaturę sci-fi. Filmy i seriale z tej dziedziny, także należą do grona moich zainteresowań. W wolnym czasie gram w gry komputerowe, najczęściej w stare strategie."}
          </span>
        </div>
      </div>
      <div className="restPage">
        <div>
          <div>
            <h3 className="pageTitles" style={{ marginTop: 0 }}>
              {data.isEnglish ? "Experience" : "Doświadczenie"}
            </h3>

            <div className="description">
              <b>• 05.2024-02.2025</b>
              {data.isEnglish ? (
                <span>
                  Front-end Developer Intern in co. Franciszek Poniedziałek
                  Software Development - introduction to project in
                  bar&nightclub industry, working with experienced developer,
                  adjusting own code to the project code.
                </span>
              ) : (
                <span>
                  Stażysta Front-end Developer w firmie Franciszek Poniedziałek
                  Software Development - wdrożenie do aplikacji z branży
                  bar/klub, praca z doświadczonym developerem, dostosowanie kodu
                  do kodu istniejącego w projekcie.
                </span>
              )}
              <p>
                <i>(TypeScript, React, Redux, REST, GitLab)</i>
              </p>
            </div>
          </div>
          <div>
            <h3 className="pageTitles">
              {data.isEnglish ? "Technical Skills" : "Umiejętności Techniczne"}
            </h3>
            <div>
              <ul className="technicalContainer">
                {technicalSkills.map((skill, index) =>
                  skill.isActive ? (
                    <li key={index}>
                      <div className="technicalElement">
                        <div>{skill.icon}</div>
                        <b>{skill.name}</b>
                      </div>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="pageTitles">
              {data.isEnglish ? "My Projects" : "Moje Projekty"}
            </h3>
            <ul className="projectContainer">
              {projects.map((project, index) =>
                project.isActive ? (
                  <li key={index}>
                    <div>
                      <span className="projectTitle">
                        <strong>
                          •{" "}
                          <a
                            style={{ color: data.color1 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.name}
                          </a>
                        </strong>
                        <b>{project.date}</b>{" "}
                      </span>
                      <p>
                        &nbsp;&nbsp;
                        {data.isEnglish
                          ? project.descriptionEng
                          : project.descriptionPl}
                      </p>{" "}
                      <p>
                        <i>({project.tech.join(", ")})</i>
                      </p>
                    </div>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
        <div className="rodo">
          {data.isEnglish
            ? "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).(RODO)."
            : "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE"}
        </div>
      </div>
    </div>
  );
});

const App: React.FC = () => {
  const [formData, setFormData] = useState<CVData>({
    name: "Bartłomiej Gal",
    position: "Front-end Developer",
    email: "jan.kowalski@example.com",
    phone: "+48 123 456 789",
    about: "",
    isEnglish: false,
    iconSize: 1.8,
    color1: "#053b6d",
    color2: "#082036",
  });

  const [otherSkills, setOtherSkills] = useState<IOtherSkills[]>([
    { isActive: true, eng: "English B2", pl: "Angielski B2" },
    { isActive: true, eng: "Polish Native", pl: "Polski ojczysty" },
    { isActive: true, eng: "Writing clean code", pl: "Pisanie czystego kodu" },
    {
      isActive: true,
      eng: "Responsive web design (RWD)",
      pl: "Responsywny design (RWD)",
    },
    { isActive: true, eng: "Team work", pl: "Praca zespołowa" },
    { isActive: true, eng: "Creativity", pl: "Kreatywność" },
    { isActive: true, eng: "Determination", pl: "Determinacja" },
    { isActive: true, eng: "Sense of humor 🙂", pl: "Poczucie humoru 🙂" },
  ]);

  const [technicalSkills, setTechnicalSkills] = useState<ITechnicalSkills[]>([
    { isActive: true, name: "HTML", icon: <FaHtml5 size={"2em"} /> },
    { isActive: true, name: "CSS", icon: <FaCss3Alt size={"2em"} /> },
    { isActive: true, name: "JavaScript", icon: <FaJs size={"2em"} /> },
    {
      isActive: true,
      name: "TypeScript",
      icon: <SiTypescript size={"1.8em"} />,
    },
    { isActive: true, name: "Next.js", icon: <RiNextjsFill size={"2em"} /> },
    { isActive: true, name: "React", icon: <FaReact size={"2em"} /> },
    { isActive: true, name: "Redux", icon: <TbBrandRedux size={"2em"} /> },
    { isActive: true, name: "Node.js", icon: <FaNodeJs size={"2em"} /> },
    { isActive: true, name: "Git", icon: <FaGitAlt size={"2em"} /> },
    {
      isActive: true,
      name: "Tailwind",
      icon: <RiTailwindCssFill size={"2em"} />,
    },
    { isActive: true, name: "MongoDB", icon: <SiMongodb size={"2em"} /> },
    { isActive: false, name: "Angular", icon: <FaAngular size={"2em"} /> },
    { isActive: true, name: "Postman", icon: <SiPostman size={"2em"} /> },
    {
      isActive: true,
      name: "React Query",
      icon: <SiReactquery size={"2em"} />,
    },
    { isActive: true, name: "Jest", icon: <SiJest size={"2em"} /> },
    { isActive: true, name: "Docker", icon: <FaDocker size={"2em"} /> },
    {
      isActive: false,
      name: "Styled Components",
      icon: <SiStyledcomponents size={"2em"} />,
    },
    {
      isActive: false,
      name: "Material UI",
      icon: <SiMui size={"2em"} />,
    },
    {
      isActive: false,
      name: "SASS/SCSS",
      icon: <FaSass size={"2em"} />,
    },
    {
      isActive: false,
      name: "Figma",
      icon: <FaFigma size={"2em"} />,
    },
    {
      isActive: false,
      name: "SQL",
      icon: <FaDatabase size={"2em"} />,
    },
    {
      isActive: false,
      name: "MySQL",
      icon: <GrMysql size={"2em"} />,
    },
    {
      isActive: false,
      name: "Visual Studio",
      icon: <BiLogoVisualStudio size={"2em"} />,
    },
    {
      isActive: false,
      name: "Express",
      icon: <SiExpress size={"2em"} />,
    },
    {
      isActive: false,
      name: "WebPack",
      icon: <SiWebpack size={"2em"} />,
    },
  ]);

  const [projects, setProjects] = useState<IProjects[]>([
    {
      isActive: true,
      name: "Flashcards App",
      link: "https://bgal23.github.io/flashcards_app/",
      descriptionPl:
        "Aplikacja do nauki języków, jednoosobowy projekt, aplikacja mobilna, zapisywanie danych i ustawień w localStorage i IndexedDB, importowanie danych z plików.",
      descriptionEng:
        "Language learning app, one-person project, mobile app, saving data and settings in localStorage and IndexedDB, importing data from files.",
      tech: [
        "TypeScript",
        "React",
        "SASS",
        "MaterialUI",
        "Node.js",
        "IndexedDB",
      ],
      date: "11.2024-02.2025",
    },
    {
      isActive: true,
      name: "TMDB Search Engine",
      link: "https://tmdb-search-engine.vercel.app/",
      descriptionPl:
        "Jednostronna aplikacja, wykorzystująca darmowe API, zawiera zmianę języka, responsywną stronę (RWD) oraz podejście mobile-first, strona generowana przez SSR.",
      descriptionEng:
        "One-page application, uses free API, includes language change, responsive website (RWD) and mobile-first approach, website generated by SSR.",
      tech: ["TypeScript", "Next.js", "Tailwind", "RWD"],
      date: "07.2024",
    },
    {
      isActive: true,
      name: "Enigma",
      link: "https://bgal23.github.io/enigma/",
      descriptionPl:
        "Symulator maszyny szyfrującej Enigma, jednoosobowy projekt, dbałość o odwzorowanie mechaniki działania oraz wyglądu aplikacji.",
      descriptionEng:
        "Enigma encryption machine simulator, one-person project, attention to mapping the mechanics of operation and visual appearance of the application.",
      tech: ["TypeScript", "React", "Node.js", "MaterialUI", "RWD"],
      date: "06-07.2024",
    },
    {
      isActive: true,
      name: "Fake Shop",
      link: "https://bgal23.github.io/shop_ts_react/",
      descriptionPl:
        "Sklep internetowy, jednoosobowy projekt, możliwość logowania i rejestracji, tworzenie formularza zakupu, wykorzystanie bibliotek zewnętrznych, responsywność strony (RWD).",
      descriptionEng:
        "Online shop, one-person project, ability to log in and register, creating purchase form, using outside libraries, responsiveness of the page (RWD).",
      tech: ["TypeScript", "React", "Redux", "SASS", "Node.js", "REST"],
      date: "04-05.2024",
    },
    {
      isActive: true,
      name: "Kapu$ta",
      link: "https://bgal23.github.io/goit-gr2-kapusta/",
      descriptionPl:
        "Wirtualny portfel, projekt grupowy (pozycja: Team Leader), front-end i back-end, możliwość logowania, dodawania i edytowania bazy danych.",
      descriptionEng:
        "Virtual wallet, group project (position: Team Leader), front-end and back-end, ability to log in, ability to add and edit database.",
      tech: [
        "JavaScript",
        "React",
        "Redux",
        "SASS",
        "Node.js",
        "Postman",
        "MongoDB",
        "REST",
      ],
      date: "03.2024",
    },
    {
      isActive: false,
      name: "Mars Page",
      link: "https://bgal23.github.io/nasa_react/",
      descriptionPl:
        "Galeria zdjęć wykorzystująca API NASA, projekt jednoosobowy, korzystający z dokumentacji NASA, paginacja danych, responsywność strony (RWD).",
      descriptionEng:
        "Photo gallery using NASA API, one-person project, using NASA documentation, data pagination, responsiveness of the page (RWD).",
      tech: ["JavaScript", "React", "Redux", "SASS", "Node.js", "REST"],
      date: "01.2024",
    },
    {
      isActive: false,
      name: "Bookshelf",
      link: "https://gointoorbit.github.io/goit-project-js-group-2",
      descriptionPl:
        "Strona księgarni, projekt grupowy, korzysta z darmowego API, utworzenie koszyka w LocalStorage, responsywność strony (RWD), strona posiada Dark Mode.",
      descriptionEng:
        "Bookstore website, group project, uses free API, cart creation in LocalStorage, responsiveness (RWD), Dark Mode functionality.",
      tech: ["JavaScript", "HTML", "SASS", "REST"],
      date: "10.2023",
    },
    {
      isActive: false,
      name: "Ice Cream",
      link: "https://bgal23.github.io/projekt_HTML_CSS_grupa_03",
      descriptionPl:
        "Strona lodziarni typu One-Page, projekt grupowy (stanowisko Team Leader).",
      descriptionEng:
        "One-page ice cream shop website, group project (Team Leader position).",
      tech: ["HTML", "SASS"],
      date: "06.2023",
    },
  ]);

  const [zoom, setZoom] = useState<number>(0.7);
  const [openColor1, setOpenColor1] = useState<boolean>(false);
  const [openColor2, setOpenColor2] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeOtherSkills = (skillName: string) => {
    setOtherSkills((prevSkills) =>
      prevSkills.map((skill) =>
        (formData.isEnglish ? skill.eng : skill.pl) === skillName
          ? { ...skill, isActive: !skill.isActive }
          : skill
      )
    );
  };

  const handleChangeTechnicalSkills = (skillName: string) => {
    setTechnicalSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.name === skillName
          ? { ...skill, isActive: !skill.isActive }
          : skill
      )
    );
  };

  const handleChangeProjects = (projectName: string) => {
    setProjects((prevSkills) =>
      prevSkills.map((project) =>
        project.name === projectName
          ? { ...project, isActive: !project.isActive }
          : project
      )
    );
  };

  const handleAddNewSkill = (e: React.FormEvent, newSkill: string) => {
    e.preventDefault();
    if (
      newSkill &&
      !otherSkills.find((skill) =>
        formData.isEnglish ? skill.eng : skill.pl === newSkill
      )
    ) {
      setOtherSkills([
        ...otherSkills,
        { isActive: true, eng: newSkill, pl: newSkill },
      ]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleColorChange1 = (color: any) => {
    setFormData({ ...formData, color1: color.hex });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleColorChange2 = (color: any) => {
    setFormData({ ...formData, color2: color.hex });
  };

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "CV_Bartłomiej_Gal",
  });

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div style={{ maxWidth: "190px" }}>
          <button
            onClick={() => {
              handlePrint();
            }}
          >
            <b>Generuj plik PDF</b>
          </button>
          <br />
          <br />
          <label>
            <b>Zoom</b>
            <input
              type="range"
              name="interest_rate"
              value={zoom}
              min="0.5"
              max="1"
              step="0.025"
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </label>
          <br />
          <br />
          <span>
            <b>Język</b>
            <input
              type="radio"
              name="lng"
              value="false"
              checked={!formData.isEnglish}
              onChange={() => setFormData({ ...formData, isEnglish: false })}
            />
            PL
            <input
              type="radio"
              name="lng"
              value="true"
              checked={formData.isEnglish}
              onChange={() => setFormData({ ...formData, isEnglish: true })}
            />
            ENG
          </span>
          <br />
          <br />
          <label htmlFor="position">
            <b>Stanowisko</b>
            <br />
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="JavaScript Developer">JavaScript Developer</option>
              <option value="TypeScript Developer">TypeScript Developer</option>
              <option value="React Developer">React Developer</option>
              <option value="Node.js Developer">Node.js Developer</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            <b>O mnie:</b>
            <br />
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            <b>Projekty</b>
            <ul>
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="liElement"
                  onClick={() => handleChangeProjects(project.name)}
                >
                  <input
                    type="checkbox"
                    value={project.name}
                    onChange={() => handleChangeProjects(project.name)}
                    style={{ pointerEvents: "none" }}
                    checked={project.isActive}
                  />
                  <span>{project.name}</span>
                </li>
              ))}
            </ul>
          </label>
          <br />
          <label>
            <b>Inne umiejętności</b>
            <form
              onSubmit={(e) => {
                const newSkill = (
                  e.target as HTMLFormElement
                ).newSkill.value.trim();
                handleAddNewSkill(e, newSkill);
                (e.target as HTMLFormElement).reset();
              }}
            >
              <input
                style={{ margin: "5px 10px 5px 0" }}
                type="text"
                name="newSkill"
                placeholder="Nowy element..."
              />
              <button type="submit">
                <b>+</b>
              </button>
            </form>
            <ul>
              {otherSkills.map((skill, index) => {
                const skillName = formData.isEnglish ? skill.eng : skill.pl;
                return (
                  <li
                    key={index}
                    className="liElement"
                    onClick={() => handleChangeOtherSkills(skillName)}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      value={skillName}
                      checked={skill.isActive}
                      onChange={() => handleChangeOtherSkills(skillName)}
                      style={{ pointerEvents: "none" }}
                    />
                    {skillName}
                  </li>
                );
              })}
            </ul>
          </label>
        </div>
        <div>
          <label>
            <b>Techniczne</b>
            <ul>
              {technicalSkills.map((skill, index) => (
                <li
                  key={index}
                  className="liElement"
                  onClick={() => handleChangeTechnicalSkills(skill.name)}
                >
                  <input
                    type="checkbox"
                    value={skill.name}
                    checked={skill.isActive}
                    onChange={() => handleChangeTechnicalSkills(skill.name)}
                    style={{ pointerEvents: "none" }}
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </label>
          <br />
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5em",
              alignItems: "center",
              height: "20px",
              marginBottom: "1em",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setOpenColor1(!openColor1);
                setOpenColor2(false);
              }}
              style={{ width: "115px" }}
            >
              <b>{openColor1 ? "Zamknij kolor 1" : "Zmień kolor 1"}</b>
            </button>
            <div
              style={{
                border: "1px solid white",
                backgroundColor: formData.color1,
                height: "100%",
                width: "20px",
                borderRadius: "3px",
              }}
            />
            <FaArrowLeft style={{ display: openColor1 ? "block" : "none" }} />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5em",
              alignItems: "center",
              height: "20px",
              marginBottom: "1em",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setOpenColor2(!openColor2);
                setOpenColor1(false);
              }}
              style={{ width: "115px" }}
            >
              <b>{openColor2 ? "Zamknij color 2" : "Zmień kolor 2"}</b>
            </button>
            <div
              style={{
                border: "1px solid white",
                backgroundColor: formData.color2,
                height: "100%",
                width: "20px",
                borderRadius: "3px",
              }}
            />
            <FaArrowLeft style={{ display: openColor2 ? "block" : "none" }} />
          </span>
          <div style={{ display: openColor1 ? "block" : "none" }}>
            <SketchPicker
              color={formData.color1}
              onChangeComplete={handleColorChange1}
            />
          </div>
          <div style={{ display: openColor2 ? "block" : "none" }}>
            <SketchPicker
              color={formData.color2}
              onChangeComplete={handleColorChange2}
            />
          </div>
        </div>
      </div>

      <div style={{ zoom: zoom }} ref={contentRef}>
        <CV
          data={formData}
          otherSkills={otherSkills}
          technicalSkills={technicalSkills}
          projects={projects}
        />
      </div>
    </div>
  );
};

export default App;
