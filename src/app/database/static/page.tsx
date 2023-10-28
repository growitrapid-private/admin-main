import React from 'react'
import Structure from './structure'

type Props = {
    searchParams?: {
        view?: 'editor' | 'panel';
    }
}

export default function page({
    searchParams
}: Props) {

    return (
        <Structure
            searchParams={searchParams}
            data={{
                collections: [
                    {
                        id: 'home',
                        name: 'Home Page',
                        description: 'All static content for the home page.',
                        icon: 'HomeIcon'
                    }
                ]
            }}
        >
            <div className='w-full h-full'>

                

            </div>
        </Structure>
    )
}