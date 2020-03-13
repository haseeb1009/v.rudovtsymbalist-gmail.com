import React from 'react'
import {Link} from 'react-router-dom'
class NavBar extends React.Component {



    render() {
        return (
            <nav>
                <h2>logo</h2>
                <ul>
                    <Link to='/training'>
                    <li>Student</li>
                    </Link>
                    <Link to='/business'>
                    <li>Business</li>
                    </Link>
                    <Link to='/research'>
                    <li>Researcher</li>
                    </Link>
                </ul>
            </nav>
        )

    }
}

export default NavBar;