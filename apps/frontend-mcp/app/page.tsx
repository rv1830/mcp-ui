"use client"

import { useState } from "react"
import QueryInput from "@/components/query-input"
import ResultTable from "@/components/result-table"
import QueryHistory from "@/components/query-history"
import Header from "@/components/header"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333"

export default function Home() {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const [error, setError] = useState<string>("")

  const handleQuery = async (query: string) => {
    setLoading(true)
    setError("")
    setHistory((prev) => [query, ...prev])

    try {
      const res = await fetch(`${API_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })

      if (!res.ok) {
        throw new Error("Query failed")
      }

      const data = await res.json()
      setResults(data.data || [])
    } catch (err) {
      setError("Could not fetch results. Please try again.")
      console.error("API Error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 text-balance">
            Ask questions.
            <br />
            <span className="text-purple-600">Get instant answers.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl text-balance">
            Powerful natural language queries over your business data. Get exactly what you need in seconds.
          </p>
        </div>

        {/* Query Input */}
        <div className="mb-12">
          <QueryInput onSubmit={handleQuery} loading={loading} />
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Results Section */}
          <div className="lg:col-span-2">
            {results.length > 0 ? (
              <div>
                <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Results</h2>
                <ResultTable data={results} />
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
                <div className="w-12 h-12 rounded-lg bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">No results yet. Ask a question to get started.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <QueryHistory queries={history} />
          </div>
        </div>
      </div>
    </main>
  )
}
