import React from 'react'
import { Link } from 'react-router-dom'
const Form = (props) => {
    const details = props.details
    const setDetails = props.setdetails
    function changeJobTitle(e) {
        let new_detail = {...details}
        new_detail.job_title = e.target.value
        setDetails(new_detail)
    }
    function changeFirstName(e) {
        let new_detail = {...details}
        new_detail.first_name = e.target.value
        setDetails(new_detail)
    }
    function changeLastName(e) {
        let new_detail = {...details}
        new_detail.last_name = e.target.value
        setDetails(new_detail)
    }
    function changeEmail(e) {
        let new_detail = {...details}
        new_detail.email = e.target.value
        setDetails(new_detail)
    }
    function changePhone(e) {
        let new_detail = {...details}
        new_detail.phone = e.target.value
        setDetails(new_detail)
    }
    function changeCountry(e) {
        let new_detail = {...details}
        new_detail.country = e.target.value
        setDetails(new_detail)
    }
    function changeCity(e) {
        let new_detail = {...details}
        new_detail.city = e.target.value
        setDetails(new_detail)
    }
    return (
        <div className='container bg-light rounded'>
            <h2>Personal Details</h2>
            <div className="row">
                <div className='col-12'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Wanted job title:</label>
                        <input type="text" value = {details.job_title}class="form-control" placeholder="Enter Role" onChange={changeJobTitle} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" value = {details.first_name}class="form-control" placeholder="Enter First Name" onChange={changeFirstName} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" value = {details.last_name}class="form-control" placeholder="Enter Last Name" onChange={changeLastName} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" value = {details.email}class="form-control"  placeholder="Enter email" onChange={changeEmail}/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone</label>
                        <input type="text" class="form-control"  placeholder="Enter Phone" value = {details.phone}onChange={changePhone}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Country</label>
                        <input type="text" class="form-control" value = {details.country}placeholder="Enter Country" onChange={changeCountry}/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">City</label>
                        <input type="text" class="form-control" placeholder="Enter City" value = {details.city} onChange={changeCity}/>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-2 mb-2'>
                <Link to="/"><div className='btn btn-danger btn-large'>Previous</div></Link>
                <Link to="/summary"><div className='btn btn-primary btn-large'> Next</div></Link>
            </div>

        </div>
    )
}

export default Form