// Object factory
const DriveUtils = () => {
  // fetches API and returns promise
  const fetchApi = async () => {
    const res = await fetch('api/');
    const data = await res.json();
    return data;
  };

  return { fetchApi };
};

export default DriveUtils;
