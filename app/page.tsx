'use client'

import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

// Dummy data for Sales Over Time (Line Chart)
const salesData = [
  { month: 'Jan', sales: 4000, target: 3800 },
  { month: 'Feb', sales: 3000, target: 3500 },
  { month: 'Mar', sales: 5000, target: 4200 },
  { month: 'Apr', sales: 4500, target: 4500 },
  { month: 'May', sales: 6000, target: 5000 },
  { month: 'Jun', sales: 5500, target: 5200 },
  { month: 'Jul', sales: 7000, target: 6000 },
]

// Dummy data for Product Comparison (Bar Chart)
const productData = [
  { product: 'Product A', units: 4000, revenue: 2400 },
  { product: 'Product B', units: 3000, revenue: 1398 },
  { product: 'Product C', units: 2000, revenue: 9800 },
  { product: 'Product D', units: 2780, revenue: 3908 },
  { product: 'Product E', units: 1890, revenue: 4800 },
]

// Dummy data for Market Share (Pie Chart)
const marketShareData = [
  { name: 'Company A', value: 400 },
  { name: 'Company B', value: 300 },
  { name: 'Company C', value: 300 },
  { name: 'Company D', value: 200 },
  { name: 'Others', value: 150 },
]

// Dummy data for User Growth (Area Chart)
const userGrowthData = [
  { month: 'Jan', users: 1000, activeUsers: 800 },
  { month: 'Feb', users: 1500, activeUsers: 1200 },
  { month: 'Mar', users: 2200, activeUsers: 1800 },
  { month: 'Apr', users: 3100, activeUsers: 2500 },
  { month: 'May', users: 4200, activeUsers: 3400 },
  { month: 'Jun', users: 5500, activeUsers: 4500 },
  { month: 'Jul', users: 7000, activeUsers: 5800 },
]

// Dummy data for Performance Metrics (Scatter Chart)
const performanceData = [
  { hours: 1, score: 65 },
  { hours: 2, score: 72 },
  { hours: 3, score: 78 },
  { hours: 4, score: 85 },
  { hours: 5, score: 88 },
  { hours: 6, score: 92 },
  { hours: 7, score: 95 },
  { hours: 8, score: 97 },
  { hours: 9, score: 94 },
  { hours: 10, score: 98 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Visual Dashboard</h1>
        <p className="text-gray-600 mb-8">Interactive data visualizations with dummy data</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart - Sales Over Time */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sales Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Product Comparison */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="units" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Market Share */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Market Share Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketShareData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart - User Growth */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Growth Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="activeUsers" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Chart - Performance Metrics */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance vs Hours Invested</h2>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="hours" name="hours" unit=" hrs" />
                <YAxis type="number" dataKey="score" name="score" unit=" pts" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Performance Score" data={performanceData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Built with Next.js, TypeScript, and Recharts</p>
        </footer>
      </div>
    </main>
  )
}
