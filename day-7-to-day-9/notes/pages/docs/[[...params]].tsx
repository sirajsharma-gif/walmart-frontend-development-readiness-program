import { NextPage } from "next";
import { useRouter } from "next/router";

const Docs: NextPage = () => {
  const router = useRouter();
  const params = router.query.params;

  if (params?.length === 2) {
    return (
      <h1>
        Docs {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params?.length === 1) {
    return <h1>Docs {params[0]}</h1>;
  }

  return <h1>Docs homepage</h1>;
};

export default Docs;
