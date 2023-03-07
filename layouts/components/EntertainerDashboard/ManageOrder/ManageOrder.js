import React from 'react'
import OrderDetails from './OrderDetails'
import OrderAddress from './OrderAddress'

const ManageOrder = () => {
    return (
        <div className="flex justify-between">
            <div className='w-3/5 '>
                <OrderDetails />
            </div>
            <div className='w-2/6'>
                <OrderAddress />
            </div>
        </div>
    )
}

export default ManageOrder