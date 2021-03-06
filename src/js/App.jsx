import React from "react";
import ReactDOM from "react-dom";


function Lista(){
    const lista=['n1','n2','b4'];

    const listaLi=lista.map( (item,index)=>{
        return <li key={index}>{item}</li>
    });

    return (
        <ul>
            {listaLi}
        </ul>
    );
}


const App = () => {

    return (
        <div>
            <Lista/>
        </div>
    );
};

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;