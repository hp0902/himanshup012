import { GraphQLClient } from 'graphql-request';
const query = `
  {
    profilebanner {
      backgroundImage {
        url
      }
      headline
      resumeLink
      linkedinLink
      profileSummary
    }
  }
`;
const endpoint
