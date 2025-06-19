export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  // Log the hostname for debugging
  console.log("Current hostname:", hostname);

  // Use a default token for debugging
  const defaultToken = "your_default_token_here"; // Replace with a valid token for testing

  // Token fetching based on hostname
  switch (hostname) {
    case 'himanshup012.onrender.com':  // Add this line for your Render hostname
      const renderToken = process.env.REACT_APP_DATOCMS_RENDER_TOKEN ?? defaultToken;
      console.log("Using Render Token:", renderToken);
      return renderToken;  // Return the correct token

    default:
      console.error(`No DatoCMS token configured for hostname: ${hostname}`);
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
