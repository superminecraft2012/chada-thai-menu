"use client";

import { useCallback } from "react";
import html2canvas from "html2canvas";

export default function ExportButton() {
  const handleExport = useCallback(async () => {
    // Hide navigation elements before capture
    const noExportElements = document.querySelectorAll('.no-print');
    noExportElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });

    try {
      const main = document.querySelector('main');
      if (!main) return;

      const canvas = await html2canvas(main as HTMLElement, {
        backgroundColor: '#5C0000',
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        width: 816, // 8.5 inches at 96 DPI
        windowWidth: 816,
      });

      // Create download link
      const link = document.createElement('a');
      link.download = `menu-page-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      // Restore navigation elements
      noExportElements.forEach(el => {
        (el as HTMLElement).style.display = '';
      });
    }
  }, []);

  return (
    <button 
      onClick={handleExport}
      className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Export
    </button>
  );
}
