import React, { useState, useEffect } from 'react'
import Member from './Member'

export default function Members(props){
    const {membersList} = props;

    return(
        <div className = 'members-container'>
            <h2>Members</h2>
            {membersList.map(member => {
                return <Member key = {member.username} memberInfoObj = {member}/>
            })}
        </div>
    )
}