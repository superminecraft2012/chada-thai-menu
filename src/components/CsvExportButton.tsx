"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";

export default function CsvExportButton() {
  const pathname = usePathname();

  const handleExportCsv = useCallback(async () => {
    const isSeattle = pathname.startsWith("/seattle");
    const locationName = isSeattle ? "seattle" : "lynnwood";

    const menuModule = isSeattle
      ? await import("@/data/seattleMenu")
      : await import("@/data/lynnwoodMenu");
    const categories = menuModule.menuData;

    const rows: string[] = [];
    rows.push(["Category", "Name", "Description", "Price", "Spice Level"].join("|"));

    for (const category of categories) {
      for (const item of category.items) {
        const desc = item.description.replace(/\|/g, "/");
        const name = item.name.replace(/\|/g, "/");
        const spice = item.spiceLevel != null ? String(item.spiceLevel) : "";
        rows.push([category.name, name, desc, item.price, spice].join("|"));
      }
    }

    if (categories.some((c) => c.note)) {
      rows.push("");
      rows.push("Category Notes:");
      for (const category of categories) {
        if (category.note) {
          rows.push(`${category.name}|${category.note.replace(/\|/g, "/")}`);
        }
      }
    }

    const csvContent = rows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `chada-thai-${locationName}-menu.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }, [pathname]);

  return (
    <button
      onClick={handleExportCsv}
      className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
      title="Export menu to CSV"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      CSV
    </button>
  );
}
