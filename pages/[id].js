import { useRouter } from 'next/router';

function article({ article }) {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="main">
      <h3>{article.title}</h3>
      <hr />
      <p>{article.body}</p>
      <style jsx>
        {`
          .main {
            padding-top: 50px;
          }
        `}
      </style>
    </div>
  );
}
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default article;
