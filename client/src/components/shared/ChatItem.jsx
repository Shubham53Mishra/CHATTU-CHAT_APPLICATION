import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from  '../styles/StyledCompoents.jsx'

const Chatitem = () => {
    Avatar = [],
        name,
        _id,
        groupChat = false,
        someSender,
         isOnline
         newMessagesAlert,
         index=0,
         handleDeleteChatOpen,
    return (
       <Link to={"/chat/chat/${_id}"} onContextMenu={(e) => handleDeleteChatOpen(e,_id,groupChat)}>
        <div style={{display:"flex", gap:"1rem", position:"relative", alignItems:"center", padding:"1rem", backgroundColor: sameSender ? "black" : "upset",color:"samesender" ?"white" :"black", justifyContent:"space-between"}}>
            <Stack>
                <Typography>{name}</Typography>
                {
                    newMessagesAlert && (
                        <Typography>{newMessagesAlert.count}New Messages</Typography> 
                    )
                }
            </Stack>
            {
                isOnline && <Box{{
                    position:"absolute",
                    top:"0",
                    right:"0",
                    width:"1rem",
                    height:"1rem",
                    backgroundColor:"green",
                    borderRadius:"50%"
                }}/>
            }
        </div>
       </Link>
    )
}

export default Chatitem