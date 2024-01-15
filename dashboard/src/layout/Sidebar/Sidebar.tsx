import './Sidebar.css'

import {profileImages} from '../../utils/images'
import {navLinks} from  '../../data/data'

const Sidebar = () => {
    return (
        <div className={`sidebar`}>
            <div className="user-info">
                <div className="info-image img-fit cover">
                    <img src={profileImages.person_one} alt="profile picture"/>
                </div>
                <span className='info-name'>Alice-Doe</span>
            </div>
            <nav className='navigation'>
                <ul className='nav-list'>
                   {
                        navLinks.map((navLink)=>(
                            <li className='nav-item' key={navLink.id}>
                                <a href="#" className={`nav-link`}>
                                    <img src={navLink.image} className='nav-link-icon' alt={navLink.title}/>
                                    <span className='nav-link-text'>{navLink.title}</span>
                                </a>
                            </li>
                        ))
                   } 
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar