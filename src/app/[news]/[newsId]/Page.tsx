import React from 'react'

const NewsDetailPage = ({params}) => {
  console.log(params)
  return (
    <div>{params.newsId}</div>
  )
}

export default NewsDetailPage