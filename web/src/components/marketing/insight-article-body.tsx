import type { InsightBlock } from "@/content/insights";

export function InsightArticleBody({ blocks }: { blocks: readonly InsightBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="type-h3 pt-4 text-foreground first:pt-0">
              {block.text}
            </h2>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p key={i} className="type-body text-[color:var(--text-secondary)]">
              {block.text}
            </p>
          );
        }
        return (
          <ul key={i} className="type-body list-disc space-y-2 pl-5 text-[color:var(--text-secondary)]">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
