import { CreatePost } from '~/app/_components/create-post'
import { getServerAuthSession } from '~/server/auth'
import { api } from '~/trpc/server'
import { config } from '~/config'
import { quizMap } from '~/lib/quiz-map'
import { CustomLink } from '~/components/custom-link'
import { HomeContent } from '~/components/home/home-content'

const baseBoxStyle =
  'p-5 border border-gray-700 rounded-lg bg-gradient-to-bl from-gray-900 to-gray-800'

export default async function Home() {
  const hello = await api.post.hello({ text: 'from tRPC' })
  const session = await getServerAuthSession()

  return <HomeContent />
}

async function CrudShowcase() {
  const session = await getServerAuthSession()
  if (!session?.user) return null

  const latestPost = await api.post.getLatest()

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  )
}
