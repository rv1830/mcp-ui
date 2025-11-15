"use client"

interface Props {
  data: any[]
}

export default function ResultTable({ data }: Props) {
  if (!data || data.length === 0) {
    return null
  }

  const columns = Object.keys(data[0])

  const getCardColor = (rowIndex: number) => {
    const firstNumValue = Object.values(data[rowIndex]).find((v) => typeof v === "number") as number
    if (typeof firstNumValue === "number") {
      return firstNumValue >= 0 ? "success-card" : "error-card"
    }
    return firstNumValue === undefined ? "success-card" : "success-card"
  }

  return (
    <div className="space-y-3">
      {data.map((row, i) => (
        <div key={i} className={`${getCardColor(i)} rounded-lg p-5 border`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {columns.map((col) => (
              <div key={`${i}-${col}`}>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">{col}</p>
                <p className="text-sm font-bold text-gray-900">
                  {typeof row[col] === "number" ? row[col].toLocaleString() : String(row[col])}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
