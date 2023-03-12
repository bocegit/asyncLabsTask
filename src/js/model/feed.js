import state from '../state'

const getPosts = async function () {
  let feedData = [];
  const { feed } = state;
  try {
    const url = `https://private-anon-302ce053ca-technicaltaskapi.apiary-mock.com/feed?page=${feed.page}&sport=${feed.sport}`;
    const response = await fetch(url);
    feedData = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }

  return feedData;
}

export { getPosts };