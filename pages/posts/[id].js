function postDetail({ post }) {
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
};
export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  const paths = posts.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });
  return {
    fallback: 'blocking',
    paths: paths || [],
  };
};

export default postDetail;
