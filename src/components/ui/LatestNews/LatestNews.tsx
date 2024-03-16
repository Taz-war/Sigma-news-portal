import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import topNews from '@/assets/top-news.png'
import topNews2 from '@/assets/top-news2.png'
import Image from 'next/image'
import { getAllNews } from '@/utils/getAllNews'

const LatestNews = async () => {
    const { data } = await getAllNews()
    console.log(data[0].thumbnail_url)
    return (
        <div>
            <Card className="w-full mt-2 p-3">
                <CardHeader>
                    <CardTitle>{data[0].category}</CardTitle>
                    <CardDescription>uploaded by {data[0].author.name} - {data[0].author.published_date}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={data[0].thumbnail_url} objectFit='fit-content' width={800} height={500} alt='topNews' className='rounded-md min-w-full' />
                    <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-extrabold tracking-wide first:mt-0 ">
                        {data[0].title}
                    </h2>
                    <CardDescription className=' text-lg'> {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                </CardFooter>
            </Card>
            <div className=' grid grid-cols-2 gap-4'>
                {
                    data.slice(0, 4).map((news) => (
                        <div key={news.id}>
                            <Card className="w-full mt-2 p-3">
                                <CardHeader>
                                    <CardTitle>{news.category}</CardTitle>
                                    <CardDescription>uploaded by {news.author.name} - {news.author.published_date}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Image src={news.thumbnail_url} objectFit='fit-content' width={800} height={500} alt='topNews2' className='rounded-md min-w-full w-full h-64' />
                                    <h2 className="scroll-m-20 mt-4 pb-2 text-2xl font-extrabold tracking-tight first:mt-0 ">
                                        {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                    </h2>
                                    <CardDescription className=' text-lg'> {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}</CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                </CardFooter>
                            </Card>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LatestNews
