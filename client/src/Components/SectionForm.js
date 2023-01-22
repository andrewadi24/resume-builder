import React from 'react'
import SectionSubForm from './SectionSubForm';

const SectionForm = () => {
    const [count, setCount] = React.useState(0)
    const [listElem, setListElem] = React.useState([]);
    let title = "Employment History";
    let description = "";
    let word = "employment"
    function clickHandler(e){
        e.preventDefault();
        setListElem(listElem.concat(<SectionSubForm></SectionSubForm>));
    }
    return (
        <div className='container'>
            <h2>{title}</h2>
            {listElem}
            <div className='border pt-2 pb-2 rounded mt-3 bg-white' onClick={clickHandler}>+ Add new {word}</div>
        </div>
    )
}

export default SectionForm