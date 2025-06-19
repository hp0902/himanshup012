import React from 'react';
import './Projects.css';

const Project: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">📊 Projects</h2>

      {/* Project 1 */}
      <div className="project">
        <h3 className="project-title">Key Request Project</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> The institution lacked an integrated system for managing requests for physical keys and electronic access, leading to inefficiencies and security risks.</p>
          <p><strong>Task:</strong> Lead a cross-functional team to develop a comprehensive and scalable solution.</p>
          <p><strong>Action:</strong> Engaged stakeholders to gather requirements, facilitated transparent communication, and tackled technical challenges collaboratively.</p>
          <p><strong>Result:</strong> Successfully implemented a robust, user-friendly system that streamlined access management, reduced processing times, and improved security.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <h3 className="project-title">Reconciliation for Card Center</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> Discrepancies in meal plan data reconciliation posed significant issues for students and the university.</p>
          <p><strong>Task:</strong> Design and implement an automated system to improve accuracy and efficiency.</p>
          <p><strong>Action:</strong> Mapped the existing workflow, identified common discrepancies, and developed an algorithm for automated reconciliation.</p>
          <p><strong>Result:</strong> Achieved a 60% reduction in manual checks, enhancing trust in the system's reliability.</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <h3 className="project-title">CSGOLD and Pharos Integration</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> Needed seamless user data transfer between CSGOLD and Pharos for efficient printing services.</p>
          <p><strong>Task:</strong> Lead the integration project to ensure real-time updates between systems.</p>
          <p><strong>Action:</strong> Gathered feedback from users, developed an automated API connection, and tackled technical challenges collaboratively.</p>
          <p><strong>Result:</strong> Successfully implemented the integration, improving system efficiency and user experience.</p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project">
        <h3 className="project-title">CSGOLD and StarRez Integration</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> Required integration of CSGOLD with StarRez for automated processes in housing and dining services.</p>
          <p><strong>Task:</strong> Simplify daily operations for Housing and Residence Life (HRL) through this integration.</p>
          <p><strong>Action:</strong> Consulted with HRL stakeholders, maintained data integrity, and developed a reliable audit mechanism.</p>
          <p><strong>Result:</strong> Streamlined HRL processes, improved data accuracy, and reduced administrative burdens.</p>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project">
        <h3 className="project-title">Internal Audits and Preventive Procedures</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> Existing access control systems lacked robust security protocols.</p>
          <p><strong>Task:</strong> Develop automated audit and preventive procedures to enhance system integrity.</p>
          <p><strong>Action:</strong> Reviewed current practices, engaged departments, and implemented scripts to manage user access.</p>
          <p><strong>Result:</strong> Improved security and reduced manual workload for administrative staff by 40%.</p>
        </div>
      </div>

      {/* Project 6 */}
      <div className="project">
        <h3 className="project-title">Genetec Consolidation</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> Needed to consolidate three separate access control systems into one platform for efficiency.</p>
          <p><strong>Task:</strong> Streamline operations and enhance system reliability.</p>
          <p><strong>Action:</strong> Mapped critical features, coordinated with stakeholders, and ensured data integrity during migration.</p>
          <p><strong>Result:</strong> Achieved a 25% reduction in administrative overhead and improved overall security management.</p>
        </div>
      </div>

      {/* Project 7 */}
      <div className="project">
        <h3 className="project-title">PaperCut Print Management System</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> An outdated print management solution needed replacement.</p>
          <p><strong>Task:</strong> Design and implement a new system using PaperCut.</p>
          <p><strong>Action:</strong> Assessed user needs, coordinated with vendors, and resolved compatibility issues.</p>
          <p><strong>Result:</strong> Reduced printing waste by 20% and lowered operational costs.</p>
        </div>
      </div>

      {/* Project 8 */}
      <div className="project">
        <h3 className="project-title">COVID Lab System Implementation</h3>
        <div className="project-details">
          <p><strong>Situation:</strong> Urgent need to set up a compliant testing lab during the pandemic.</p>
          <p><strong>Task:</strong> Design a system for managing lab operations under regulatory requirements.</p>
          <p><strong>Action:</strong> Consulted healthcare professionals, developed a user-friendly interface, and adapted to changing guidelines.</p>
          <p><strong>Result:</strong> Successfully deployed a system that supported timely, accurate testing.</p>
        </div>
      </div>

      {/* Additional projects go here */}
    </div>
  );
};

export default Project;
