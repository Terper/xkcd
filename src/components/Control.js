function search () {
    window.location.href = "./" + document.getElementById("search").value
}
function Control({num}) {
    return (
        <div className="control">
            <a href={"./" + (num-1)}>&lt;</a>
                <input type="number" min="0" max="9999" defaultValue={num} id="search"/>
                <button onClick={() => search()}>Search</button>
            <a href={"./" + (num-(-1))}>&gt;</a>
        </div>
    )
}

export default Control
