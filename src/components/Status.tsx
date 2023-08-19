import React from 'react';

// proptype - union of literal
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = ( props: StatusProps ) => {
    let message;
    
    if (props?.status === 'loading') {
        message = 'Loading Data...'
    } else if (props?.status === 'success') {
        message = 'Data Loaded succesfully!'
    } else if( props?.status === 'error' ) {
        message = 'Error while loading data!'
    }
    
  return (
    <div>
          <h2>{message}</h2>
    </div>
  )
}

export default Status