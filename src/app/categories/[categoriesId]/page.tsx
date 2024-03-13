import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getCategoryNews } from '@/utils/getCategoryNews'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DynamicNews = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category)
  console.log(data)
  return (
    <>
      <div>
        <div className=' grid grid-cols-2 gap-4 mb-5'>
          {
            data.map((news) => (
              <div key={news.id}>
                <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                  <Card className="w-full mt-2 p-3">
                    <CardHeader>
                      <CardTitle>{news.category}</CardTitle>
                      <CardDescription>By {news.author.name} - {news.author.published_date}</CardDescription>
                    </CardHeader>
                    <CardContent >
                      <Image src={news.thumbnail_url} objectFit='fit-content' width={800} height={100} alt='topNews2' className='rounded-md min-w-full w-full h-64' />
                      <h2 className="scroll-m-20 mt-4 pb-2 text-2xl font-bold tracking-tight first:mt-0 ">
                        {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                      </h2>
                      <CardDescription className=' text-l'>
                        {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default DynamicNews