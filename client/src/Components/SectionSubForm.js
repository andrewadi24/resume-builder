import React from 'react'
import { useState } from 'react'

const SectionSubForm = (props) => {
    const details = props.details;
    const setDetails = props.setDetails;
    const title = props.title
    let id = props.id

    let column1 = "Job Title"
    let column2 = "Employer"
    let first_input;
    let second_input;
    let third_input;
    let fourth_input;
    let fifth_input;
    let sixth_input;
    let skill_input;

    if (props.title === "experience") {
        first_input = details.experience[id].job_title
        second_input = details.experience[id].employer
        third_input = details.experience[id].startDate
        fourth_input = details.experience[id].endDate
        fifth_input = details.experience[id].city
        sixth_input = details.experience[id].description
    }
    if (props.title === "education") {
        column1 = "Degree Name"
        column2 = "School"
        first_input = details.education[id].degree_name
        second_input = details.education[id].school
        third_input = details.education[id].startDate
        fourth_input = details.education[id].endDate
        fifth_input = details.education[id].city
        sixth_input = details.education[id].description
    }
    if(props.title === "skills") skill_input = details.skills[id]
    const [skills, setSkills] = useState(skill_input)
    const [first, setfirst] = useState(first_input)
    const [second, setSecond] = useState(second_input)
    const [third, setThird] = useState(third_input)
    const [fourth, setFourth] = useState(fourth_input)
    const [fifth, setFifth] = useState(fifth_input)
    const [sixth, setSixth] = useState(sixth_input)
    function firstHandler(e) {
        let new_detail = { ...details }
        if (title === "education") {
            new_detail.education[id].degree_name = e.target.value
        }
        else if (title === "experience") {
            new_detail.experience[id].job_title = e.target.value
        }
        setDetails(new_detail)
        setfirst(e.target.value)
    }
    function secondHandler(e) {
        let new_detail = { ...details }
        if (title === "education") {
            new_detail.education[id].school = e.target.value
        }
        else if (title === "experience") {
            new_detail.experience[id].employer = e.target.value
        }
        setDetails(new_detail)
        setSecond(e.target.value)
    }

    function thirdHandler(e) {
        let new_detail = { ...details }
        if (title === "education") {
            new_detail.education[id].startDate = e.target.value
        }
        else if (title === "experience") {
            new_detail.experience[id].startDate = e.target.value
        }
        setDetails(new_detail)
        setThird(e.target.value)
    }
    function fourthHandler(e) {
        let new_detail = { ...details }
        if (title === "education") {
            new_detail.education[id].endDate = e.target.value
        }
        else if (title === "experience") {
            new_detail.experience[id].endDate = e.target.value
        }
        setDetails(new_detail)
        setFourth(e.target.value)
    }
    function fifthHandler(e) {
        let new_detail = { ...details }
        if (title === "education") {
            new_detail.education[id].city = e.target.value
        }
        else if (title === "experience") {
            new_detail.experience[id].city = e.target.value
        }
        setDetails(new_detail)
        setFifth(e.target.value)
    }
    function sixthHandler(e) {
        let new_detail = { ...details }
        if (title === "education") {
            new_detail.education[id].description = e.target.value
        }
        else if (title === "experience") {
            new_detail.experience[id].description = e.target.value
        }
        setDetails(new_detail)
        setSixth(e.target.value)
    }
    function skillsHandler(e) {
        let new_detail = { ...details }
        new_detail.skills[id] = e.target.value
        setDetails(new_detail)
        setSkills(e.target.value)
    }
    if (title === "skills") {
        return (
            <div className="form-group mt-3">
                <input type="text" value={skills} className="form-control" placeholder={"Enter a skill"} onChange={skillsHandler} />
            </div>
        )
    }
    return (
        <div className='container mt-3 border rounded pt-3 pb-3 bg-white'>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{column1}</label>
                        <input type="text" value={first} className="form-control" placeholder={"Enter " + column1} onChange={firstHandler} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">{column2}</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={second} onChange={secondHandler} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Start Date:</label>
                        <input type="month" id="start" value={third} className="form-control" name="start" min="2000-03" onChange={thirdHandler} />
                    </div>
                </div>
                <div className='col-3'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">End Date: </label>
                        <input type="month" id="start" className="form-control" name="start" min="2000-03" value={fourth} onChange={fourthHandler} />
                        <br></br>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">City: </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={fifth} onChange={fifthHandler} />
                    </div>
                </div>
                <div className='col-12'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Description: </label>
                        <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="" value={sixth} onChange={sixthHandler}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSubForm