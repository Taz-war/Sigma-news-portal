import { getSingleNews } from '@/utils/getSingleNews'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image'
import React from 'react'

type NewsDetailParams = {
  news: string;
  newsId: string;
}

const NewsDetailPage = async ({ params }:{params:NewsDetailParams}) => {
  const { data: news } = await getSingleNews(params.newsId)
  console.log(params)
  return (
    <div className=' container mx-4 grid grid-cols-2'>
      <div className=' p-4'>
        <Image src={news.thumbnail_url} alt='news' width={800} height={500} className=' rounded-md' />
        <div className=' grid grid-cols-2 gap-4 mt-4'>
          <div><Image src={news.image_url} alt='news' width={800} height={500} className=' rounded-md' /></div>
          <div><Image src={news.image_url} alt='news' width={800} height={500} className=' rounded-md' /></div>
        </div>
      </div>
      <div className=' p-4'>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {news.title}
        </h3>
        <div className=' flex gap-2 items-center'>
          <Avatar>
            <AvatarImage src={news.author.img} alt="author" />
            <AvatarFallback>author</AvatarFallback>
          </Avatar>
          <p className="text-md text-muted-foreground">By {news.author.name}</p>
          <p className="text-md text-muted-foreground"> - {news.author.published_date}</p>
        </div>
        <p className="text-lg text-muted-foreground text-justify whitespace-pre-line mt-3 text-gray-500 ">{news.details}</p>
        <blockquote className="mt-6 border-l-2 pl-6 italic font-bold">
          "Many desktop publishing packages and web page editors now use as their default model text"
          <br />      ---- Fahim Tazwer
        </blockquote>
      </div>
    </div >
  )
}

export default NewsDetailPage