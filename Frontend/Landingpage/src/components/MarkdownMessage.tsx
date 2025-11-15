import React from 'react';

interface MarkdownMessageProps {
  text: string;
  className?: string;
}

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ text, className = '' }) => {
  // Parse markdown tables and format them
  const parseMessage = (content: string) => {
    const parts: JSX.Element[] = [];
    const lines = content.split('\n');
    let i = 0;
    let keyCounter = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Skip empty lines
      if (!line.trim()) {
        i++;
        continue;
      }

      // Check if this line contains a table (has multiple | characters)
      if ((line.match(/\|/g)?.length || 0) >= 2) {
        const tableLines: string[] = [];
        
        // Collect all consecutive lines with tables
        while (i < lines.length && (lines[i].match(/\|/g)?.length || 0) >= 2) {
          tableLines.push(lines[i]);
          i++;
        }

        // Parse table
        if (tableLines.length >= 2) {
          const headers = tableLines[0]
            .split('|')
            .map(h => h.trim())
            .filter(h => h);
          
          // Find separator line or skip to data rows
          let dataStartIdx = 1;
          if (tableLines[1].includes('---') || tableLines[1].includes('===')) {
            dataStartIdx = 2;
          }
          
          const rows = tableLines.slice(dataStartIdx).map(row =>
            row.split('|').map(cell => cell.trim()).filter(cell => cell)
          ).filter(row => row.length > 0 && !row.every(cell => cell.includes('---')));

          if (headers.length > 0 && rows.length > 0) {
            parts.push(
              <div key={`table-${keyCounter++}`} className="my-6 overflow-x-auto rounded-lg border border-green-500/30 shadow-2xl">
                <table className="min-w-full border-collapse">
                  <thead className="bg-gradient-to-r from-green-900/60 to-emerald-900/60">
                    <tr>
                      {headers.map((header, idx) => (
                        <th
                          key={idx}
                          className="px-6 py-4 text-left text-sm font-bold text-green-300 uppercase tracking-wider border-b-2 border-green-500/50"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900/50 backdrop-blur-sm">
                    {rows.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className={`${
                          rowIdx % 2 === 0 ? 'bg-gray-800/40' : 'bg-gray-900/40'
                        } hover:bg-green-900/30 transition-all duration-200 border-b border-green-500/10`}
                      >
                        {row.map((cell, cellIdx) => (
                          <td
                            key={cellIdx}
                            className="px-6 py-4 text-sm text-gray-200 font-medium"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        }
        continue;
      }

      // Check for bullet points
      if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*')) {
        const bulletLines: string[] = [];
        while (
          i < lines.length &&
          (lines[i].trim().startsWith('•') || lines[i].trim().startsWith('-') || lines[i].trim().startsWith('*'))
        ) {
          bulletLines.push(lines[i]);
          i++;
        }

        parts.push(
          <ul key={`list-${keyCounter++}`} className="my-4 ml-4 space-y-2">
            {bulletLines.map((bullet, idx) => {
              const text = bullet.replace(/^[•\-\*]\s*/, '').trim();
              // Process bold text in bullets
              const textParts = text.split(/\*\*(.*?)\*\*/g);
              return (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <span className="text-gray-300 flex-1 leading-relaxed">
                    {textParts.map((part, pidx) =>
                      pidx % 2 === 0 ? (
                        <span key={pidx}>{part}</span>
                      ) : (
                        <strong key={pidx} className="font-bold text-green-300">
                          {part}
                        </strong>
                      )
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        );
        continue;
      }

      // Check for headers (###, ##, #) - must come before bold check
      if (line.trim().startsWith('###')) {
        parts.push(
          <h4 key={`h4-${keyCounter++}`} className="text-lg font-bold text-green-400 mt-6 mb-3">
            {line.replace(/^###\s*/, '')}
          </h4>
        );
        i++;
        continue;
      }

      if (line.trim().startsWith('##')) {
        parts.push(
          <h3 key={`h3-${keyCounter++}`} className="text-xl font-bold text-green-300 mt-6 mb-3">
            {line.replace(/^##\s*/, '')}
          </h3>
        );
        i++;
        continue;
      }

      if (line.trim().startsWith('#')) {
        parts.push(
          <h2 key={`h2-${keyCounter++}`} className="text-2xl font-bold text-green-300 mt-6 mb-4">
            {line.replace(/^#\s*/, '')}
          </h2>
        );
        i++;
        continue;
      }

      // Regular paragraph with bold text and emoji support
      if (line.trim()) {
        const textParts = line.split(/\*\*(.*?)\*\*/g);
        parts.push(
          <p key={`p-${keyCounter++}`} className="my-3 text-gray-300 leading-relaxed text-base">
            {textParts.map((part, idx) =>
              idx % 2 === 0 ? (
                <span key={idx}>{part}</span>
              ) : (
                <strong key={idx} className="font-bold text-green-300">
                  {part}
                </strong>
              )
            )}
          </p>
        );
      }

      i++;
    }

    return parts;
  };

  return <div className={className}>{parseMessage(text)}</div>;
};
