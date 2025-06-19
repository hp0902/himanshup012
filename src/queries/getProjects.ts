// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const data = [
  {
    title: "Project 1",
    Situation: "The situation here...",
    Task: "The task to solve...",
    Action: "The action taken...",
    Result: "The result achieved...",
    techused: "ReactJS, NodeJS"
  },
  // more projects
];

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}
