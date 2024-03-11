import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import sideImage from '@/assets/side-top-news.png'

const SideBar = () => {
    return (
        <div>
            <Card className="w-full mt-2 p-3">
                <CardHeader>
                    <CardTitle>Technology</CardTitle>
                    <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={sideImage} objectFit='fit-content' alt='sideImage' className='rounded-md min-w-full' />
                    <h2 className="scroll-m-20 mt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
                        Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                    </h2>
                    <CardDescription className=' text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout...</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                </CardFooter>
            </Card>
        </div>
    )
}

export default SideBar