"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.body.value;
        const id = Math.floor(Math.random() * 10000);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, id }),
        };
        fetch(`${process.env.NEXT_PUBLIC_API_URL}.json`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            router.refresh();
            router.push(`/read/${result.name}`);
          });
      }}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
