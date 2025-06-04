import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/all`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const searchCountriesByName = async name => {
  const res = await fetch(`${BASE_URL}/name/${name}`);
  return await res.json();
};
