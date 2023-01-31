import React from 'react'
import { useState } from 'react';
import SectionSubForm from './SectionSubForm';

const SectionForm = (props) => {
    const details = props.details
    const setDetails = props.setDetails
    const title = props.title

    let l = []
    if (title === "education") {
        for (let i = 0; i < details.education.length; i++) {
            l.push(<SectionSubForm title="education" id={i} details={props.details} setDetails={props.setDetails}></SectionSubForm>)
        }
    }
    if (title === "experience") {
        for (let i = 0; i < details.experience.length; i++) {
            l.push(<SectionSubForm title="experience" id={i} details={props.details} setDetails={props.setDetails}></SectionSubForm>)
        }
    }
    if (title === "skills") {
        for (let i = 0; i < details.skills.length; i++) {
            l.push(<SectionSubForm title="skills" id={i} details={props.details} setDetails={props.setDetails}></SectionSubForm>)
        }
    }
    let word = props.title

    const [educationCount, setEducationCount] = useState(details.education.length)
    const [educationElem, setEducationElem] = React.useState(l);
    function clickHandler(e) {
        let new_detail = { ...details }
        new_detail.education.push(
            {
                degree_name: "",
                school: "",
                startDate: "",
                endDate: "",

            }
        )
        setDetails(new_detail)
        setEducationElem([...educationElem, <SectionSubForm title="education" id={educationCount} details={details} setDetails={setDetails}></SectionSubForm>]);
        setEducationCount(educationCount => educationCount + 1)
    }
    const [experienceCount, setExperienceCount] = useState(details.experience.length)
    const [experienceElement, setExperienceElement] = React.useState(l);
    function experienceHandler(e) {
        let new_detail = { ...details }
        new_detail.experience.push(
            {
                job_title: "",
                employer: "",
                startDate: "",
                endDate: "",
            }
        )
        setDetails(new_detail)
        setExperienceElement([...experienceElement, <SectionSubForm title="experience" id={experienceCount} details={details} setDetails={setDetails}></SectionSubForm>]);
        setExperienceCount(experienceCount => experienceCount + 1)
    }
    const [skillsElement, setSkillsElement] = useState(l);
    const [skillsCount, setSkillsCount] = useState(details.skills.length);
    function skillsHandler(e) {
        let new_detail = { ...details }
        new_detail.skills.push("hi")
        setDetails(new_detail)
        setSkillsElement([...skillsElement, <SectionSubForm title="skills" id={skillsCount} details={details} setDetails={setDetails}></SectionSubForm>]);
        setSkillsCount(skillsCount => skillsCount + 1)
    }
    if (title === "education") {
        return (
            <>
                {educationElem}
                <div className='border pt-2 pb-2 rounded mt-3 bg-white' onClick={clickHandler}>+ Add new {word}</div>
            </>

        )
    }
    if (title === "experience") {
        return (
            <>
                {experienceElement}
                <div className='border pt-2 pb-2 rounded mt-3 bg-white' onClick={experienceHandler}>+ Add new {word}</div>
            </>)
    }
    if (title === "skills") {
        return (
            <>
                {skillsElement}
                <div className='border pt-2 pb-2 rounded mt-3 bg-white' onClick={skillsHandler}>+ Add new {word}</div>
            </>)
    }
    return <></>
}

export default SectionForm