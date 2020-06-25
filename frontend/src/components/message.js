import React, { Component, useEffect } from 'react';

import axios from 'axios';

import {
    Link,
    useLocation
} from "react-router-dom";


export const Messages = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const sender = query.get("from");
    const receiver = query.get("to");

    const message = {
        sender: sender,
        receiver: receiver,
        message: 'coucou'
    }

    useEffect(() => {
        axios.post('http://localhost:4000/getMessages', message)
        .then(response => {
            console.log(response.data.messages)
            //this.setState({ messages: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }, []);
    
    const postMessage = () => {
        axios.post('http://localhost:4000/postMessage/', message)
            .then(response => {
               
            })
            .catch(function (error){
                console.log(error);
            })
    }

    return (
        <div>
            <h3>Messagerie</h3>
            <div>
                <button className="btn btn-success" onClick={postMessage}>Post message</button>
                <p>Moi</p>
            </div>
        </div>
    )
}
export default Messages;