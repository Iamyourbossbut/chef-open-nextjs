'use client';

const ChefLogo = '/chef.png'
const LogoText = "Chef Open"

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo-div">
                <img src={ChefLogo} alt="Chef Claude icon" className="logo" />
                <span className="logo-text">{LogoText}</span>
            </div>
        </header>
    )
}