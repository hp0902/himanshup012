// getDatoCmsToken.ts
export const getDatoCmsToken = (): string => {
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

  console.log('Using token for', environment, ':', token);  // Log token for debugging
  return token;
};
