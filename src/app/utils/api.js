const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchAstroDetails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/astro_details`);
    if (!response.ok) {
      throw new Error('Failed to fetch astro details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching astro details:', error);
    throw error;
  }
};

export const fetchBirthDetails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/birth_details`);
    if (!response.ok) {
      throw new Error('Failed to fetch birth details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching birth details:', error);
    throw error;
  }
};
