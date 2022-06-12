
import '../styles/Home.module.css'
import Navbar from './navbar';

interface Posts {
  children: JSX.Element | JSX.Element[];
}

export default function Posts({ children }: Posts) {
  return (
    <div className='bg-beige-300 w-screen h-screen '>
      <div className='container mx-auto md px-10 py-3'>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  )
}