import React from "react";

const TenantInput = ({ tenant}) => {
    return (
        <div>
            <p style={{color: 'green'}}>Email: {tenant.email}</p>
            <p style={{color: 'green'}}>FullName: {tenant.fullname}</p>
            <p style={{color: 'green'}}>Address: {tenant.address1}</p>
            <p style={{color: 'green'}}>City: {tenant.city}</p>
            <p style={{color: 'green'}}>Province: {tenant.province}</p>
            <p style={{color: 'green'}}>Postal Code: {tenant.postalcode}</p>
        </div>
    )
}

export default TenantInput;