// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  // Get the environment from the environment variables
  const environment = process.env.NODE_ENV || 'development'; // default to development if not set

  // Check the environment and return the appropriate token
  switch (environment) {
    case 'production':
      return process.env.REACT_APP_DATOCMS_PROD_TOKEN ?? '';

    case 'staging':
      return process.env.REACT_APP_DATOCMS_STAGING_TOKEN ?? '';

    case 'development':
      return process.env.REACT_APP_DATOCMS_DEV_TOKEN ?? '';

    default:
      throw new Error(`No DatoCMS token configured for environment: ${environment}`);
  }
};
