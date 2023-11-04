import Link from "next/link";
import "./globals.css";
import Control from "./Control";

export const metadata = {
  title: "NextJS ver 13 CRUD practice",
  description: "blog app made by Next.jS 13",
};

export default async function RootLayout({ children }) {
  const result = await fetch(
    `https://react-router-practice-19b77-default-rtdb.firebaseio.com/topics.json`,
    { cache: "no-store" }
  );
  const topics = await result.json();

  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>

        <ol>
          {Object.keys(topics)?.map((name, i) => (
            <li key={i}>
              <Link href={`/read/${name}`}>
                {topics[name] ? topics[name].title : null}
              </Link>
            </li>
          ))}
        </ol>

        {children}
        <Control />
      </body>
    </html>
  );
}
