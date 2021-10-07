import React from 'react'

import './FormInput.styles.scss'

const FormInput = ({handlechange,label,...otherProps}) =>{
    //console.log(otherProps);
    //otherprops are name,value,type,required
    return (
        <div className="group">
            <input className="form-input"
            onChange={handlechange} {...otherProps}/>
            { 
            label ?
            (<label className={`${otherProps.value.length} ? 
            'shrink' : ''} form-input-label`}>
                {label}
            </label>) : null
            }
        </div>
    )
}

export default FormInput