export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  // Log the hostname for debugging
  console.log("Current hostname:", hostname);

  // Use a default token for debugging
  const defaultToken = "your_default_token_here"; // Replace with a valid token for testing

  // Token fetching based on hostname
  switch (hostname) {
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
    case 'ror.localhost':
    case 'localhost':
      const rorToken = process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? defaultToken;
      console.log("Using ROR Token:", rorToken);
      return rorToken;

    case 'java.sumanthsamala.com':
    case 'java.localhost':
      const javaToken = process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? defaultToken;
      console.log("Using Java Token:", javaToken);
      return javaToken;

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      const frontendToken = process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? defaultToken;
      console.log("Using Frontend Token:", frontendToken);
      return frontendToken;

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      const nodeToken = process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? defaultToken;
      console.log("Using Node Token:", nodeToken);
      return nodeToken;

    default:
      console.error(`No DatoCMS token configured for hostname: ${hostname}`);
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
