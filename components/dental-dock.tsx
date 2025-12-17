"use client"

import Link from "next/link"
import {
    Home,
    Stethoscope,
    Users,
    MessageSquare,
    BookOpen,
    HelpCircle,
    Phone,
    Calendar,
} from 'lucide-react'

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'

const dockItems = [
    {
        title: 'Home',
        icon: <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/',
    },
    {
        title: 'Services',
        icon: <Stethoscope className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/services',
    },
    {
        title: 'Our Team',
        icon: <Users className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/team',
    },
    {
        title: 'Testimonials',
        icon: <MessageSquare className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/testimonials',
    },
    {
        title: 'Blog',
        icon: <BookOpen className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/blog',
    },
    {
        title: 'FAQ',
        icon: <HelpCircle className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/faq',
    },
    {
        title: 'Contact',
        icon: <Phone className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
        href: '/contact',
    },
    {
        title: 'Book Now',
        icon: <Calendar className='h-full w-full text-primary dark:text-primary' />,
        href: '/appointment',
    },
]

export function DentalDock() {
    return (
        <div className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2 z-50'>
            <Dock className='items-end pb-3'>
                {dockItems.map((item, idx) => (
                    <Link key={idx} href={item.href}>
                        <DockItem
                            className={`aspect-square rounded-full ${item.title === 'Book Now'
                                    ? 'bg-primary/20 dark:bg-primary/30'
                                    : 'bg-gray-200 dark:bg-neutral-800'
                                }`}
                        >
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon>{item.icon}</DockIcon>
                        </DockItem>
                    </Link>
                ))}
            </Dock>
        </div>
    )
}
