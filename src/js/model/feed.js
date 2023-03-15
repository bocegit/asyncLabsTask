import state from '../state'
import errorMessage from '../config/errorMessage'

const getPosts = async function () {
  const fetchData = {
    status: 'success',
    data: ''
  };
  const { feed } = state;

  try {
    const url = `https://private-anon-302ce053ca-technicaltaskapi.apiary-mock.com/feed?page=${feed.page}&sport=${feed.sport}`;
    const response = await fetch(url);

    if (!response.ok) {
      const body = await response.text();
      throw Error(body);
    }

    fetchData.data = await response.json();
  } catch(err) {
    // optionally could send logs to server
    console.error(err);
    fetchData.status = 'error';
    fetchData.data = errorMessage.feed.getPosts;
  }

  return fetchData;
}

const saveBookmark = async function (postId) {
  const fetchData = {
    status: 'success',
    data: ''
  };
  try {
    const url = `https://private-anon-08a7284e70-technicaltaskapi.apiary-mock.com/bookmark/${postId}`;
    const fetchConfig = { method: "POST" };
    const response = await fetch(url, fetchConfig);

    if (!response.ok) {
      const body = await response.text();
      throw Error(body);
    }
  } catch(err) {
    console.error(err);
    fetchData.status = 'error';
    fetchData.data = errorMessage.feed.saveBookmark;
  }

  return fetchData;
}

const deleteBookmark = async function (postId) {
  const fetchData = {
    status: 'success',
    data: ''
  };
  try {
    const bookmarksUrl = 'https://private-anon-08a7284e70-technicaltaskapi.apiary-mock.com/bookmark';
    const bookmarksResponse = await fetch(bookmarksUrl);

    if (!bookmarksResponse.ok) {
      const body = await bookmarksResponse.text();
      throw Error(body);
    }

    const bookmarksData = await bookmarksResponse.json();
    let bookmarkId = 0;
    
    for (let i=0; i < bookmarksData.length; i++) {
      if (bookmarksData[i].id === postId) {
        bookmarkId = bookmarksData[i].id;
        break;
      }
    }

    const deleteUrl = `https://private-anon-08a7284e70-technicaltaskapi.apiary-mock.com/bookmark/${bookmarkId}`;
    const fetchConfig = { method: "DELETE" };
    const response = await fetch(deleteUrl, fetchConfig);

    if (!response.ok) {
      const body = await response.text();
      throw Error(body);
    }
  } catch(err) {
    console.error(err);
    fetchData.status = 'error';
    fetchData.data = errorMessage.feed.deleteBookmark;
  }

  return fetchData;
}

export { getPosts, saveBookmark, deleteBookmark };