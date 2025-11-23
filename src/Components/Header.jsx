import logo from '../assets/f1logoheader.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Formula 1 Logo" />
            <h1>Formula 1 Fan Page</h1>
        </header>
    );
}

export default Header;