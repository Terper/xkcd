import React from 'react'

function Comic({title, src, alt, num, day, month, year}) {
    if (day < 10) {
        day = "0"+ day;
    }
    if (month < 10) {
        month = "0"+ month;
    }
    return (
        <div className="comic">
            <h2>{title}</h2>
            <img src={src} alt={alt}/>
            <div className="info">
                <span className="num">{num}</span>
                <span className="date">Published: {year}-{month}-{day}</span>
            </div>
        </div>
    )
}

export default Comic
