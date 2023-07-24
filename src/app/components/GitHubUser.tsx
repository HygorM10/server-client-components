export interface GithubUserProps {
  userName: string
}

export default async function GitHubUser({ userName }: GithubUserProps) {
  const response = await fetch(`https://api.github.com/users/${userName}`)
  const user = await response.json()

  await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <p>{JSON.stringify(user)}</p>
  )
}
