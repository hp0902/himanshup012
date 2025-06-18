// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';
const GET_TIMELINE = `
query MyQuery {
  allAlltimelines(orderBy: _createdAt_ASC) {
    name
    timelinetype
    title
    techstack
    summarypoints
    daterange
  }
}
`;


export async function getTimeline(): Promise<TimelineItem[]> {
  try {
    const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
    console.log('Timeline Data:', data.allTimelines);  // Log the data for debugging
    return data.allTimelines;
  } catch (error) {
    console.error('Error fetching timeline:', error);
    return [];
  }
}
