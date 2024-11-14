/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Helmet } from "react-helmet-async"

const Title = ({
  title = "Chat App",
  description = "This is the chat app called Shubham",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
};

export default Title;
