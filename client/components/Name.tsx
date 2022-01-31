import { useQuery } from "@apollo/client";
import { USER_NAME_QUERY } from "../utils/shared";

export default function NameComponent() {
  const { data } = useQuery(USER_NAME_QUERY);

  return <span>{data?.name}</span>;
}