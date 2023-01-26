import React from 'react'
import { Link } from 'react-router-dom'
import SectionForm from './SectionForm'
import SectionSubForm from './SectionSubForm'
const Education = (props) => {
    const details = props.details
    const setDetails = props.setdetails
    return (
        <div className='container bg-light rounded'>
            <h2>Education</h2>
            <SectionForm title = "education" details = {details} setdetails = {setDetails}></SectionForm>
            <div className='d-flex justify-content-between mt-2 mb-2'>
                <Link to="/summary"><div className='btn btn-danger btn-large'>Previous</div></Link>
                <Link to="/result"><div className='btn btn-primary btn-large'> Next</div></Link>
            </div>
        </div>
    )
}

export default Education