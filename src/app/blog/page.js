import getDomain from "@/app/lib/getDomain";

async function getData() {
  const domain = getDomain();
  const endpoint = `${domain}/api/posts`;
  const res = await fetch(endpoint, { next: { revalidate: 10 } });

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
  const items = data && data.items ? [...data.items] : [];
  console.log(items);
  return (
    <main>
      <h1>Blog Page</h1>
      <ul>
        {items &&
          items.map((item, id) => <li key={`post-${id}`}>{item.title}</li>)}
      </ul>
    </main>
  );
}
