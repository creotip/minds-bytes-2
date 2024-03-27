'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export const Content = (
	props: React.JSX.IntrinsicAttributes &
		React.ClassAttributes<HTMLDivElement> &
		React.HTMLAttributes<HTMLDivElement>
) => {
	const pathname = usePathname()

	const borderClass = pathname === '/' ? 'border-none' : 'border border-gray-700'

	return <div className={`content min-h-[325px] rounded-lg ${borderClass} `} {...props} />
}
