"use client";

import { useCallback, useState } from "react";

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    
    try {
      // Dynamically import html2canvas
      const html2canvas = (await import("html2canvas")).default;
      
      // Get the main content area
      const main = document.querySelector('main');
      if (!main) {
        alert('Could not find content to export');
        return;
      }

      // Hide elements we don't want in the export
      const noExportElements = document.querySelectorAll('.no-print, nav, footer');
      const originalStyles: { el: HTMLElement; display: string }[] = [];
      
      noExportElements.forEach(el => {
        const htmlEl = el as HTMLElement;
        originalStyles.push({ el: htmlEl, display: htmlEl.style.display });
        htmlEl.style.display = 'none';
      });

      // Capture the page
      const canvas = await html2canvas(main as HTMLElement, {
        backgroundColor: '#5C0000',
        scale: 2,
        useCORS: true,
        logging: false,
      });

      // Restore hidden elements
      originalStyles.forEach(({ el, display }) => {
        el.style.display = display;
      });

      // Download the image
      const link = document.createElement('a');
      const pageName = window.location.pathname.split('/').filter(Boolean).join('-') || 'home';
      link.download = `chada-thai-${pageName}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <button 
      onClick={handleExport}
      disabled={isExporting}
      className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors disabled:opacity-50"
    >
      {isExporting ? (
        <>
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Exporting...
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </>
      )}
    </button>
  );
}
