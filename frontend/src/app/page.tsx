import Link from "next/link";

export default function Home() {
  return (
    <div className="">

      <Link href="/get-all-employee">
        All Employee List
      </Link>
      <br />
      <Link href="/add-new-employee">
        Create Employee
      </Link>


    </div>
  );
}
