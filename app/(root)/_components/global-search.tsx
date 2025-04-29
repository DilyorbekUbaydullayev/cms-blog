"use client"

import React from 'react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { popularCategories, popularTags } from '@/constants'
import { Minus, Search } from 'lucide-react'
import Link from 'next/link'

function GlobalSearch() {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2">
          <span className="hidden md:flex">Search</span>
          <Search className="w-4 h-4" />
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Search Posts</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>

        <div className="container max-w-6xl mx-auto py-12">
          <Input
            className="bg-secondary"
            placeholder="Type to search blog..."
          />

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">
                See posts by categories
              </p>
              <Minus />

              <Link href="/categories" >
                <DrawerClose className="cursor-pointer text-blue-500 underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map(item => (
                <Badge key={item.slug} variant="secondary" className='cursor-pointer'>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">See posts by tags</p>
              <Minus />
              <Link href="/tags" >
                <DrawerClose className="cursor-pointer text-blue-500 underline hover:opacity-90">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(item => (
                <Badge key={item.slug} variant="secondary" className='cursor-pointer'>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default GlobalSearch
