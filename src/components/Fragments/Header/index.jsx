import Logo from "../../Elements/Logo"
import Nav from "../Navbar"

const HeaderPage = () => {
  return (
    <header className="bg-dark-background sticky top-0 flex-wrap
    z-[20] mx-auto flex w-full items-center 
    justify-between border-b border-gray-500 p-8">
      <Logo></Logo>
      <Nav></Nav>
    </header>
  )   
}

export default HeaderPage