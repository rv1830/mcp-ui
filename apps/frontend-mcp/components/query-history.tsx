"use client"

interface Props {
  queries: string[]
}

export default function QueryHistory({ queries }: Props) {
  if (!queries || queries.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <div className="w-10 h-10 rounded-lg bg-gray-200 mx-auto mb-3 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500">No history yet</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Recent Queries
        </h2>
      </div>
      <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
        {queries.slice(0, 10).map((q, i) => (
          <div
            key={i}
            className="p-3 bg-gray-50 hover:bg-purple-50 rounded-lg border border-gray-200 cursor-pointer transition-colors group"
          >
            <p className="text-sm text-gray-700 group-hover:text-gray-900 line-clamp-2">{q}</p>
            <p className="text-xs text-gray-400 mt-1">{i === 0 ? "Just now" : `${i} query ago`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
