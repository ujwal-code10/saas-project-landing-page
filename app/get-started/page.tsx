"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-neutral flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">Get Started</h1>
          <p className="mt-2 text-gray-600">Start your journey with ProjectFlow</p>
        </div>
        <Link href="/" className="block">
          <Button
            variant="ghost"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
} 