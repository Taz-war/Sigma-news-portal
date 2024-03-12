import CategoryList from '@/components/ui/CategoryList/CategoryList';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
  };

const layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <div className="grid grid-cols-12">
                    <div className=' col-span-3'>
                        <CategoryList />
                    </div>
                    <div className=' col-span-9'>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default layout