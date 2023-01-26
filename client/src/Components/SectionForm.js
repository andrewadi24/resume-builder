import React from 'react'
import { useState } from 'react';
import SectionSubForm from './SectionSubForm';

const SectionForm = (props) => {
    const details = props.details
    const setDetails = props.setdetails
    const [count, setcount] = useState(0)
    const [listElem, setListElem] = React.useState([]);
    let word = props.title
    function clickHandler(e) {
        setListElem(listElem.concat(<SectionSubForm title="education" id={count} details={props.details} setDetails={props.setDetails}></SectionSubForm>));
        let new_detail = { ...details }
        new_detail.education.push(
            {
                degree_name: "bachelor of science",
                school: "University of Sydney",
            }
        )
        // const education_details = props.details.education.map(detail => {

        //     return (<>
        //         {detail.degree_name}
        //         {detail.school}
        //     </>)

        // })
        // new_detail.educationElement = education_details
        setDetails(new_detail)
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