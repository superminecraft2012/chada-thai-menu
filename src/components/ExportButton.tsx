"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ExportButton() {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const exportCurrentPage = async () => {
    const { domToPng } = await import("modern-screenshot");
    
    const content = document.getElementById('export-content') || document.querySelector('main > div');
    if (!content) return null;

    const dataUrl = await domToPng(content as HTMLElement, {
      backgroundColor: '#5C0000',
      scale: 2,
    });
    
    return dataUrl;
  };

  const downloadImage = (dataUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  };

  const handleExportAll = useCallback(async () => {
    setIsExporting(true);
    
    try {
      // Determine if we're in Lynnwood or Seattle
      const isSeattle = pathname.startsWith("/seattle");
      const basePath = isSeattle ? "/seattle" : "/lynnwood";
      const locationName = isSeattle ? "seattle" : "lynnwood";
      
      // Get menu data
      const menuModule = isSeattle 
        ? await import("@/data/seattleMenu")
        : await import("@/data/lynnwoodMenu");
      const categories = menuModule.menuData;
      
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        setProgress(`${i + 1}/${categories.length}: ${category.name}`);
        
        // Navigate to the page
        const targetPath = `${basePath}/${category.slug}`;
        if (pathname !== targetPath) {
          router.push(targetPath);
          // Wait for navigation and render
          await new Promise(r => setTimeout(r, 1000));
        }
        
        // Export the page
        const dataUrl = await exportCurrentPage();
        if (dataUrl) {
          const fileName = `${locationName}-${String(i + 1).padStart(2, '0')}-${category.slug}.png`;
          downloadImage(dataUrl, fileName);
        }
        
        // Small delay between downloads
        await new Promise(r => setTimeout(r, 300));
      }
      
      setProgress("Done!");
      setTimeout(() => setProgress(""), 2000);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [pathname, router]);

  return (
    <button 
      onClick={handleExportAll}
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
