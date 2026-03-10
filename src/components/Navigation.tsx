'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'

function ChevronIcon({
  isOpen,
  className,
}: {
  isOpen: boolean
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={clsx(
        'h-4 w-4 shrink-0 stroke-slate-400 transition-transform duration-200',
        isOpen && 'rotate-90',
        className,
      )}
    >
      <path
        d="M6 4l4 4-4 4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavigationSection({
  section,
  pathname,
  onLinkClick,
}: {
  section: (typeof navigation)[number]
  pathname: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  let isActive = section.links.some((link) => link.href === pathname)
  let [isOpen, setIsOpen] = useState(isActive)

  return (
    <li>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between font-display font-medium text-slate-900 dark:text-white"
      >
        {section.title}
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <ul
          role="list"
          className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
        >
          {section.links.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={clsx(
                  'block w-full pl-3.5 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                  link.href === pathname
                    ? 'font-semibold text-sky-500 before:bg-sky-500'
                    : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  let pathname = usePathname()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <NavigationSection
            key={section.title}
            section={section}
            pathname={pathname}
            onLinkClick={onLinkClick}
          />
        ))}
      </ul>
    </nav>
  )
}
