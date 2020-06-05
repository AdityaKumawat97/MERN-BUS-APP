import React, { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './Tab.css'
export default function SeatSelection() {
    const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])
    // const [passengers, setPassengers] = useState([])
    // useEffect(()=>{
    //     let bId = localStorage.getItem('selectedBusId')
    //     if(bId){
    //         getSeatArray(bId)            
    //     }
    //     else return
    // },[localStorage])
    // const getSeatArray = async bId => {
    //     const baseURL = "http://localhost:8080/booking/"
    //     await axios.get(baseURL, bId)
    //     .this(response=>response.data)
    //     .this(data=>{
    //         setReservedSeat(data)
    //         console.log(reservedSeat)
    //     })
    // }
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber([...seatNumber, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName("name is required"))
        } else {
            setName(name.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
        localStorage.setItem("nameData", JSON.stringify(name))
        console.log(name)
        console.log(gender)
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <form key={idx} className="form seatfrm">
                    <p class="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>)

        })
    }
    return (
        <div className="ss">
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="1A" id="1A" />
                                            <label htmlFor="1A">1A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1B" value="1B" />
                                            <label htmlFor="1B">1B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="1C" id="1C" />
                                            <label htmlFor="1C">1C</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2A" id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2C" id="2C" />
                                            <label htmlFor="2C">2C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3C" id="3C" />
                                            <label htmlFor="3C">3C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="4A" id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4C" id="4C" />
                                            <label htmlFor="4C">4C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="5C" id="5C" />
                                            <label htmlFor="5C">5C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="6A" id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6B" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6C" id="6C" />
                                            <label htmlFor="6C">6C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7A" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7B" id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7C" id="7C" />
                                            <label htmlFor="7C">7C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="8A" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="8B" id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="8C" id="8C" />
                                            <label htmlFor="8C">8C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="9A" id="9A" />
                                            <label htmlFor="9A">9A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9B" id="9B" />
                                            <label htmlFor="9B">9B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9C" id="9C" />
                                            <label htmlFor="9C">9C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="10A" id="10A" />
                                            <label htmlFor="10A">10A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10B" id="10B" />
                                            <label htmlFor="10B">10B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10C" id="10C" />
                                            <label htmlFor="10C">10C</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>
                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                Confirm Details
                            </button>
                        </div>
                        <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                            <FaAngleDoubleDown />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
