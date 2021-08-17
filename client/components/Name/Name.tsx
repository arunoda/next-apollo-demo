import { useQuery } from "@apollo/client";
import { getName } from "../../apollo/queries/getName";

export const Name = () => {
  const { data } = useQuery(getName);
  return <span>{data?.loading ? ".." : data?.name}</span>;
};
