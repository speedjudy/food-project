import React from 'react'

const OrderDetails = () => {
    return (
        <div>
            <div className='w-full'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' width={"65px"} />
            </div>
            <div className='flex justify-between mt-2'>
                <p className='text-black font-bold text-xlfont-bold text-xl'>Dianne Russell</p>
                <p className='font-bold text-lg text-gray-400'>Dianne Russell</p>
                <div className='font-bold text-base text-gray-400'>
                    May 1, 2021
                    <p>13:40 pm</p>
                </div>
            </div>
            <div className='mt-8'>
                <div className='mt-4 w-full border px-3 py-2 flex justify-between items-center'>
                    <div className='w-2/4 flex justify-between items-center'>
                        <div className='text-base text-black font-bold flex items-center '>
                            <p className='bg-green-400 text-green-400 border rounded-full px-1 text-xs h-fit mr-4'>1</p>
                            <div>
                                Hi-Tech Bawarchi
                                <p className='text-gray-400 text-sm text-center'>MAIN COURSE </p>
                            </div>
                        </div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy6i0CHObkEskzIlKSTkJpSLpC7i6X5lxRw&usqp=CAU'
                            width={"100px"}
                        />
                    </div>
                    <div className='font-bold text-black'>
                        $ 187.2
                    </div>
                </div>
                <div className='mt-4 w-full border px-3 py-2 flex justify-between items-center'>
                    <div className='w-2/4 flex justify-between items-center'>
                        <div className='text-base text-black font-bold flex items-center'>
                            <p className='bg-green-400 text-green-400 border rounded-full px-1 text-xs h-fit mr-4'>1</p>
                            <div>
                                Hi-Tech Bawarchi
                                <p className='text-gray-400 text-sm text-center'>MAIN COURSE </p>
                            </div>
                        </div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy6i0CHObkEskzIlKSTkJpSLpC7i6X5lxRw&usqp=CAU'
                            width={"100px"}
                        />
                    </div>
                    <div className='font-bold text-black'>
                        $ 187.2
                    </div>
                </div>
            </div>
            <div className='flex justify-end px-4 mt-4'>
                <div className="flex w-3/5 justify-between border-b-2 pb-4">
                    <div className='text-gray-400 text-xl font-semibold'>Booking Info</div>
                    <div className='text-gray-400 font-semibold'>
                        <p>4 Seats</p>
                        <p>4 Vip Room</p>
                        <p>1 Karaoke Setup</p>
                        <p>1 Room Stay</p>
                    </div>
                    <div className="text-gray-400 font-semibold">
                        <p>100.00</p>
                        <p>500.00</p>
                        <p>200.00</p>
                        <p>171.00</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end px-4 my-4'>
                <div className='w-3/5 flex justify-between'>
                    <div className='flex w-7/12	 justify-between items-center'>
                        <p className='font-bold text-gray-700 text-lg'>Total Bill</p>
                        <p className='text-pink-500 text-sm rounded-md font-medium bg-pink-200 px-2 border-2 border-pink-500 h-fit'>CASH</p>
                        <p className="font-bold text-gray-700 text-lg">$ 1160</p>
                    </div>
                    <div className='flex text-blue-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                        </svg>
                        <p>Print Bill</p>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-end my-20'>
                <div className='bg-rose-600 text-white px-20 font-light rounded-2xl py-1 mx-3'>DECLINE ORDER</div>
                <div className='bg-orange-500 text-white px-20 font-light rounded-2xl py-1'>Conform Order</div>
            </div>
        </div>
    )
}

export default OrderDetails