import axios from 'axios';

export default getDataFromApi = async url => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch {
    console.log('Error fetching data');
    return null;
  }
};

export const PostLoginData = async (url, data) => {
  console.log('URL,data', url, data);
  const res = await axios.post(url, data);
  console.log('POst :', res.data);
  return res.data;
};
