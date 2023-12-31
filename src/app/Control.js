"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const params = useParams();
  const router = useRouter();

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
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(
                  `${process.env.NEXT_PUBLIC_API_URL}/${params.id}.json`,
                  options
                )
                  .then((res) => res.json())
                  .then((result) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
