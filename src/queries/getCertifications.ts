// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
 query MyQuery {
  allAllcertifications {
    issuer
    title
    issueddate
    iconname
    link
  }
}
`;

export const getCertifications = async () => {
  return [
    {
      title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      issuer: "Amazon Web Services (AWS)",
      issueddate: "Jan, 2024",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      iconname: "university"
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute (PMI)",
      issueddate: "March, 2024",
      link: "https://www.pmi.org/certifications/project-management-pmp",
      iconname: "university"
    },
    {
      title: "Certified Information Security Manager (CISM)",
      issuer: "ISACA",
      issueddate: "May, 2025",
      link: "https://www.isaca.org/credentialing/cism",
      iconname: "university"
    },
    {
      title: "Professional Scrum Product Owner I & II (PSPO I & II)",
      issuer: "Scrum.org",
      issueddate: "May, 2025",
      link: "https://www.scrum.org/professional-scrum-product-owner-certification",
      iconname: "university"
    }
  ];
};
