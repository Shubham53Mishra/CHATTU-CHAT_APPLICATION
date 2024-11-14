import React from 'react'
import { Helmet } from "react-helmet-async"

const Title = ({
  Title = "chat",
  description = "this is the chat App called Shubham",
}) => {
  return (
    <Helmet>
      <title>{Title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
};

export default Title;
