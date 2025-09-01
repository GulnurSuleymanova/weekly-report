import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SubsidiesSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const getData = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(key);
      const parsed = saved ? JSON.parse(saved) : defaultValue;
      return Array.isArray(parsed) ? parsed : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const [cropData, setCropData] = useState(
    getData("cropData", [
      { type: "Subsidiyaya ödənilən fermer sayı", Yazlıq: 1000, Payızlıq: 800, Çoxillik: 200, Cəmi: 2000 },
      { type: "Subsidiyaya ödənilən bəyən sayı", Yazlıq: 500, Payızlıq: 400, Çoxillik: 100, Cəmi: 1000 },
      { type: "Subsidiyaya ödənilən ərazi (ha)", Yazlıq: 1200, Payızlıq: 950, Çoxillik: 250, Cəmi: 2400 },
      { type: "Cəmi ödənilən məbləğ", Yazlıq: 500000, Payızlıq: 400000, Çoxillik: 100000, Cəmi: 1000000 }
    ])
  );

  const [productData, setProductData] = useState(
    getData("productData", [
      { name: "Buğda", farmers: 1000, pk: 2000, weight: 50, subsidy: 50000 },
      { name: "Pambıq", farmers: 800, pk: 1600, weight: 40, subsidy: 40000 },
      { name: "Şəkər çuğunduru", farmers: 500, pk: 1000, weight: 30, subsidy: 30000 },
      { name: "Kartof", farmers: 400, pk: 800, weight: 20, subsidy: 20000 },
      { name: "Yarpaqlı tərəvəz", farmers: 361, pk: 1246, weight: 97.832, subsidy: 916591 }
    ])
  );

  const [silkData, setSilkData] = useState(
    getData("silkData", [
      { name: "Kümçü sayı", value: 1683 },
      { name: "Müraciət sayı", value: 3189 },
      { name: "Təhvil verilən miqdar (kq)", value: 150167 },
      { name: "Ödənilən məbləğ (AZN)", value: 901002 }
    ])
  );

  const [animalData, setAnimalData] = useState(
    getData("animalData", [
      { name: "Subsidiya ödənilən fermer sayı", value: 25318 },
      { name: "Subsidiya ödənilən buzov sayı", value: 42441 },
      { name: "Ödənilən subsidiya məbləği (AZN)", value: 4244100 }
    ])
  );

  useEffect(() => {
    localStorage.setItem("cropData", JSON.stringify(cropData));
    localStorage.setItem("productData", JSON.stringify(productData));
    localStorage.setItem("silkData", JSON.stringify(silkData));
    localStorage.setItem("animalData", JSON.stringify(animalData));
  }, [cropData, productData, silkData, animalData]);

  const handleChange = (rowIndex, key, value, setData, data) => {
    const updated = [...data];
    updated[rowIndex][key] = isNaN(value) ? value : Number(value);
    setData(updated);
  };

  const accordions = [
    { id: 1, title: "Əkin subsidiyası – Fəsillər", data: cropData, setData: setCropData, type: "crop" },
    { id: 2, title: "Məhsul subsidiyası", data: productData, setData: setProductData, type: "product" },
    { id: 3, title: "Barama subsidiyası", data: silkData, setData: setSilkData, type: "simple" },
    { id: 4, title: "Heyvan subsidiyası (2025)", data: animalData, setData: setAnimalData, type: "simple" }
  ];

  const headerStats = [
    { title: "Əkin subsidiyası", value: cropData[3]?.Cəmi?.toLocaleString() || "0", color: "from-green-500 to-green-300" },
    { title: "Məhsul subsidiyası", value: productData.reduce((a, b) => a + (b.subsidy || 0), 0).toLocaleString(), color: "from-yellow-500 to-yellow-300" },
    { title: "Barama subsidiyası", value: silkData[3]?.value?.toLocaleString() || "0", color: "from-purple-500 to-purple-300" },
    { title: "Heyvan subsidiyası", value: animalData[2]?.value?.toLocaleString() || "0", color: "from-red-500 to-red-300" }
  ];

  return (
    <section className="min-h-screen py-20 bg-green-50" id="subsidies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Kənd Təsərrüfatı Subsidiyaları</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {headerStats.map((stat, idx) => (
              <div
                key={idx}
                className={`rounded-xl shadow-lg p-6 text-white font-semibold text-center relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all bg-gradient-to-br ${stat.color}`}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-20 rounded-full"></div>
                <h3 className="text-lg mb-2">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value} ₼</p>
              </div>
            ))}
          </div>

          {accordions.map((acc) => (
            <div key={acc.id} className="mb-6 border border-green-500 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-3 bg-green-100 font-semibold text-gray-800 hover:bg-green-200 transition"
                onClick={() => toggleAccordion(acc.id)}
              >
                <span>{acc.title}</span>
                {activeAccordion === acc.id ? <ChevronUp /> : <ChevronDown />}
              </button>

              {activeAccordion === acc.id && Array.isArray(acc.data) && (
                <div className="p-6 bg-white animate-slide-down overflow-x-auto">
                  {acc.type === "crop" && (
                    <table className="w-full text-left border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="border border-gray-300 px-4 py-2">Tip</th>
                          <th className="border border-gray-300 px-4 py-2">Yazlıq</th>
                          <th className="border border-gray-300 px-4 py-2">Payızlıq</th>
                          <th className="border border-gray-300 px-4 py-2">Çoxillik</th>
                          <th className="border border-gray-300 px-4 py-2">Cəmi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {acc.data.map((row, idx) => (
                          <tr key={idx} className="odd:bg-white even:bg-green-50">
                            <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                            {["Yazlıq", "Payızlıq", "Çoxillik", "Cəmi"].map((col) => (
                              <td key={col} className="border border-gray-300 px-4 py-2">
                                <input
                                  type="number"
                                  value={row[col]}
                                  onChange={(e) => handleChange(idx, col, e.target.value, acc.setData, acc.data)}
                                  className="w-full border-none focus:ring-0"
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {acc.type === "product" && (
                    <table className="w-full text-left border-collapse border border-green-500">
                      <thead>
                        <tr className="bg-yellow-50">
                          <th className="border border-green-500 px-4 py-2">Məhsul adı</th>
                          <th className="border border-green-500 px-4 py-2">Fermer say</th>
                          <th className="border border-green-500 px-4 py-2">PK say</th>
                          <th className="border border-green-500 px-4 py-2">Çəki (ton)</th>
                          <th className="border border-green-500 px-4 py-2">Subsidiya məbləği</th>
                        </tr>
                      </thead>
                      <tbody>
                        {acc.data.map((row, idx) => (
                          <tr key={idx} className="odd:bg-white even:bg-yellow-50">
                            {["name", "farmers", "pk", "weight", "subsidy"].map((col) => (
                              <td key={col} className="border border-green-500 px-4 py-2">
                                <input
                                  type={col === "name" ? "text" : "number"}
                                  value={row[col] || 0}
                                  onChange={(e) => handleChange(idx, col, e.target.value, acc.setData, acc.data)}
                                  className="w-full border-none focus:ring-0"
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {acc.type === "simple" && (
                    <table className="w-full text-left border-collapse border border-green-500">
                      <thead>
                        <tr className="bg-purple-50">
                          <th className="border border-green-500 px-4 py-2">Göstərici</th>
                          <th className="border border-green-500 px-4 py-2">Məlumat</th>
                        </tr>
                      </thead>
                      <tbody>
                        {acc.data.map((row, idx) => (
                          <tr key={idx} className="odd:bg-white even:bg-purple-50">
                            <td className="border border-green-500 px-4 py-2">{row.name}</td>
                            <td className="border border-green-500 px-4 py-2">
                              <input
                                type="number"
                                value={row.value || 0}
                                onChange={(e) => handleChange(idx, "value", e.target.value, acc.setData, acc.data)}
                                className="w-full border-none focus:ring-0"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidiesSection;
