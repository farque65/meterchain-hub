import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <span>
            <a href={siteMetadata.home}>Meter</a>
          </span>
          <span>
            <a href={siteMetadata.docs}>Docs</a>
          </span>
          <span>
            <a href={siteMetadata.explorer}>Explorer</a>
          </span>
          <span>
            <a href={siteMetadata.whitepaper}>Whitepaper</a>
          </span>
          <span>
            <a href={siteMetadata.feedback}>Feedback</a>
          </span>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/farque65/meterchain-hub">Meter Chain Hub</Link>
        </div>
      </div>
    </footer>
  )
}
