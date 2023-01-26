import React from 'react'
import { useState } from 'react';
import SectionSubForm from './SectionSubForm';

const SectionForm = (props) => {
    const details = props.details
    const setDetails = props.setDetails
    const title = props.title
    
    if (props.title == "education") {

    }
    
    const [count, setcount] = useState(details.education.length)
    
    let l = []
    for (let i = 0; i < details.education.length; i++) {
        l.push(<SectionSubForm title="education" id={i} details={props.details} setDetails={props.setDetails}></SectionSubForm>)
    }
    const [listElem, setListElem] = React.useState(l);
    let word = props.title
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
        setListElem(listElem.concat(<SectionSubForm title="education" id={count} details={details} setDetails={setDetails}></SectionSubForm>));
        setcount(count => count + 1)
    }
    return (
        <>
            {listElem}
            <div className='border pt-2 pb-2 rounded mt-3 bg-white' onClick={clickHandler}>+ Add new {word}</div>
        </>

    )
}

export default SectionForm