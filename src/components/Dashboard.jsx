import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dashboardData } from "../data/mockdata";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-xl font-bold">Analytics Dashboard</h2>
      
      <div className="h-64">
        <h3 className="mb-2">Inputs Received (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardData.inputs.map((val, index) => ({ name: `Sample ${index + 1}`, value: val }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="h-64">
        <h3 className="mb-2">Model Accuracy Over Time (Line Chart)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dashboardData.performance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="accuracy" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
