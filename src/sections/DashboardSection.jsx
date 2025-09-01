import React from "react";
import { TrendingUp, Users, Calendar, CreditCard, Wallet } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "../components/ui/Card";

const DashboardSection = () => {
  const stats = {
    totalOrdered: 635857,
    ordered2025: 25576,
    remaining: 11921,
    distributed: 623936,
  };

  const subsidies = [
    { name: "Əkin", amount: 450000, color: "#22c55e" },
    { name: "Məhsul", amount: 300000, color: "#3b82f6" },
    { name: "Barama", amount: 151002, color: "#8b5cf6" },
  ];

  const monthlyData = [
    { month: "Yan", cards: 15000, subsidies: 120000 },
    { month: "Fev", cards: 18000, subsidies: 135000 },
    { month: "Mar", cards: 22000, subsidies: 150000 },
    { month: "Apr", cards: 25000, subsidies: 180000 },
    { month: "May", cards: 20000, subsidies: 165000 },
    { month: "İyn", cards: 28000, subsidies: 200000 },
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-50" id="dashboard">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h2>
          <p className="text-xl text-gray-600">Real vaxt statistika və analitika</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Ümumi sifariş</p>
                  <h3 className="text-3xl font-bold">{stats.totalOrdered.toLocaleString()}</h3>
                </div>
                <div className="p-3 bg-white/20 rounded-xl">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">2025-də sifariş</p>
                  <h3 className="text-3xl font-bold">{stats.ordered2025.toLocaleString()}</h3>
                </div>
                <div className="p-3 bg-white/20 rounded-xl">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Qalan kart</p>
                  <h3 className="text-3xl font-bold">{stats.remaining.toLocaleString()}</h3>
                </div>
                <div className="p-3 bg-white/20 rounded-xl">
                  <CreditCard className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Paylanmış</p>
                  <h3 className="text-3xl font-bold">{stats.distributed.toLocaleString()}</h3>
                </div>
                <div className="p-3 bg-white/20 rounded-xl">
                  <Users className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-2xl transition-all duration-300">
            <CardContent>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Wallet className="w-6 h-6 text-green-500" />
                Subsidiya Növləri
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subsidies}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#f8fafc',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Bar dataKey="amount" fill="#22c55e" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300">
            <CardContent>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                Aylıq Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#f8fafc',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cards" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="subsidies" 
                    stroke="#22c55e" 
                    strokeWidth={3}
                    dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;