import React, { useState } from 'react'
import './FormAlign.css';
import TenantInput from './TenantInput';

export default function TenantFormFunction() {
    var [tenant, setTenant]= useState({
        email: '',
        fullname: '',
        address1: '',
        address2:'',
        city:'',
        province: '',
        postalcode:''
    })

    const province = ['Choose...', 'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 
    'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']

    const onValueChanged = (event) => {
        event.preventDefault()
        setTenant({
            ...tenant,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(tenant)
    }

    return (
    <div>
        <h1>Data Entry Form</h1>
        <form onSubmit={(e) => onSubmitForm(e)} > 
       
            <div className="form-row">

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <br></br>
                    <input
                        name='email'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Enter Email"
                        style={{ width: '100%'}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='fullname'>Name</label>
                    <br></br>
                    <input
                        name='fullname'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Full Name"
                        style={{ width:  '100%'}}
                    />
                </div>

            </div>    
                    <label htmlFor='address1'>Address</label>
                    <br></br>
                    <input 
                        name='address1'
                        type="text"
                        onChange={(e) => onValueChanged(e)} 
                        placeholder="1234 Main St" 
                        style={{ width:  '100%'}}
                        />

                    <br></br>
                    <label htmlFor='address2'>Address 2</label>
                    <br></br>
                    <input 
                        name='address2'
                        type="text"
                        onChange={(e) => onValueChanged(e)} 
                        placeholder="Apartment, studio, or floor"
                        style={{ width:  '100%'}} 
                        />

                    <br></br>
            <div className='form-row'>

                <div className='form-group'>
                    <label htmlFor='city'>City</label>
                    <br></br>
                    <input 
                        name='city'
                        type="text"
                        onChange={(e) => onValueChanged(e)} 
                        placeholder="Toronto" />
                </div>

                <div className='form-group'>
                    <label htmlFor='province'>Province</label>
                    <br></br>
                    <select name='province' onChange={(e) => onValueChanged(e)}>
                        {
                            province.map((province) => (
                                 <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                </div>
                   
                <div className='form-group'>
                    <label htmlFor='postalcode'>Postal Code</label>
                    <br></br>
                    <input 
                        name='postalcode'
                        type="text"
                        onChange={(e) => onValueChanged(e)} 
                        placeholder="M46 1A1" />
                </div>    
                  
            </div>
                    
                    <input
                        name='terms'
                        type="checkbox"
                        onChange={(e) => onValueChanged(e)} 
                        />
                    <label htmlFor='terms'>Agree Terms & Condition</label> 

                    <br></br>
                    <input 
                        name='btnSubmit'
                        type="submit"
                        value="Submit" />
             </form>
            
            <div>
            <TenantInput tenant={tenant}/>
            </div>
         
    </div>
  )
}
