'use client';

import React from 'react';

import Image from 'next/image';
import SideBarItem from './side-bar-item';
import { usePathname, useRouter } from 'next/navigation';

export interface SideBarProps {}

export function SideBar({}: SideBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SideBarItem
            current={pathname === '/dashbord'}
            pathname="/dashbord"
            src="/icons/briefcase.svg"
            alt="dashbord icon"
          >
            Dashbord
          </SideBarItem>
          <SideBarItem
            current={pathname === '/companies'}
            pathname="/companies"
            src="/icons/squares.svg"
            alt="companies icon"
          >
            Companies
          </SideBarItem>
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitClick}
        >
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
