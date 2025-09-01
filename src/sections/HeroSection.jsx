import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import logo from "../../public/logoktn.jpeg"
const HeroSection = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          WeeklyReport
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Fermer kartları və subsidiyaların həftəlik hesabatları üçün müasir analitik platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => setActiveSection('dashboard')}
            size="lg"
          >
            Hesabatlara bax
            <ArrowRight className="w-5 h-5" />
          </Button>
          
       
        </div>
      </div>
    </section>
  );
};

export default HeroSection;