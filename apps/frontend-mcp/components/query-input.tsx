"use client"

import type React from "react"

import { useState } from "react"

interface Props {
  onSubmit: (q: string) => void
  loading: boolean
}

export default function QueryInput({ onSubmit, loading }: Props) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && !loading) {
      onSubmit(query)
      setQuery("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="flex gap-2 rounded-full border border-gray-300 bg-white shadow-md p-1.5 hover:shadow-lg hover:border-purple-400 transition-all">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about your data..."
            className="flex-1 bg-transparent px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none text-base"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-5 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <span className="text-purple-500">→</span>
          <span>Last 7 days sales</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-purple-500">→</span>
          <span>Top customers</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-purple-500">→</span>
          <span>Revenue trends</span>
        </div>
      </div>
    </form>
  )
}
