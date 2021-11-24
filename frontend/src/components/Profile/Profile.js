import React, { useState, useEffect } from 'react'
import './profile.css'
import jwt_decode from 'jwt-decode'

export default function Profile({ history }) {
    const [token, setToken] = useState({})

    useEffect(() => {
        const tok = sessionStorage.getItem('authToken')
        const decoded = jwt_decode(tok)
        setToken(decoded.user)
    }, [])

    const goBackToRoutes = e => {
        e.preventDefault()
        history.push('/routes')
    }

    return ( <
        div className = 'container' >
        <
        section className = 'profile' >
        <
        header className = 'header' >
        <
        div className = 'details' >
        <
        img src = 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a'
        alt = 'John Doe'
        className = 'profile-pic' /
        >
        <
        h1 className = 'heading' > { token?.name } < /h1>{' '} <
        div className = 'location' >
        <
        svg class = 'svg-icon'
        width = '18'
        height = '18'
        viewBox = '0 0 24 24'
        fill = 'currentColor' >
        <
        path d = 'M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z' > { ' ' } <
        /path>{' '} <
        /svg>{' '} <
        p > { token?.email } < /p>{' '} <
        /div> <
        div className = 'stats' >
        <
        div className = 'col-4' >
        <
        h4 > 20 < /h4> <p> Reviews </p > { ' ' } <
        /div>{' '} <
        div className = 'col-4' >
        <
        h4 > 10 < /h4> <p> Bookings </p > { ' ' } <
        /div>{' '} <
        div className = 'col-4' >
        <
        h4 > 5 < /h4> <p> 5 - Star </p > { ' ' } <
        /div>{' '} <
        /div>{' '} <
        div className = 'stat2' >
        <
        div className = 'col-12' >
        <
        button className = 'btn btn-dark bck'
        onClick = { e => goBackToRoutes(e) } >
        GO BACK { ' ' } <
        /button>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        /header>{' '} <
        /section>{' '} <
        /div>
    )
}