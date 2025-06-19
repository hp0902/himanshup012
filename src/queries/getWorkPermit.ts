// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';
 const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`, // Use your actual API key here
      'Content-Type': 'application/json',
    },
const GET_WORK_PERMIT = `
  query MyQuery {
  workPermit {
    visastatus
    expirydate
    summary
    additionalinfo
  }
}
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  const data = await datoCMSClient.request<{ WorkPermit: WorkPermit }>(GET_WORK_PERMIT);
  return data.WorkPermit;
}
