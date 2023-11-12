"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GithubProfile() {
  const myGithubRepoProfile =
    "https://api.github.com/repos/semihorhanbio/url-shortening-service";
  const { data, error, isLoading } = useSWR(myGithubRepoProfile, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1>Github Profile</h1>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
