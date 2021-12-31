import PostsList from './postsList';
import Post from './post';
import { useParams } from 'react-router-dom';
// import query from 'query-string';
// import _ from 'lodash';

const Posts = () => { // location
  const params = useParams();
  const posts = [
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'},
  ];

  const { postId } = params;
  // const search = query.parse(location.search);

  // const cropPosts = search
  //   ? _(posts).slice(0).take(search.count).value()
  //   : posts;

  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
