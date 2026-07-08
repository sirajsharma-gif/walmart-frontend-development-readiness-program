import { GetStaticPropsResult, NextPage } from "next";

type User = {
  id: 1;
  name: "Leanne Graham";
  username: "Bret";
  email: "Sincere@april.biz";
};

type UserPageProps = {
  users: User[];
};

const User: NextPage<UserPageProps> = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<UserPageProps>
> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await response.json()) as User[];

  return {
    props: {
      users: data,
    },
  };
}
