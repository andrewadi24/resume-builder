import React from 'react'
import { useState, useEffect } from 'react'

const SectionSubForm = (props) => {
    const details = props.details;
    const setDetails = props.setDetails;
    let id = props.id

    let column1 = "Job Title"
    let column2 = "Employer"
    let first_input;
    if (props.title == "experience") {
        first_input = details.experience[id].job_title
    }
    if (props.title == "education") {
        column1 = "Degree Name"
        column2 = "School"
        first_input = details.education[id].degree_name
    }

    const [first, setfirst] = useState(first_input)
    function firstHandler(e) {
        let new_detail = { ...details }
        new_detail.education[id].degree_name = e.target.value
        setDetails(new_detail)
        setfirst(e.target.value)
    }
    
    return (
        <div className='container mt-3 border rounded pt-3 pb-3 bg-white'>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">{column1}</label>
                        <input type="text" value={first} class="form-control" placeholder={"Enter " + column1} onChange={firstHandler} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">{column2}</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Start Date:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className='col-3'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">End Date: </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">City: </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className='col-12'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Description: </label>
                        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSubForm