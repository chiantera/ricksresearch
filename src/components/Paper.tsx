import React from "react";

interface Props {
  file: string;
  title: string;
  abstract?: string;
}

export default function Paper({ file, title, abstract }: Props) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {abstract && (
        <p className="text-gray-700 italic mb-4">{abstract}</p>
      )}
      <iframe
        src={`/${file}`}
        className="w-full h-[80vh] border"
        title={title}
      />
      <div className="mt-8">
        <a
          href={`/${file}`}
          download
          className="text-3xl bg-blue-600 text-white px-10 py-10 rounded hover:bg-blue-800"
        >
          Download for free
        </a>
      </div>
    </div>
  );
}
