import errorMessage from '../config/errorMessage'

const getAthletes = async function () {
  const fetchData = {
    status: 'success',
    data: ''
  };

  try {
    const url = 'https://private-anon-08a7284e70-technicaltaskapi.apiary-mock.com/athlete';
    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text();
      throw Error(body);
    }

    fetchData.data = await response.json();
  } catch(err) {
    console.error(err);
    fetchData.status = 'error';
    fetchData.data = errorMessage.athletes.getAthletes;
  }

  return fetchData;
}

export { getAthletes };