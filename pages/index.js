import Link from 'next/link';
function index({ articles }) {
  return (
    <div className="title">
      Make it or Make it
      <style jsx>
        {`
          .title {
            color: red;
            padding-top: 50px;
          }
        `}
      </style>
      {articles.map((article) => {
        return (
          <Link href={`/${article.id}`} key={article.id}>
            <div>
              {article.title}
              <hr />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default index;
