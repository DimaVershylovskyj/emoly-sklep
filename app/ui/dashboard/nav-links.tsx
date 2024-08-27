'use client';

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, ScaleIcon,} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import clsx from "clsx";

const array_of_links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon, },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
    { name: 'Products', href: '/dashboard/products', icon: ScaleIcon},
];

export default function NavLinks(){
    const pathname = usePathname();

    return(
        <>
            {array_of_links.map((element_of_array)=>{
                const LinkIcon = element_of_array.icon;

                return(
                    <Link
                    key={element_of_array.name}
                    href={element_of_array.href}
                    className={clsx(
                        `flex
                        h-[48px]
                        grow
                        items-center
                        justify-center
                        gap-2
                        rounded-md
                        p-3
                        text-sm
                        font-medium
                        bg-indigo-300
                        hover:bg-indigo-900
                        hover:text-white
                        md:flex-none
                        md:justify-start
                        md:p-2
                        md:px-3`,
                        {
                            'bg-indigo-500 text-white' : pathname === element_of_array.href,
                        },
                    )}
                    >
                        <LinkIcon className='w-6'/>
                        <p className='hidden md:block'>{element_of_array.name}</p>
                    </Link>
                );
            })}
        </>
    );
}