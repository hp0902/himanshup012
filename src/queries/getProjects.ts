// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
{
  title: 'CSGOLD Integration with Multiple Systems',
  description: 'Integrated CSGOLD with StarRez, Archibus, and FM Systems to automate workflows, streamline housing and facility management, and improve data accuracy.',
  techused: 'NodeJS, Python, PostgreSQL, API, CI/CD, GitLab, AWS',
  image: { url: '/images/csgold-integration.png' }
},
{
  title: 'Internal Audit & Reconciliation Framework',
  description: 'Designed and implemented a proactive audit framework to detect anomalies in transaction systems, preventing revenue leakage and reducing reconciliation effort by 40%.',
  techused: 'Python, SQL, AWS, Terraform, GitHub',
  image: { url: '/images/audit-framework.png' }
},
{
  title: 'Automated Key Request Application',
  description: 'Developed a full-stack application to manage physical and electronic key requests with automated workflows, notifications, and reporting for Facilities and Housing.',
  techused: 'ReactJS, NodeJS, PostgreSQL, AWS, Docker, CI/CD',
  image: { url: '/images/key-request-app.png' }
},
{
  title: 'Meal Plan Reconciliation Enhancement',
  description: 'Resolved major reconciliation issues in student meal plan processing by reengineering the backend import process and introducing load balancing.',
  techused: 'Python, SQL, Jenkins, CI/CD, GitHub',
  image: { url: '/images/meal-recon.png' }
},
{
  title: 'Smart Access Control Rules Engine',
  description: 'Built a rule-based engine to automate access control across housing, labs, and admin buildings based on user role, time, and event triggers.',
  techused: 'Python, NodeJS, Genetec API, AWS Lambda, Terraform',
  image: { url: '/images/smart-access.png' }
},
{
  title: 'Legacy Data Pipeline Decommissioning',
  description: 'Decommissioned outdated and redundant data pipelines between Banner ERP and CSGOLD, improving performance and ensuring license compliance.',
  techused: 'SQL, Python, GitLab, Jenkins, AWS',
  image: { url: '/images/data-pipeline.png' }
}
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}
