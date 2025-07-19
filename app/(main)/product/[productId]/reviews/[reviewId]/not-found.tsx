'use client'

import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathName = usePathname()
    console.log(pathName);
    return (
        <div>
            <h2 className='text-red-400'>Review not found</h2>
            <p>product id{pathName.split('/')[2]}</p>
            <p>review id{pathName.split('/')[4]}</p>
        </div>
    );
};

export default NotFound;