import { expect, describe, it } from 'vitest'
import { getFilteredQuestions, type SingleQuiz } from '~/lib/quiz-utils'

describe('getFilteredQuestions', () => {
	const questions: SingleQuiz[] = [
		{
			question: 'Question 1',
			category: 'Category A',
			level: 'Easy',
			options: [
				{ answer: 'Answer 1', rightAnswer: true },
				{ answer: 'Answer 2', rightAnswer: false },
			],
			language: 'JavaScript',
		},
		{
			question: 'Question 2',
			category: 'Category B',
			level: 'Medium',
			options: [
				{ answer: 'Answer 1', rightAnswer: true },
				{ answer: 'Answer 2', rightAnswer: false },
			],
			language: 'JavaScript',
		},
		{
			question: 'Question 3',
			category: 'Category A',
			level: 'Hard',
			options: [
				{ answer: 'Answer 1', rightAnswer: true },
				{ answer: 'Answer 2', rightAnswer: false },
			],
			language: 'JavaScript',
		},
		{
			question: 'Question 4',
			category: 'Category C',
			level: 'Easy',
			options: [
				{ answer: 'Answer 1', rightAnswer: true },
				{ answer: 'Answer 2', rightAnswer: false },
			],
			language: 'JavaScript',
		},
	]

	it('should filter questions by category', () => {
		const filtered = getFilteredQuestions(questions).filterByCategory('Category A')
		expect(filtered.length).toBe(2)
		expect(filtered).toBeDefined()
		if (filtered) {
			expect(filtered[0].question).toBe('Question 1')
			expect(filtered[1].question).toBe('Question 3')
		}
	})

	it('should filter questions by level', () => {
		const filtered = getFilteredQuestions(questions).filterByLevel(['Easy', 'Medium'])
		expect(filtered.length).toBe(2)
		expect(filtered[0].question).toBe('Question 1')
		expect(filtered[1].question).toBe('Question 2')
	})

	// Add more test cases as needed
})
