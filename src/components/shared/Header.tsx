import Image from 'next/image'
import React from 'react'
import headerImage from '@/assets/The Dragon News.png'

const Header = () => {
    return (
        <div className=' container mx-auto px-4 justify-center'>

            <Image src={headerImage} height={500} width={500} alt='headerImage' className=' mx-auto' />
            <div className='w-full text-center'>
                <p className="text-lg text-muted-foreground">Journalism without Fear and Favour</p>
            </div>
        </div>
    )
}

export default Header
