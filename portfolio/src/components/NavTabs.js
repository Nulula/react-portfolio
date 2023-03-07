import React from 'react';
import { NavLink } from 'react-router-dom';
import Palette from './Palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { faPersonShelter } from '@fortawesome/free-solid-svg-icons'
import { faPersonRays } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'

const styles = {
    navigation: {
        backgroundColor: `${Palette.light.peach}`,
      }
}

function NavTabs() {
    return (
        <ul className="navbar navbar-expand mb-5 fixed-bottom list-unstyled pl-5" style={styles.navigation}>
            <li className="nav-item">
                <NavLink 
                to="/#"
                end
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
                >
                <FontAwesomeIcon icon={faPersonShelter} size='2xl' color={Palette.dark.desertSand} />
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                to="about"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
                >
                <FontAwesomeIcon icon={faPersonRays} size='2xl' color={Palette.dark.desertSand} />
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                to="projects"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
                >
                <FontAwesomeIcon icon={faPersonDigging} size='2xl' color={Palette.dark.desertSand} />
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                to="contact"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
                >
                <FontAwesomeIcon icon={faPersonChalkboard} size='2xl' color={Palette.dark.desertSand} />
                </NavLink>
            </li>
            
        </ul>
    )
};

export default NavTabs;
