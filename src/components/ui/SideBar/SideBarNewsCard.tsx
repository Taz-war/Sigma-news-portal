import React from 'react'
import blankImage from '@/assets/blankImage.png'
import Image from 'next/image'

const SideBarNewsCard = () => {
    return (
        <>
            <div className=' flex gap-3 p-3 shadow-lg rounded-md mb-4'>
                <div>
                    <Image src={blankImage} height={100} width={100} alt="rectangle" />
                </div>
                <div>
                    <p className="scroll-m-20 mt-4 pb-2 text-sm font-bold tracking-tight first:mt-0 ">
                        Bitcoin Climbs as ELon Musk says Tesla Likely to Accept it Again
                    </p>
                    <p className="text-sm text-muted-foreground">Mar 16 ,2024</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default SideBarNewsCard
