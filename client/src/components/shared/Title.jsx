/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Helmet } from "react-helmet-async"

<<<<<<< HEAD
const Title = ({
  Title = "chat App",
  description = "this is the chat App called Shubham",
}) => {
=======
const Title = (
    {title="Chat",description="this is the Chat App called Shubhamcd client"}
) => {
>>>>>>> main
  return (
    <Helmet>
      <title>{Title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
};

export default Title;
