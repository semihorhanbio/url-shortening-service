async function getData() {
  const endpoint = "http://localhost:3000/api/posts";
  const res = await fetch(endpoint);

  if (!res.ok) throw new Error("Failed to fetch data");

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
