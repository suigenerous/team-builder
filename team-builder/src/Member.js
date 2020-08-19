import React, { useState, useEffect } from 'react'

export default function Member(props){
    const {memberInfoObj} = props;
    console.log(memberInfoObj)
    return(
        <div className='member-card'>Member Card
            <p>Username: {memberInfoObj.username}</p>
            <p>Email: {memberInfoObj.email}</p>
            <p>Role: {memberInfoObj.role}</p>
        </div>
    )
}