import React from 'react'
import SectionForm from './SectionForm'
import { Link } from 'react-router-dom'
const Skills = (props) => {
    const details = props.details
    const setDetails = props.setdetails
    return (
        <div className='container bg-light rounded'>
            <h2>Skills</h2>
            <SectionForm title="skills" details={details} setDetails={setDetails}></SectionForm>
            <div className='d-flex justify-content-between mt-2 mb-2'>
                <Link to="/experience"><div className='btn btn-danger btn-large'>Previous</div></Link>
                <Link to="/result"><div className='btn btn-primary btn-large'> Next</div></Link>
            </div>
        </div>
    )
}

export default Skills