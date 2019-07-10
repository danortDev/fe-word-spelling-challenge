import 'fetch-everywhere';
const BASE_URL = 'http://localhost:4000/api/v1';

export const getChallenge = async() => {
  try {
    const response = await fetch(`${BASE_URL}/exercises`);
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
