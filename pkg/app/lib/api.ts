import getConfig from 'next/config';

const {
  publicRuntimeConfig: { apiConfig },
} = getConfig();

const getApiURL = (path = ''): string => {
  return (apiConfig.apiUrl || 'http://localhost:3000') + path;
};

// Helper to make GET requests to Strapi
const fetchAPI = async (path: string): Promise<any> => {
  const requestUrl = getApiURL(path);
  console.log('requestUrl', requestUrl);
  const response = await fetch(requestUrl);

  return await response.json();
};

export { fetchAPI };
