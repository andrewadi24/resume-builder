import React from 'react'
import { Link } from 'react-router-dom'
const Summary = (props) => {
    const details = props.details
    const setDetails = props.setdetails
    function changeSummary(e) {
        let new_detail = {...details}
        new_detail.summary = e.target.value
        setDetails(new_detail)
    }
    return (
        <div className='container bg-light rounded'>
            <h2>Professional Summary</h2>
            <p>Please provide a quick overview, and introduction of your skills and achievements in 2-4 sentences.</p>
            <textarea class="form-control" id="exampleFormControlTextarea1" value = {details.summary}rows="8" onChange={changeSummary}></textarea>
            <div className='d-flex justify-content-between mt-2 mb-2'>
                <Link to="/personal_details"><div className='btn btn-danger btn-large'>Previous</div></Link>
                <Link to="/education"><div className='btn btn-primary btn-large'> Next</div></Link>
            </div>
        </div>
    )
}

export default Summary