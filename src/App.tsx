import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import { IoIosHome, IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";
import { SketchPicker } from "react-color";

interface CVData {
  name: string;
  position: string;
  email: string;
  phone: string;
  about: string;
  isEnglish: boolean;
  iconSize: number;
  color: string;
}

interface IOtherSkills {
  isActive: boolean;
  eng: string;
  pl: string;
}

const CV = React.forwardRef<
  HTMLDivElement,
  { data: CVData; otherSkills: IOtherSkills[] }
>(({ data, otherSkills }, ref) => {
  return (
    <div ref={ref} className="page">
      <div className="margin" style={{ background: data.color }}>
        <div className="nameTitle">
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
          <h3 className="marginTitles">
            {data.isEnglish ? "Contact" : "Kontakt"}
          </h3>
          <span className="contactElement">
            <IoIosHome size={`${data.iconSize}em`} />
            <p>{data.isEnglish ? "Cracow / Poland" : "ul. Domagały, Kraków"}</p>
          </span>
          <span className="contactElement">
            <IoIosMail size={`${data.iconSize}em`} />
            <p>bartek.gal23@gmail.com</p>
          </span>
          <span className="contactElement">
            <FaPhoneSquareAlt size={`${data.iconSize}em`} />
            <p>+48 788 839 694</p>
          </span>
          <span className="contactElement">
            <FaLinkedin size={`${data.iconSize}em`} />
            <p>linkedin.com/in/bartlomiej-gal/</p>
          </span>
          <span className="contactElement">
            <FaGithub size={`${data.iconSize}em`} />
            <p>github.com/BGal23</p>
          </span>
        </div>
        <div>
          <h3 className="marginTitles">
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
          <h3 className="marginTitles">
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
          <h3 className="marginTitles">
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
            <h3 className="pageTitles">
              {data.isEnglish ? "Experience" : "Doświadczenie"}
            </h3>
          </div>
          <div>
            <h3 className="pageTitles">
              {data.isEnglish ? "Technical Skills" : "Umiejętności Techniczne"}
            </h3>
          </div>
          <div>
            <h3 className="pageTitles">
              {data.isEnglish ? "My Projects" : "Moje Projekty"}
            </h3>
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
    position: "Fullstack Developer",
    email: "jan.kowalski@example.com",
    phone: "+48 123 456 789",
    about: "",
    isEnglish: false,
    iconSize: 1.8,
    color: "#053b6d",
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

  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
  const handleColorChange = (color: any) => {
    setFormData({ ...formData, color: color.hex });
  };

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <h2>Edytuj CV</h2>
        <label>
          Stanowisko:{" "}
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </label>

        <br />
        <label>
          O mnie:{" "}
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <p>Inne umiejętności</p>
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
              type="text"
              name="newSkill"
              placeholder="Dodaj nową umiejętność"
            />
            <button type="submit">Dodaj</button>
          </form>
          <ul>
            {otherSkills.map((skill, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  value={formData.isEnglish ? skill.eng : skill.pl}
                  onChange={() =>
                    handleChangeOtherSkills(
                      formData.isEnglish ? skill.eng : skill.pl
                    )
                  }
                  checked={skill.isActive}
                />
                {formData.isEnglish ? skill.eng : skill.pl}
              </li>
            ))}
          </ul>
        </label>
        <br />

        <SketchPicker
          color={formData.color}
          onChangeComplete={handleColorChange}
        />

        <br />
        <button onClick={() => handlePrint()}>Generuj PDF</button>
        <button
          onClick={() =>
            setFormData({ ...formData, isEnglish: !formData.isEnglish })
          }
        >
          PL/ENG
        </button>
      </div>

      <div ref={contentRef}>
        <CV data={formData} otherSkills={otherSkills} />
      </div>
    </div>
  );
};

export default App;
