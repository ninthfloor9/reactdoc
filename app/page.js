import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>This is React Practice!!</h2>
      <ul>
        <li>
          <Link href='/form'>form</Link>
        </li>
      </ul>
    </>
  );
}
