// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';

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
