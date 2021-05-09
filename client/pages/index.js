import Link from 'next/link';


export default function Page(){
  return ( 
  <>
    Welcome,
    <br/><br/>
    <Link href="/userApp"><a>Users dashboard</a></Link>
  </>);
}
