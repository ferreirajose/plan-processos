import React from 'react';

const MenuTree = (props) => {
    const icon = props.icon || props.iconCustom;

    return (
        <li className='treeview active'>
            <a href={`#`}>
                {icon ? <i className={`fa ${props.icon || props.iconCustom}`} aria-hidden="true" /> : ''} <span>{props.label}</span>
            </a>
            <ul className='treeview-menu'>
                {props.children}
            </ul>
        </li>
    )
}

export default MenuTree;
