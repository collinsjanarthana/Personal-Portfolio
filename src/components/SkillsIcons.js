import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava 
} from "react-icons/fa";
import { 
  SiPhp, SiDjango, SiMysql, SiLatex, SiBootstrap, SiTailwindcss, SiCanva, SiFigma, 
  SiTypescript, SiNextdotjs, SiMongodb, SiClerk, SiAdobephotoshop, SiAdobeillustrator, SiExpress 
} from "react-icons/si";

export const SkillsIcons = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">
      {/* Core Languages */}
      <FaHtml5 size={50} color="#E44D26" className="m-3" />
      <FaCss3Alt size={50} color="#1572B6" className="m-3" />
      <FaJsSquare size={50} color="#F7DF1E" className="m-3" />
      <SiTypescript size={50} color="#007ACC" className="m-3" />
      <FaPython size={50} color="#3776AB" className="m-3" />
      <FaJava size={50} color="#007396" className="m-3" />
      {/* Placeholder for C */}
      <SiPhp size={50} color="#777BB4" className="m-3" />

      {/* Frameworks and Libraries */}
      <FaReact size={50} color="#61DAFB" className="m-3" />
      <SiNextdotjs size={50} color="#000000" className="m-3" />
      <FaNodeJs size={50} color="#68A063" className="m-3" />
      <SiExpress size={50} color="#000000" className="m-3" />
      <SiDjango size={50} color="#092E20" className="m-3" />

      {/* Databases */}
      <SiMysql size={50} color="#4479A1" className="m-3" />
      <SiMongodb size={50} color="#47A248" className="m-3" />

      {/* Design Tools */}
      <SiAdobeillustrator size={50} color="#FF9A00" className="m-3" />
      <SiAdobephotoshop size={50} color="#001B90" className="m-3" />
      <SiFigma size={50} color="#F24E1E" className="m-3" />
      <SiCanva size={50} color="#00C4CC" className="m-3" />

      {/* Styling and UI Frameworks */}
      <SiBootstrap size={50} color="#7952B3" className="m-3" />
      <SiTailwindcss size={50} color="#06B6D4" className="m-3" />

      {/* Developer Tools */}
      <SiClerk size={50} color="#3B82F6" className="m-3" />
      <SiLatex size={50} color="#008080" className="m-3" />
    </div>
  );
};
