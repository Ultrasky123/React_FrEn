import { Link } from "react-router-dom"
const Logo = () => {
 return (
    <div className="logo h-16 w-16">
        <Link to="/"><img src="/images/logo_stas.png" alt="logo" /></Link>
    </div>
 )   
}

export default Logo