import "./Navbar.css";
import Logo from "@/components/Logo";

function Navbar() {
  return (
    <nav>
      <Logo />

      <ul>
        <li>Sobre</li>
        <li>Serviços</li>
        <li>Portfólio</li>
        <li>Contato</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}

export default Navbar