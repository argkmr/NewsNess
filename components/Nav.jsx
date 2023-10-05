import Link from "next/link";
import Image from "next/image";


const Nav = () => {
  return (
    <nav className="flex-between w-full mt-10 mb-8 pt-3 footer">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/icons/logo.png" 
          alt="NewsNess logo" 
          width={60} 
          height={60} 
          className="object-contain" 
          style={{borderRadius:"10px"}}/>
        <p className="logo_text mt-3">NewsNess</p>
      </Link>
      <ul className="flex-center gap-10">
        <Link href="/" type="button">
          <li className="underline hover:underline-offset-8 ">
            Home
          </li>
        </Link>
        <Link href="#sectionAboutUs" type="button">
          <li className="underline hover:underline-offset-8">
            About Us
            </li>
          </Link>
        <Link href="#sectionContactUs" type="button">
          <li className="underline hover:underline-offset-8">
            Contact Us
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;
