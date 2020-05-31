import React, { useState, useEffect } from 'react'
import './busList.css'
export default function BusList({ value: dataInp }) {
    const [obj, setObj] = useState('')
    useEffect(() => {
        const [bus] = dataInp
        setObj(bus)
    }, [dataInp])

    const handleSubmit = e => {
        e.preventDefault()
        
    }

    const renderFunction = () => {
        return (
            <div className="card mt-5 buslist">
                <div class="row ml-3">
                    <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Brand</div>
                    <div class="col-6 col-sm-3 mt-2 font-weight-bold ">From</div>
                    <div class="col-6 col-sm-3 mt-2 font-weight-bold ">To</div>
                    <div class="col-6 col-sm-3 mt-2 font-weight-bold ">Price</div>

                    <div class="w-100 d-none d-md-block"></div>

                    <div class="col-6 col-sm-3 mb-4">{obj.companyName}</div>
                    <div class="col-6 col-sm-3 mb-4">{obj.startCity}</div>
                    <div class="col-6 col-sm-3 mb-4">{obj.destination}</div>
                    <div class="col-6 col-sm-3 mb-4">{obj.pricePerSeat}</div>
                    <div class="col-6 col-sm-4 mb-2 ml-0">
                        <button className="btn btn-primary btn-md" onClick={e => { handleSubmit(e) }} >Book Now</button>
                    </div>
                </div>
            </div>

        )
    }


    return (
        <div className="">
            {renderFunction()}
        </div>

    )
}
