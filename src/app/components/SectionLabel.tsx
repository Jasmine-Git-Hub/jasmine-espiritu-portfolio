export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div data-reveal className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-mist md:mb-16">
      <span className="text-azure">{index}</span>
      <span className="h-px w-12 bg-mist/40" />
      <span>{children}</span>
    </div>
  );
}
