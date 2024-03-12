import { getCategoryNews } from '@/utils/getCategoryNews'
import React from 'react'

const DynamicNews = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category)
  console.log(data)
  return (
    <>
      <div>DynamicNews {params.categoriesId}</div>
      <div>DynamicNews {searchParams.category}</div>
    </>
  )
}

export default DynamicNews