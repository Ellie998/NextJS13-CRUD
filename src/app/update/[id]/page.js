"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const params = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    fetch(
      `https://react-router-practice-19b77-default-rtdb.firebaseio.com/topics/${params.id}.json`
    )
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.title);
        setDescription(result.description);
      });
  }, []);

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
        fetch(
          `https://react-router-practice-19b77-default-rtdb.firebaseio.com/topics.json`,
          options
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            router.refresh();
            router.push(`/read/${result.name}`);
          });
      }}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
