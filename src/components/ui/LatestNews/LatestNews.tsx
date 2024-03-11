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

const LatestNews = () => {
    return (
        <div>
            <Card className="w-full mt-2 p-3">
                <CardHeader>
                    <CardTitle>Technology</CardTitle>
                    <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={topNews} objectFit='fit-content' alt='topNews' className='rounded-md min-w-full' />
                    <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-semibold tracking-wide first:mt-0 ">
                        Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                    </h2>
                    <CardDescription className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout...</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                </CardFooter>
            </Card>
            <div className=' grid grid-cols-2 gap-4'>
                <div>
                    <Card className="w-full mt-2 p-3">
                        <CardHeader>
                            <CardTitle>Technology</CardTitle>
                            <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={topNews2} objectFit='fit-content' alt='topNews2' className='rounded-md min-w-full' />
                            <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-semibold tracking-wide first:mt-0 ">
                                Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                            </h2>
                            <CardDescription className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout...</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-full mt-2 p-3">
                        <CardHeader>
                            <CardTitle>Technology</CardTitle>
                            <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={topNews2} objectFit='fit-content' alt='topNews2' className='rounded-md min-w-full' />
                            <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-semibold tracking-wide first:mt-0 ">
                                Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                            </h2>
                            <CardDescription className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout...</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                        </CardFooter>
                    </Card>
                </div>
                <div><Card className="w-full mt-2 p-3">
                    <CardHeader>
                        <CardTitle>Technology</CardTitle>
                        <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src={topNews2} objectFit='fit-content' alt='topNews2' className='rounded-md min-w-full' />
                        <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-semibold tracking-wide first:mt-0 ">
                            Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                        </h2>
                        <CardDescription className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout...</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                    </CardFooter>
                </Card>
                </div>
                <div>
                    <Card className="w-full mt-2 p-3">
                        <CardHeader>
                            <CardTitle>Technology</CardTitle>
                            <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={topNews2} objectFit='fit-content' alt='topNews2' className='rounded-md min-w-full' />
                            <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-semibold tracking-wide first:mt-0 ">
                                Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                            </h2>
                            <CardDescription className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout...</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
