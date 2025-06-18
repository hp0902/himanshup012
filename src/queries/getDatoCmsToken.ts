// getDatoCmsToken.ts

//export const getDatoCmsToken = (): string => {
  // Get the environment from the environment variables
//  const environment = process.env.NODE_ENV || 'development'; // default to development if not set

  // Check the environment and return the appropriate token
//  switch (environment) {
  //  case 'production':
  //    return process.env.REACT_APP_DATOCMS_PROD_TOKEN ?? '';
//
  //  case 'staging':
     // return process.env.REACT_APP_DATOCMS_STAGING_TOKEN ?? '';

   // case 'development':
    //  return process.env.REACT_APP_DATOCMS_DEV_TOKEN ?? '';

//    default:
    //  throw new Error(`No DatoCMS token configured for environment: ${environment}`);
  //}
//};
export const getDatoCmsToken = (): string => {
  // Use a custom environment variable to determine the environment
  const environment = process.env.REACT_APP_ENV || 'development';  // Default to 'development' if not set

  let token = '';
  switch (environment) {
    case 'production':
      token = process.env.REACT_APP_DATOCMS_PROD_TOKEN ?? '';
      break;
    case 'staging':
      token = process.env.REACT_APP_DATOCMS_STAGING_TOKEN ?? '';
      break;
    case 'development':
      token = process.env.REACT_APP_DATOCMS_DEV_TOKEN ?? '';
      break;
    default:
      throw new Error(`No DatoCMS token configured for environment: ${environment}`);
  }

  console.log('DatoCMS Token:', token);  // Log token for debugging
  return token;
};
