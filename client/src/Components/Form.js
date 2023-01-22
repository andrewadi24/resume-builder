import React from 'react'
import PersonalDetails from './PersonalDetails'
import SectionForm from './SectionForm'
const Form = () => {
    return (
        <div>
            <form>
                <PersonalDetails></PersonalDetails>
                <SectionForm></SectionForm>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col-12'><button type="submit" class="btn btn-primary w-100">Generate pdf</button></div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Form