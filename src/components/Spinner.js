//this is a higher order component
import React from 'react'
import { SpinnerOverlay,SpinnerContainer } from './SpinnerStyles.styles'

const WithSpinner = WrappedCOmponent =>{
    const Spinner = ({isLoading,...otherProps}) =>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedCOmponent {...otherProps}/>
    )
    }
    return Spinner
}


export default WithSpinner
