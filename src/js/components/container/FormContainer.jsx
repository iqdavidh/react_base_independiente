import React, { Component } from "react";
import ReactDOM from "react-dom";


function Lista(){
    const lista=['n1','n2'];

    const listaLi=lista.map( item=>{
        return <li>{item}</li>
    });

    return (
        <ul>
            {listaLi}
        </ul>
    );
}


const FormContainer = () => {

    return (
        <div>
            <Lista/>
        </div>
    );
};

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;