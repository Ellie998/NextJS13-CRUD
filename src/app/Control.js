"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control() {
  const params = useParams();
  console.log(params.id);
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {params.id ? (
        <>
          <li>
            <Link href={`/update/${params.id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </>
      ) : null}
    </ul>
  );
}