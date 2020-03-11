const fetchPost = (destination, body) => {
  return fetch(`.../${destination}`, {
    // TODO
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

export default fetchPost;
