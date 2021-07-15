import User from '../../components/User';

function index({ users }) {
  return (
    <div>
      <h2>All Users</h2>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data || [],
    },
  };
};

export default index;
