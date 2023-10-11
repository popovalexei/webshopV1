import React from 'react'

function AddressForm() {




  return (
    <div>
      <div className='headerDiv'>
        <div>
          <h1>Checkout</h1>
          <p>item count</p>
        </div>
        <div>
          <p>1. Shipping</p>
          <p>2. Payment</p>
        </div>
      </div>

      <div className='personalInfoForm'>
        <input type="text" placeholder='Email'/>
      </div>     
    </div>
  )
}

export default AddressForm