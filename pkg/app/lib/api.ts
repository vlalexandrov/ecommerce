import getConfig from 'next/config';

const {
  publicRuntimeConfig: { apiConfig },
} = getConfig();

enum ResponseType {
  Success = 'success',
  Error = 'error',
}

interface Response {
  type: ResponseType;
  data: any;
}

const getApiURL = (path = ''): string => {
  return (apiConfig.apiUrl || 'http://localhost:3000') + path;
};

// Helper to make GET requests to Strapi
const fetchAPI = async (path: string): Promise<any> => {
  const requestUrl = getApiURL(path);

  try {
    const response = await fetch(requestUrl);
    const responseJson: Response = await response.json();

    if (responseJson.type !== ResponseType.Success) {
      throw new Error('Something went wrong');
    }

    return responseJson.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export { fetchAPI };
