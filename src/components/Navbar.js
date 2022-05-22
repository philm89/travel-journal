import icon from '../images/icon.png'
import globe from '../images/globe.png'


function Navbar() {
    return (
        <nav className="nav">
            <img src={icon} alt={globe} className='nav--icon' />
            <h4 className="nav--title">My Travel Journal</h4>
        </nav>
    )
}

export default Navbar