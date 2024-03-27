'use client'

import { config } from '~/config'
import { quizMap, quizMapTechScience } from '~/lib/quiz-map'
import { CustomLink } from '~/components/custom-link'
import { cn } from '~/lib/utils'

const baseBoxStyle =
  'p-5 border border-slate-800 rounded-lg bg-gradient-to-bl from-gray-900 to-slate-950'

export function HomeContent() {
  return (
    <div className="home-content px-4">
      <h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Solve <span className="text-[hsl(280,100%,70%)]">Quizzes,</span> Excel
      </h1>

      <p className="mb-8 text-center text-gray-400">{config.seo.alternativeDescription}</p>

      <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className={baseBoxStyle}>
          <h2 className="mb-4 text-lg">No Registration Required</h2>
          <p className="text-gray-400">
            Start quizzing instantly without the need for registration.
          </p>
        </div>
        <div className={baseBoxStyle}>
          <h2 className="mb-4 text-lg">Wide Range of Quizzes</h2>
          <p className="text-gray-400">
            Explore an extensive collection of quizzes across various topics and interests.
          </p>
        </div>
        <div className={baseBoxStyle}>
          <h2 className="mb-4 text-lg">User-Friendly Interface</h2>
          <p className="text-gray-400">
            Enjoy a seamless and intuitive user interface that makes quiz-taking a breeze.
          </p>
        </div>
      </div>

      <h2 className="mb-8 text-center text-2xl">Programming languages and Frameworks quizzes</h2>
      <div className="mb-12 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {quizMap.map((quizMapItem, index) => (
          <CustomLink
            href={quizMapItem.path}
            key={index}
            className={cn('p-2hover:shadow-xl flex flex-col items-center', baseBoxStyle)}
          >
            <div className="mb-2 text-[40px]">{quizMapItem.icon}</div>
            <p className="text-xs text-gray-400">{quizMapItem.title}</p>
          </CustomLink>
        ))}
      </div>

      <h2 className="mb-8 text-center text-2xl">Tech, Math, and Science quizzes</h2>
      <div className="mb-12 grid grid-cols-4 gap-4 lg:grid-cols-8">
        {quizMapTechScience.map((quizMapItem, index) => (
          <CustomLink
            href={quizMapItem.path}
            key={index}
            className={`flex flex-col items-center p-2 ${baseBoxStyle} hover:shadow-xl`}
          >
            <div className="mb-2 text-5xl">{quizMapItem.icon}</div>
            <p className="text-xs text-gray-400">{quizMapItem.title}</p>
          </CustomLink>
        ))}
      </div>
    </div>
  )
}
