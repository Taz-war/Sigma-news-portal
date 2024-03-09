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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import topNews from '@/assets/top-news.png'
import Image from 'next/image'

const LatestNews = () => {
    return (
        <div>

            <Card className="w-full mt-2">
                <CardHeader>
                    <CardTitle>Technology</CardTitle>
                    <CardDescription>uploaded by fahim tazwer,10 mar,2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src={topNews} width={850} height={100} alt='topNews' className='rounded-md min-w-full' />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LatestNews
