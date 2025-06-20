export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  // Log the hostname for debugging
  console.log("Current hostname:", hostname);

  // Use a default token for debugging
  const defaultToken = "8ddfa684505af65a7a6e30a2e35e76"; // Replace with a valid token for testing

  // Token fetching based on hostname
  switch (hostname) {
    case 'himanshup012.onrender.com':  // Add this line for your Render hostname
      case 'himanshup.info': 
    case 'himanshup.info/work-permit':
      const renderToken = process.env.REACT_APP_DATOCMS_RENDER_TOKEN ?? defaultToken;
      console.log("Using Render Token:", renderToken);
        
      
      return renderToken;  // Return the correct token

    default:
      console.error(`No DatoCMS token configured for hostname: ${hostname}`);
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
