'use client'
import { useState } from 'react'
import { MdCenterFocusWeak } from 'react-icons/md'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link'
import { QuizList } from '~/components/quiz/quiz-list'

export const Header = () => {
  const [isDrawerOpen, setDrawer] = useState(false)

  return (
    <div className="header dark flex justify-between px-4 py-6">
      <div className="logo relative text-2xl font-extrabold">
        <Link className="relative z-20 flex items-center gap-2.5 hover:opacity-70" href="/">
          <MdCenterFocusWeak size="24px" />
          <span>MindsBytes</span>
        </Link>
        <div
          className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#572eab] via-[#572eab] to-[#906fda] blur-[34px]"
          style={{ filter: 'blur(34px)' }}
        ></div>
      </div>

      <button
        aria-label="drawer menu"
        className="rounded-md border border-gray-700 bg-[radial-gradient(circle,_#222b3d_20%,_#141923)] p-2 hover:bg-transparent hover:shadow-xl"
        onClick={() => setDrawer(true)}
      >
        <HiOutlineMenuAlt3 className="text-20px" />
      </button>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 flex justify-end">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setDrawer(false)}></div>
          <div className="relative w-64 bg-white p-4">
            <button
              aria-label="Close"
              className="absolute right-0 top-0 m-2"
              onClick={() => setDrawer(false)}
            >
              &times;
            </button>
            <div className="mb-4 text-lg font-semibold">Choose your quiz</div>
            <div>
              <QuizList />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
