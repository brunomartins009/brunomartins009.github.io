import '../App.css';
import Curriculum from '../assets/curriculum.pdf'

function Menu () {
    return (
        <div>
            <a href="https://brunomartins009.github.io/PersonalSite/" target='_blank'>
                <button className='button'>Personal site</button>
            </a>
            <br />
            <a href="/courses">
                <button className='button'>Courses</button>
            </a>
            <br />
            <a href="/projects">
                <button className='button'>Projects</button>
            </a>
            <br />
            <a href={Curriculum} target='_blank'>
            <button className='button'>Curriculum</button>
            </a>
        </div>
    )
}

export default Menu