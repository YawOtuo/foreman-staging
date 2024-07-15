"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Product } from "@/lib/types/product";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/lib/hooks/useProducts";
import useCart from "@/lib/hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import { FetchDashboardDetails } from "@/lib/api/dashboard";
import { useAppStore } from "@/lib/store/useAppStore";
import { DashboardData } from "@/lib/types/dashboardData";
import MetricCard from "./components/MetricCard";

const getMonthName = (monthNumber: number) => {
  const date = new Date(Date.UTC(2000, monthNumber - 1, 1)); // Date in the year 2000, monthNumber is 1-based
  return date.toLocaleString("default", { month: "short" });
};

const orderData = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Dashboard = () => {
  const { allProducts } = useProducts();
  const { cart } = useCart();
  const { DBDetails } = useAppStore();
  const {
    data: dashboardData,
    isLoading: isDashboardDataLoading,
    error: isDashboardDataError,
  } = useQuery<DashboardData>({
    queryKey: ["dashboard-details"],
    queryFn: () => FetchDashboardDetails(DBDetails?.id),
    enabled: !!DBDetails?.id,
  });

  const userMetrics = {
    totalOrders: dashboardData?.total_orders,
    completedOrders: dashboardData?.total_completed_orders,
    totalAmountSpent: dashboardData?.total_cost_spent,
    itemsInCart: cart.items.length,
  };

  const allMonths = Array.from({ length: 12 }, (_, index) => index + 1);

  const transformedData = allMonths.map((monthNumber) => {
    const foundMonth = dashboardData?.orders_by_month.find(
      (item) => item.month === monthNumber
    );
    return {
      month: getMonthName(monthNumber),
      orders: foundMonth ? foundMonth.total_orders : 0,
    };
  });
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Foreman Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Orders" value={userMetrics.totalOrders} />
        <MetricCard
          title="Completed Orders"
          value={userMetrics.completedOrders}
        />
        <MetricCard
          title="Total Amount Spent"
          value={`GHS ${userMetrics.totalAmountSpent?.toFixed(2)}`}
        />
        <MetricCard title="Items in Cart" value={userMetrics.itemsInCart} />
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={transformedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="mt-4 w-full">
        <CardHeader>
          <CardTitle>Recommended Products</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {allProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
