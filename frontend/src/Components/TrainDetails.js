import React from 'react'

const TrainDetails = ({details}) => {
    console.log(details);
    const {dep,seat,price,delayedBy} = details;
    return (
        <div className='bg-gray-500 py-5 shadow-md shadow-gray-300'>
            <div className="train-details p-4 pb-0 flex items-start gap-6">
                <h1 className='font-bold text-[18px]'>
                <a className='text-[#c0392b] hover:text-[#e74c3c] hover:underline' href='#'>{details.trnum} {details.tn} &gt;</a>
                {delayedBy && <div className='text-orange-800 font-normal'>Delayed by: {delayedBy}</div>}
                </h1>
                <div className='text-[20px]'>
                    <p className='font-semibold'>Departure</p>
                    <span>{dep.h}:{dep.m}:{dep.s}</span>
                </div>
            </div>
            <hr className='h-[1.7px] my-2'/>
            <div className="seat-details flex justify-center">
                <div className="card w-[100px] text-center text-lg font-semibold p-2 shadow-sm shadow-gray-500 border-2 border-slate-400">
                    <div className="type">
                        SL - {price.sleeper}
                    </div>
                    <div className="seat">
                        {seat.sleeper}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TrainDetails