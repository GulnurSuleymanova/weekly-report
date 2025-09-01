import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import fermercard from "../../public/fermercard.png";

const CardsSection = () => {
  const defaultData = [
    { title: "Sifariş olunmuş ümumi", value: "635,857", change: "+", color: "green" },
    { title: "Sifariş olunmuş 2025", value: "25,576", change: "+", color: "blue" },
    { title: "Region filiallarında qalan", value: "11,921", change: "-", color: "red" },
    { title: "Paylanılmış kart sayı", value: "623,936", change: "+", color: "green" }
  ];

  const [cardStats, setCardStats] = useState(() => {
    const stored = localStorage.getItem("cardStats");
    return stored ? JSON.parse(stored) : defaultData;
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...cardStats];
    updated[index][field] = value;
    setCardStats(updated);
  };

  const handleSave = (index) => {
    localStorage.setItem("cardStats", JSON.stringify(cardStats));
    setEditIndex(null);
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-green-50 to-yellow-50" id="cards">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Fermer Kartları</h2>
          <p className="text-xl text-gray-600">Kart statistikaları və detalları</p>
        </div>

        <div className="flex justify-center mb-12">
          <img 
            src={fermercard} 
            alt="Fermer Kartı" 
            className="w-full max-w-lg rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cardStats.map((stat, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300">
              <CardContent>
                <div className="text-center space-y-2">
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={stat.title}
                        onChange={(e) => handleChange(index, "title", e.target.value)}
                        className="text-gray-600 font-medium text-center w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => handleChange(index, "value", e.target.value)}
                        className="text-3xl font-bold text-gray-800 text-center w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <select
                        value={stat.change}
                        onChange={(e) => handleChange(index, "change", e.target.value)}
                        className={`text-sm font-medium ${stat.color === "green" ? "text-green-600" : stat.color === "blue" ? "text-blue-600" : stat.color === "red" ? "text-red-600" : "text-purple-600"} text-center`}
                      >
                        <option value="+">+</option>
                        <option value="-">-</option>
                      </select>
                      <button
                        onClick={() => handleSave(index)}
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <h4 className="text-gray-600 mb-2">{stat.title}</h4>
                      <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
                      <div className={`text-sm font-medium flex items-center justify-center gap-1 ${
                        stat.color === 'green' ? 'text-green-600' : 
                        stat.color === 'blue' ? 'text-blue-600' :
                        stat.color === 'red' ? 'text-red-600' : 'text-purple-600'
                      }`}>
                        {stat.change === "+" ? <TrendingUp className="w-4 h-4"/> : <TrendingDown className="w-4 h-4"/>}
                        {stat.change}
                      </div>
                      <button
                        onClick={() => setEditIndex(index)}
                        className="mt-2 px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
