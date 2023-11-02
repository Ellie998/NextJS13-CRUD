import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "NextJS ver 13 CRUD practice",
  description: "blog app made by Next.jS 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/post/travel">travel</Link>
          </li>
          <li>
            <Link href="/post/place">place</Link>
          </li>
          <li>
            <Link href="/post/study">study</Link>
          </li>
        </ol>
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
