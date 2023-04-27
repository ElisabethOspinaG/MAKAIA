const URL_USERS = "http://localhost:3000/users";

const getUser = async (userName, password) => {
  try {
    const url = `${URL_USERS}?userName=${userName}&password=${password}`;
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUser;
