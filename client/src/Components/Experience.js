import React from 'react'
import SectionForm from './SectionForm'
import { Link } from 'react-router-dom'
const Experience = (props) => {
    const details = props.details
    const setDetails = props.setdetails
    return (
        <div className='container bg-light rounded'>
            <h2>Experience</h2>
            <SectionForm title="experience" details={details} setDetails={setDetails}></SectionForm>
            <div className='d-flex justify-content-between mt-2 mb-2'>
                <Link to="/education"><div className='btn btn-danger btn-large'>Previous</div></Link>
                <Link to="/result"><div className='btn btn-primary btn-large'> Next</div></Link>
            </div>
        </div>
    )
}

export default Experience