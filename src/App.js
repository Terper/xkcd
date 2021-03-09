import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comic from "./components/Comic.js";
import Control from "./components/Control.js";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    let url, noNum;

    let num = useParams().num;
    if (typeof num != "undefined") {
        url = "/"+ num + "/info.0.json";
    } else {
        url = "/info.0.json"
        noNum = true
    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setItem(result);
                setIsLoaded(true);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [url])

    if (error) {
        return <div className="noMatch">
            <q>404</q>
            <p>The requested page was not found.</p>
            <a href="./">Return to home page</a>
            </div>;
    } else if (!isLoaded) {
        return <div class="loading">Loading...</div>;
    } else {
        if (noNum) {
            num = item.num;
        }
        return (
            <>
            <Comic 
                title={item.title}
                src={item.img}
                alt={item.alt}
                num={item.num}
                day={item.day}
                month={item.month}
                year={item.year}
            />
            <Control num={num}/>
            </>
        );
    }
}

export default App;
