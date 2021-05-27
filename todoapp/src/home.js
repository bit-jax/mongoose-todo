import React, { useState } from 'react'


export default function (props) {
    const [messageText, setMessageText] = useState('')

    function handleMessageChange(event) {
        setMessageText(event.target.value)
    }

    // componentDidMount() {
    //     fetch()
    // }
    

    return(
        <div>
            <p>hihi</p>
        </div>
        )
}