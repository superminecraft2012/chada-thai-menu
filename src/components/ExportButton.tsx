"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState("");
  const pathname = usePathname();

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    
    try {
      const { domToPng } = await import("modern-screenshot");
      
      // Determine if we're in Lynnwood or Seattle
      const isSeattle = pathname.startsWith("/seattle");
      const basePath = isSeattle ? "/seattle" : "/lynnwood";
      const locationName = isSeattle ? "seattle" : "lynnwood";
      
      // Get menu data dynamically
      const menuModule = isSeattle 
        ? await import("@/data/seattleMenu")
        : await import("@/data/lynnwoodMenu");
      const categories = menuModule.menuData;
      
      // Create a hidden iframe to render each page
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.top = '-10000px';
      iframe.style.left = '-10000px';
      iframe.style.width = '900px';
      iframe.style.height = '5000px';
      document.body.appendChild(iframe);
      
      const downloadedFiles: string[] = [];
      
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        setProgress(`Exporting ${i + 1}/${categories.length}: ${category.name}`);
        
        // Navigate iframe to the category page
        const pageUrl = `${window.location.origin}${basePath}/${category.slug}`;
        
        await new Promise<void>((resolve) => {
          iframe.onload = () => {
            setTimeout(async () => {
              try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                if (iframeDoc) {
                  const content = iframeDoc.querySelector('main > div');
                  if (content) {
                    const dataUrl = await domToPng(content as HTMLElement, {
                      backgroundColor: '#5C0000',
                      scale: 2,
                      quality: 1,
                    });
                    
                    // Download the image
                    const link = document.createElement('a');
                    const fileName = `${locationName}-${String(i + 1).padStart(2, '0')}-${category.slug}.png`;
                    link.download = fileName;
                    link.href = dataUrl;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    downloadedFiles.push(fileName);
                  }
                }
              } catch (e) {
                console.error(`Failed to export ${category.name}:`, e);
              }
              resolve();
            }, 1500); // Wait for page to fully render
          };
          iframe.src = pageUrl;
        });
        
        // Small delay between downloads
        await new Promise(r => setTimeout(r, 500));
      }
      
      // Cleanup
      document.body.removeChild(iframe);
      setProgress(`Done! Exported ${downloadedFiles.length} pages.`);
      setTimeout(() => setProgress(""), 3000);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [pathname]);

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
          {progress || "Exporting..."}
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export All
        </>
      )}
    </button>
  );
}
