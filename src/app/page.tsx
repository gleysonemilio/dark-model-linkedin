import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-page-home">
      <span>
        click on the logo above or <Link href={'/linkedin'}>click here </Link> 😉
      </span>
    </div>
  )
}
