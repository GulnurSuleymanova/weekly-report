import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              
              <span className="text-2xl font-bold">WeeklyReport</span>
            </div>
            <p className="text-gray-400">
              Kənd təsərrüfatı sektorunda hesabatların idarə edilməsi üçün müasir həll
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Xidmətlər</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Fermer kartları</li>
              <li>Subsidiya hesabatları</li>
              <li>Analitik dashboard</li>
              <li>Məlumat analizi</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Əlaqə</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +994 12 XXX XX XX</p>
              <p>📧 </p>
              <p>📍 Bakı şəhəri, Azərbaycan</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 Gulnur Suleymanova. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
