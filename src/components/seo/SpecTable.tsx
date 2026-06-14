import React from 'react';

interface SpecTableProps {
  data: { label: string; value: string }[];
}

export function SpecTable({ data }: SpecTableProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-6 text-gray-900">
        Official Specifications
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border-4 border-black shadow-[4px_4px_0px_#000]">
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b-4 border-black last:border-b-0 hover:bg-gray-50 transition-colors">
                <th className="p-4 border-r-4 border-black bg-gray-100 font-bold text-black w-1/3">
                  {row.label}
                </th>
                <td className="p-4 text-gray-800 bg-white font-medium">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
