const api = 'http://localhost:3001';

window.token = localStorage.token;
if (!window.token) {
  window.token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  Authorization: window.token
}

export function getCategories() {
  return new Promise(function (resolve, reject) {
    fetch(api + '/categories', { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function getPost(postId) {
  return new Promise((resolve, reject) => {
    fetch(api + '/posts/' + postId.toString(), { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function getPosts() {
  return new Promise(function (resolve, reject) {
    fetch(api + '/posts', { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function getPostsByCategory(category) {
  return new Promise(function (resolve, reject) {
    fetch(api + `/${category}/posts`, { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function addPost(id, timestamp, title, body, author, category) {
  return new Promise((resolve, reject) => {
    fetch(api + '/posts', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, timestamp, title, body, author, category })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function deletePost(postId) {
  return new Promise((resolve, reject) => {
    fetch(`${api}/posts/`+ postId, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ postId })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function updatePost(id, title, body) {
  return new Promise((resolve, reject) => {
    fetch(api + '/posts/' + id.toString(), {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, title, body })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function votePost(id, option) {
  return new Promise((resolve, reject) => {
    fetch(api + '/posts/' + id.toString(), {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, option })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function getCommentsPost(postId) {
  return new Promise((resolve, reject) => {
    fetch(api + `/posts/${postId}/comments`, { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function addComment(id, timestamp, body, author, parentId) {
  console.log(id +"ID")
  console.log(timestamp +"TEMPO")
  console.log(body + "BODY")
  console.log(author +  "AUTOR")
  console.log(parentId +"PARENTE")
  return new Promise((resolve, reject) => {
    fetch(api + '/comments', {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, timestamp, body, author, parentId })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function deleteComment(commentId) {
  return new Promise((resolve, reject) => {
    fetch(`${api}/comments/`+ commentId, {
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ commentId })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject)
  })
}

export function updateComment(id, timestamp, body) {
  return new Promise((resolve, reject) => {
    fetch(api + '/comments/' + id.toString(), {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, timestamp, body })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}

export function voteComment(id, option) {
  return new Promise((resolve, reject) => {
    fetch(api + '/comments/' + id.toString(), {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, option })
    }).then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });
}