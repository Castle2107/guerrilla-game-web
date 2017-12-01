import React from 'react';

const Header = (props) => {
    return (
        <h1 className="display-4 text-center">{props.username}</h1>
    );
}

export default Header;