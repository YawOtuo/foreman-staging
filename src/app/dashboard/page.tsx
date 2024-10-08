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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode } from "swiper/modules";

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
    queryFn: () => FetchDashboardDetails(Number(DBDetails?.id)),
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
    <div className="p-5 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">My Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Orders" value={userMetrics.totalOrders} />
        <MetricCard
          title="Completed Orders"
          value={userMetrics.completedOrders}
        />
        <MetricCard
          title="Total Amount Spent"
          value={`GHS ${userMetrics.totalAmountSpent?.toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )}`}
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

      <div className="mt-4 w-full flex flex-col gap-3">
        <div>
          <p className="font-semibold text-2xl">Recommended Products</p>
        </div>
        <div className=" gap-4 w-full">
          <Swiper
            className="w-full !grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 "
            loop={true}
            spaceBetween={25}
            slidesPerView={"auto"}
            modules={[Autoplay, FreeMode]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}>
            {allProducts?.slice(0, 6).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
