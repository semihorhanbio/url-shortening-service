"use client";

import { useState } from "react";

export default function LinksCreateForm() {
  const [results, setResults] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);
    const endpoint = "/api/links/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    setResults(result);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          defaultValue="https://github.com/semihorhanbio/url-shortening-service"
          name="url"
          placeholder="Your url to shorten"
        />
        <button type="submit">Shorten</button>
      </form>
      {results && JSON.stringify(results)}
    </>
  );
}
