import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '51380954-6619e500596c0682c7775fe9d';

export function getImagesByQuery(query) {
  return axios(URL, {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(res => res.data)

    .catch(error => {
      console.log(error.message);
    });
}
