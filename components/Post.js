import Link from 'next/link';
function Post({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <p>{post.title}</p>
      </Link>
    </div>
  );
}

export default Post;
