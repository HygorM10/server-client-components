import GitHubUser from "./components/GitHubUser";

export default async function Page() {
  return (
    <>
      <GitHubUser userName='jamesknelson' />
      <GitHubUser userName='hygorm10' />
    </>
  )
}