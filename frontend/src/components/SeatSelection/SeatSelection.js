import React, { useState } from 'react'
import './Tab.css'
export default function SeatSelection() {
    const [seatNumber, setSeatnumber] = useState([])

    const getSeatNumber = (e) => {
        let newSeat = e.target.value
        if (seatNumber.includes(newSeat)) {
            let tempArray = [...seatNumber]
            let index = tempArray.indexOf(newSeat)
            tempArray.splice(index,1)
            setSeatnumber(tempArray)
            console.log(tempArray)
        } else {
            console.log(seatNumber.includes(newSeat))
            setSeatnumber([...seatNumber, newSeat])
            console.log(seatNumber)
        }
        console.log(seatNumber)
    }
    return (
        <div className="container">
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
                                            <input type="checkbox" value ="1C" id="1C" />
                                            <label htmlFor="1C">1C</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="2C" />
                                            <label htmlFor="2C">2C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="3C" />
                                            <label htmlFor="3C">3C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="4C" />
                                            <label htmlFor="4C">4C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="5C" />
                                            <label htmlFor="5C">5C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="6C" />
                                            <label htmlFor="6C">6C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="7C" />
                                            <label htmlFor="7C">7C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="8C" />
                                            <label htmlFor="8C">8C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="9A" />
                                            <label htmlFor="9A">9A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="9B" />
                                            <label htmlFor="9B">9B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled id="9C" />
                                            <label htmlFor="9C">9C</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" id="10A" />
                                            <label htmlFor="10A">10A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="10B" />
                                            <label htmlFor="10B">10B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="10C" />
                                            <label htmlFor="10C">10C</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2"></div>
            </div>

        </div>

    )
}
