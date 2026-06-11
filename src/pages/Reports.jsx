import React from "react";

const Reports = () => {
  const stats = {
    total: 10,
    completed: 7,
    pending: 3
  };

  const productivity = (stats.completed / stats.total) * 100;

  return (
    <div>
      <h2>Reports Page</h2>

      <p><strong>Total Tasks:</strong> {stats.total}</p>
      <p><strong>Completed Tasks:</strong> {stats.completed}</p>
      <p><strong>Pending Tasks:</strong> {stats.pending}</p>
      <p><strong>Productivity:</strong> {productivity.toFixed(1)}%</p>
    </div>
  );
};

export default Reports;