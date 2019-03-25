const initState = {
  posts: [
    { id: '1', title: 'Get Ready', body: 'Quas omnis harum nesciunt doloremque ratione sit, repellat rerum velit soluta iure suscipit quae aspernatur'},
    { id: '2', title: 'Its About Time', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit., minima iste consequuntur facere debitis doloribus voluptatibus iusto ipsa'},
    { id: '3', title: 'Buy me a Ride', body: 'tenetur itaque nostrum nisi.Laborum voluptatem sed quibusdam accusamus nam culpa est modi reprehenderit, rerum tenetur esse vel.'}
  ]
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
    
  return state;
}

export default rootReducer;



 