import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaDatabase, FaCode, FaLaptop, FaChartLine, FaBuilding, FaUsers, FaCogs, FaBullseye, FaTasks } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

// Custom logos (e.g., Oracle, AutoCAD, etc.)
import oracleLogo from '../assets/oracle-logo.png';
import mssqlLogo from '../assets/mssql-logo.png';
import phpLogo from '../assets/php-logo.png';
import autocadLogo from '../assets/autocad-logo.png';
import revitLogo from '../assets/revit-logo.png';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  FaDatabase: <FaDatabase />,
  FaCode: <FaCode />,
  FaLaptop: <FaLaptop />,
  FaChartLine: <FaChartLine />,
  FaBuilding: <FaBuilding />,
  FaUsers: <FaUsers />,
  FaCogs: <FaCogs />,
  FaBullseye: <FaBullseye />,
  FaTasks: <FaTasks />,
  // Custom logos
//  oracleLogo: <img src={oracleLogo} alt="Oracle Logo" style={{ width: '40px', height: '40px' }} />,
//  mssqlLogo: <img src={mssqlLogo} alt="MSSQL Logo" style={{ width: '40px', height: '40px' }} />,
 // phpLogo: <img src={phpLogo} alt="PHP Logo" style={{ width: '40px', height: '40px' }} />,
  //autocadLogo: <img src={autocadLogo} alt="AutoCAD Logo" style={{ width: '40px', height: '40px' }} />,
  //revitLogo: <img src={revitLogo} alt="Revit Logo" style={{ width: '40px', height: '40px' }} />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">
                  {/* Render custom logo or icon */}
                  {iconMap[skill.icon] || <FaTasks />} {/* Default fallback icon */}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
