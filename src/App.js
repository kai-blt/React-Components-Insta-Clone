/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
// import  './App.css';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState(null);

  /*
    This function serves the purpose of increasing the number of likes by one, of the post with a given id.

    The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
    This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

    Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
    The callback passed into `map` performs the following logic:
      - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
      - otherwise just return the post object unchanged.
    */
  
  const likePost = postId => {  
    setPosts(posts.map(post => {
      //If the current post's id is the same as the id passed in from the function, then change the likes on the post. 
      if (post.id === postId) {
        return {...post, likes: post.likes + 1}
      };
      return post      
    }));
  };

  /*Filter function used on the search bar*/
  const filter = (event) => {
    //Set the search term to the users input
    if (searchTerm === null) {
      setSearchTerm(event.target.value);
    } else {
      setSearchTerm(event.target.value);
    }
    
    //Filter the posts to only display posts where the username equals the search term. Otherwise log an error
    posts.filter(post => {
      if (post.username === searchTerm){
        return setPosts([post]);
      }
      return console.log('No search results found!');
    });   
  }

  return (
    <div className='App'>
      <>
        <SearchBar filterPosts={filter}/>
        <Posts likePost={likePost} posts={posts} />
      </>      
      {/*Add SearchBar and Posts here to render them*/}
      {/*Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
