export interface QuizOption {
	answer: string
	rightAnswer: boolean
	answerIsCode?: boolean
}

export interface SingleQuiz {
	question: string
	codeBlock?: string
	language: string
	level: string
	options: QuizOption[]
	category: string | string[]
}

interface FilteredQuestionsChain extends Array<SingleQuiz> {
	filterByCategory(category: string | string[]): FilteredQuestionsChain
	filterByLevel(levels: string[]): FilteredQuestionsChain
	shuffle(): FilteredQuestionsChain
	getItemsByNumber(numberOfItems: number): FilteredQuestionsChain
}

export const shuffleArray = <T>(array: T[]): T[] => array.sort(() => Math.random() - 0.5)

export const getFilteredQuestions = (questions: SingleQuiz[]): FilteredQuestionsChain => {
	const filteredQuestions = [...questions]

	const chainableMethods = {
		filterByCategory(category: string | string[]): FilteredQuestionsChain {
			return getFilteredQuestions(
				filteredQuestions.filter((question) =>
					Array.isArray(question.category)
						? question.category.some((cat) => (category as string[]).includes(cat))
						: (category as string[]).includes(question.category)
				)
			)
		},
		filterByLevel(levels: string[]): FilteredQuestionsChain {
			return getFilteredQuestions(
				filteredQuestions.filter((question) => levels.includes(question.level))
			)
		},
		shuffle(): FilteredQuestionsChain {
			return getFilteredQuestions(shuffleArray(filteredQuestions))
		},
		getItemsByNumber(numberOfItems: number): FilteredQuestionsChain {
			return getFilteredQuestions(filteredQuestions.slice(0, numberOfItems))
		},
	}

	return Object.assign(filteredQuestions, chainableMethods)
}
