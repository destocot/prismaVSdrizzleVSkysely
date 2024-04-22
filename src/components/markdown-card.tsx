"use client";

import { useMdStore } from "@/lib/store";

export const MarkdownCard = () => {
  const markdown = useMdStore((state) => state.markdown);

  return (
    <div className="prose prose-invert p-2 border border-white/5 mt-2 bg-white/5">
      <h2>Code</h2>
      <pre>
        <code>{markdown}</code>
      </pre>
    </div>
  );
};
