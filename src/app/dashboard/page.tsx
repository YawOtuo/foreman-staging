"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProducts } from "@/lib/hooks/useProducts";
import useCart from "@/lib/hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import { FetchDashboardDetails } from "@/lib/api/dashboard";
import { useAppStore } from "@/lib/store/useAppStore";
import { DashboardData } from "@/lib/types/dashboardData";
import MetricCard from "./components/MetricCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import ProductCard from "@/components/ProductCard";
import dynamic from "next/dynamic";
import Welcome from "./components/Welcome";
import PendingOrders from "./components/PendingOrders";
import { addCommasToNumber } from "@/lib/utils/numberFormatter";
const OrderHistoryChart = dynamic(
  () => import("./components/OrderHistoryCart")
);
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

  return (
    <div className="p-5 pt-0 space-y-5">
      <h1 className="text-xl font-semibold mb-4">My Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Orders" value={userMetrics.totalOrders} />
        <MetricCard
          title="Completed Orders"
          value={userMetrics.completedOrders}
        />
        <MetricCard
          title="Total Amount Spent"
          value={`GHS ${addCommasToNumber(userMetrics.totalAmountSpent)}`}
        />
        <MetricCard title="Items in Cart" value={userMetrics.itemsInCart} />
      </div>

      <div className="pt-5 flex flex-col gap-10">
        <Welcome />
        <PendingOrders />
        <OrderHistoryChart ordersByMonth={dashboardData?.orders_by_month} />
      </div>

      <div className="mt-4 w-full flex flex-col gap-3">
        <div>
          <p className="font-semibold text-xl text-slate-600">
            Recommended Products
          </p>
        </div>
        <div className="gap-4 w-full">
          <Swiper
            className="w-full !grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
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
