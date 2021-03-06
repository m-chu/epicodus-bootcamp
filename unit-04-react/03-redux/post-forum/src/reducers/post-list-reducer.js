export default (state = {}, action) => {
  const { name, title, post, timePosted, likes, dislikes, id } = action;
  let newState;

  switch (action.type) {
  case 'ADD_POST':
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        title: title,
        post: post,
        timePosted: timePosted,
        likes: likes,
        dislikes: dislikes,
        id: id
      }
    });
    return newState;

  case 'LIKE_POST':
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        title: title,
        post: post,
        timePosted: timePosted,
        likes: likes + 1,
        dislikes: dislikes,
        id: id
      }
    });
    return newState;

  case 'DISLIKE_POST':
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        title: title,
        post: post,
        timePosted: timePosted,
        likes: likes,
        dislikes: dislikes + 1,
        id: id
      }
    });
    return newState;

  default:
    return state;
  }
};
