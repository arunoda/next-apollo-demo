import { useQuery } from "@apollo/client";
import { getName } from "../apollo/queries/getName";
import { getDetails } from "../apollo/queries/getDetails";

export const Name = () => {
  const { loading, error, data } = useQuery(getDetails);
  console.log({ data });
  return <span>{data?.loading ? ".." : data?.name}</span>;
};
