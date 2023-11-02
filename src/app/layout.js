import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "NextJS ver 13 CRUD practice",
  description: "blog app made by Next.jS 13",
};

export default async function RootLayout({ children }) {
  const result = await fetch(
    `https://react-router-practice-19b77-default-rtdb.firebaseio.com/topics.json`
  );
  const topics = await result.json();

  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics?.map((topic) =>
            topic ? (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            ) : null
          )}
        </ol>
        {/* <ol>
          <li>
            <Link href="/post/travel">travel</Link>
          </li>
          <li>
            <Link href="/post/place">place</Link>
          </li>
          <li>
            <Link href="/post/study">study</Link>
          </li>
        </ol> */}
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
