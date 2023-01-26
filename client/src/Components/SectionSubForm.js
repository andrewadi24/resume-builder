import React from 'react'

const SectionSubForm = (props) => {
    let column1 = "Job Title"
    let column2 = "Employer"
    if (props.title =="education"){
        column1 = "Degree Name"
        column2 = "School"
    }
    const details = props.details;
    
    return (
        <div className='container mt-3 border rounded pt-3 pb-3 bg-white'>
            <div className='row'>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">{column1}</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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