import Link from "next/link";
import { Name } from "../components/Name/Name";

const Page = () => (
  <div>
    Welcome, <Name />
    <br />
    <br />
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
    <div>
      <Link href="/list">
        <a>List</a>
      </Link>
    </div>
  </div>
);

export default Page;
