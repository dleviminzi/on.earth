import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

// navbar links 
export const nav = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Posts",
    path: "/posts"
  },
  {
    name: "Pictures",
    path: "/pics"
  }
]

export default function Navbar() {
  const router = useRouter();
  const inactiveLinkClass = "text-center text-limed-spruce-500 hover:text-coral-500 text-2xl";
  const activeLinkClass = "text-center text-coral-500 text-2xl";
  return (
    <div className="">
      {/* title */}
      <div className="">
      </div>

      {/* navbar */}
      <div className="">
        <nav>
          <div className="w-2/5">
          <Link href="/"><a><h1 className="text-6xl font-bold content-center text-limed-spruce-500 hover:text-coral-500">Daniel on Earth</h1></a></Link>
            <ul className="flex">
              {nav.map((link, i) => {
                return (
                    <li key={i} className="mr-3 w-1/5">
                    <Link href={link.path}>
                      <a className={router.pathname == link.path ? activeLinkClass : inactiveLinkClass}>{link.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

