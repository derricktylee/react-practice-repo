import React from "react";
import "./birthday.css";
import List from "./List";
import data from "./data";

export default function Birthday(){

    const [people, setPeople] = React.useState(data)
    function clearAll(){
        setPeople([])
    }

    const newList = people.map(item => <List object={item} />
    )
    console.log(newList)
    return (
    <main>
        <section className="birthday-container">
            <h3 className="birthday-number">{people.length} birthday today</h3>
            {newList}
            <button className="clear" onClick={clearAll}>Clear all</button>
        </section>
    </main>
    )
}