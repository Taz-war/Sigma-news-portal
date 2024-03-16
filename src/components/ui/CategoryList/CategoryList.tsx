'use-client'
import { getAllCategories } from '@/utils/getAllCategories'
import React from 'react'
import { Button } from '../button'
import Link from 'next/link'

const CategoryList = async () => {

    const { data: allCategories } = await getAllCategories()
    console.log(allCategories)

    return (
        <div className=' p-4'>
            <h5 className=' font-bold p-3 border-b-4 border-red-600'>Categories</h5>
            <div>
                {allCategories.map((category:any) => (
                    <div key={category.id} className=' w-full p-2'>
                        <Button  variant={'outline'} className=' w-full'>
                            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryList