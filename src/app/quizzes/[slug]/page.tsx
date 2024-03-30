import { type Metadata } from 'next'
import { config } from '~/config'
import { quizMap } from '~/lib/quiz-map'
import { notFound } from 'next/navigation'

type Props = {
  params: { id: string; slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const slug = params.slug || ''
  const title = config.seo.quizPages[slug]?.title || 'Not Found'
  const description = config.seo.quizPages[slug]?.description
  return {
    title: `${title} | MindsBytes`,
    description: description,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const isQuizExists = quizMap.find((quiz) => quiz.slug === params.slug)
  if (isQuizExists) {
    return <div>Quiz: {params.slug}</div>
  }
  return notFound()
}
