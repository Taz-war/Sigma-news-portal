import { getAllCategories } from '@/utils/getAllCategories'
import React from 'react'

const CategoryList = async () => {

    const { data } = await getAllCategories()
    console.log(data)

    return (
        <div>CategoryList</div>
    )
}

export default CategoryList