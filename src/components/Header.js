import React from 'react';

function Header({ currentPage, handlePageChange}) {
    
    return (
        <div>
            <h1> Jenny Wang </h1>
            <p> A sample portfolio. More updates coming up!</p>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                    href="#aboutme"
                    onClick={() => handlePageChange('AboutMe')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                    >
                    About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Portfolilo' ? 'nav-link active' : 'nav-link'}
                    >
                    Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Header;