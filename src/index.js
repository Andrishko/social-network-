import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import content from "./Components/Content/Content";
import {logDOM} from "@testing-library/react";

let data = {

    postData: [
        {id: 1, message: "Wasssup", likesCount: 15},
        {id: 2, message: "sheeeesh", likesCount: 2},
    ],

    chatData: {
        dialogsData : [
            {id: 1, name: "LilChill"},
            {id: 2, name: "LilTys"},
            {id: 3, name: "LilChel"},
            {id: 4, name: "LilTipok"},
        ],


        messagesData : [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you "},
            {id: 3, message: "Sho tu dyada"},
        ]
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>
);

reportWebVitals();
