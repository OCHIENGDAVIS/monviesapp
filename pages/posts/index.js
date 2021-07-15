import Post from '../../components/Post';

function index({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
      <hr />
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data || [],
    },
  };
};

export default index;
