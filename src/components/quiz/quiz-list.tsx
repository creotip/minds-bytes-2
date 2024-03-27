'use client'
import { useState } from 'react'
// import { CustomLink } from '../custom-link'
import { BiChevronDown } from 'react-icons/bi'
import Link from 'next/link'

export const QuizList = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="text-sm font-semibold">
			<ul className="space-y-3">
				<li>
					{/* Accordion Item */}
					<div className="flex flex-col">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="flex w-full items-center justify-between p-0 text-left"
						>
							<span>Programming Languages</span>
							<BiChevronDown className={`${isOpen ? 'rotate-180 transform' : ''} h-5 w-5`} />
						</button>

						{/* Accordion Panel */}
						{isOpen && (
							<div className="pt-4">
								<ul className="space-y-3">
									<li>
										<Link href="/quizzes/javascript">Javascript</Link>
									</li>
									{/* Repeat for other items */}
								</ul>
							</div>
						)}
					</div>
				</li>
				<li>
					<Link href="/quizzes/math">Mathematics</Link>
				</li>
				{/* Repeat for other main list items */}
			</ul>
		</nav>
	)
}
