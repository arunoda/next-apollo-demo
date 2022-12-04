import Link from "next/link";

const Page = () => (
  <>
    <h5 className="sub-heading">
      Looking for Users Address?
      <Link href="/users">
        <a>Click Me!!</a>
      </Link>
    </h5>
  </>
);

export default Page;
