import React, { useEffect } from 'react'
import { useDetails } from './DetailsContext'
const PersonalDetails = () => {
    const details= useDetails();
    useEffect(() => {
      console.log(details)
    
      return () => {
        
      }
    }, [details])
    
    return (
        <div className='container'>
            <h2>Personal Details</h2>
            
            <div className="row">
                <div className='col-12'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Wanted job title:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange=""/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Country</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className='col-6'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">City</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
            </div>



            <div className='row'>
                <h2>Professional Summary</h2>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Write 2-3 sentences about yourself.</label>
                    <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows=""></textarea>
                </div>
            </div>



            {/* End container */}
        </div>
    )
}

export default PersonalDetails