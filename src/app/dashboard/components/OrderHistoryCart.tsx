"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface OrderHistoryChartProps {
  ordersByMonth: Array<{ month: number; total_orders: number }> | undefined;
}

const getMonthName = (monthNumber: number) => {
  const date = new Date(Date.UTC(2000, monthNumber - 1, 1)); // Date in the year 2000, monthNumber is 1-based
  return date.toLocaleString("default", { month: "short" });
};

const OrderHistoryChart: React.FC<OrderHistoryChartProps> = ({
  ordersByMonth,
}) => {
  const allMonths = Array.from({ length: 12 }, (_, index) => index + 1);

  const transformedData = allMonths.map((monthNumber) => {
    const foundMonth = ordersByMonth?.find(
      (item) => item.month === monthNumber
    );
    return {
      month: getMonthName(monthNumber),
      orders: foundMonth ? foundMonth.total_orders : 0,
    };
  });

  return (
    <div className="flex flex-col gap-5">
      <p className="text-slate-600 font-semibold text-xl">My Order History</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderHistoryChart;
