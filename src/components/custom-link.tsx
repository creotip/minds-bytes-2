import { type ReactNode, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '~/components/ui/dialog'
import { isQuizActiveAtom } from '~/config/store'
import { useAtomValue } from 'jotai'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

interface CustomLinkProps {
  href: string
  isSidebar?: boolean
  className: string
  children: ReactNode
}
export const CustomLink = ({ href, isSidebar = false, className, children }: CustomLinkProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isQuizActive = useAtomValue(isQuizActiveAtom)
  const pathname = usePathname()
  const isActiveLink = pathname.startsWith(href)
  const router = useRouter()

  const handleClick = async (e: { preventDefault: () => void }) => {
    if (isQuizActive) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  const handleModalClose = () => {
    setIsOpen(false)
  }

  const handleModalExit = () => {
    router.push(href)
    setIsOpen(false)
  }

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={cn(
          className,
          isActiveLink && isSidebar ? 'text-purple-300' : 'text-inherit',
          'transition-colors duration-200 hover:text-purple-300',
        )}
      >
        {children}
      </a>
      <Dialog open={isOpen} onOpenChange={handleModalClose}>
        <DialogContent>
          <DialogHeader className="py-6">
            You have an active quiz. <br /> Are you sure you want to leave?
          </DialogHeader>

          <DialogFooter>
            <Button
              onClick={handleModalExit}
              className="mr-3 rounded-lg bg-purple-500 px-3 py-2 text-white hover:bg-purple-600"
            >
              Exit Quiz
            </Button>
            <Button
              onClick={handleModalClose}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 hover:bg-gray-100"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
