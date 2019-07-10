import 'fetch-everywhere';

export const getChallenge = async() => {
  try {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${baseUrl}/exercises`);
    return successHandler(response);
  } catch (error) {
    errorHandler(error);
  }
};

const successHandler = (response: any) => {
  if (!response) return null;
  if (!response.ok) {
    return response.json().then((result: any) => {
      throw result.error;
    });
  }
  return response.text().then((text: any) => {
    return text ? JSON.parse(text) : {};
  });
};

function errorHandler(error: any) {
  throw error;
}
