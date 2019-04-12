import React from 'react';

const MenuTree = (props) => {
    const icon = props.icon || props.iconCustom;

    return (
        <li className='treeview'>
            <a href="/#/">
                {icon ? <i className={`fa ${props.icon || props.iconCustom}`} aria-hidden="true" /> : ''} <span>{props.label}</span>
                <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul className='treeview-menu'>
                { props.children}
            </ul>
        </li>        
    )
}

export default MenuTree;
