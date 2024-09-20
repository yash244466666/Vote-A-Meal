import Link from "next/link";

export default function Home() {
  return (
    <div className="">

      <Link href="/employee/get">
        All Employee List
      </Link>
      <br />
      <Link href="/employee/add">
        Create Employee
      </Link>


    </div>
  );
}
