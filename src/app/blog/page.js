import getDomain from "@/app/lib/getDomain";
import BlogCard from "./card";
import { helloWorld } from "@/app/lib/db";

async function getData() {
  const domain = getDomain();
  const endpoint = `${domain}/api/posts`;
  //const res = await fetch(endpoint, { next: { revalidate: 10 } });
  const res = await fetch(endpoint, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  if (res.headers.get("content-type") !== "application/json") {
    return { items: [] };
  }

  return res.json();
}

export default async function BlogPage() {
  const data = await getData();
  const dbHello = await helloWorld();
  console.log("dbHello", dbHello);
  const items = data && data.items ? [...data.items] : [];
  console.log(items);
  return (
    <main>
      <h1>Blog Page</h1>
      <p>DB reponse: {JSON.stringify(dbHello)}</p>
      <ul>
        {items &&
          items.map((item, id) => (
            <BlogCard title={item.title} key={`post-${id}`} />
          ))}
      </ul>
    </main>
  );
}

export const runtime = "edge";
export const preferredRegion = "fra1";
