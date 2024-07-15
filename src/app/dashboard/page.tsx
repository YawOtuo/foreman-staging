"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Product } from '@/lib/types/product';
import ProductCard from '@/components/ProductCard';

// Mock data
const userMetrics = {
  totalOrders: 150,
  completedOrders: 145,
  totalAmountSpent: 12500,
  itemsInCart: 3,
};

const recommendedProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 50,
    description: 'Product 1 description',
    category: {
      id: 1,
      name: 'Category 1',
      image: 'https://via.placeholder.com/150',
      units_of_measurement: [
        {
          unit: 'unit',
          description: 'unit description',
        },
      ],
    },
    availability: 'In stock',
    variants: [],
    images: [],
  },
  {
    id: 2,
    name: 'Product 2',
    price: 75,
    description: 'Product 2 description',
    category: {
      id: 2,
      name: 'Category 2',
      image: 'https://via.placeholder.com/150',
      units_of_measurement: [
        {
          unit: 'unit',
          description: 'unit description',
        },
      ],
    },
    availability: 'In stock',
    variants: [],
    images: [],
  },
  {
    id: 3,
    name: 'Product 3',
    price: 100,
    description: 'Product 3 description',
    category: {
      id: 3,
      name: 'Category 3',
      image: 'https://via.placeholder.com/150',
      units_of_measurement: [
        {
          unit: 'unit',
          description: 'unit description',
        },
      ],
    },
    availability: 'In stock',
    variants: [],
    images: [],
  },
  {
    id: 4,
    name: 'Product 4',
    price: 125,
    description: 'Product 4 description',
    category: {
      id: 4,
      name: 'Category 4',
      image: 'https://via.placeholder.com/150',
      units_of_measurement: [
        {
          unit: 'unit',
          description: 'unit description',
        },
      ],
    },
    availability: 'In stock',
    variants: [],
    images: [],
  },
  {
    id: 5,
    name: 'Product 5',
    price: 150,
    description: 'Product 5 description',
    category: {
      id: 5,
      name: 'Category 5',
      image: 'https://via.placeholder.com/150',
      units_of_measurement: [
        {
          unit: 'unit',
          description: 'unit description',
        },
      ],
    },
    availability: 'In stock',
    variants: [],
    images: [],
  },
  {
    id: 6,
    name: 'Product 6',
    price: 175,
    description: 'Product 6 description',
    category: {
      id: 6,
      name: 'Category 6',
      image: 'https://via.placeholder.com/150',
      units_of_measurement: [
        {
          unit: 'unit',
          description: 'unit description',
        },
      ],
    },
    availability: 'In stock',
    variants: [],
    images: [],
  },
];

const orderData = [
  { month: 'Jan', orders: 10 },
  { month: 'Feb', orders: 15 },
  { month: 'Mar', orders: 20 },
  { month: 'Apr', orders: 25 },
  { month: 'May', orders: 30 },
];

const MetricCard = ({ title, value }: {
    title: any,
    value: any
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Foreman Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Orders" value={userMetrics.totalOrders} />
        <MetricCard title="Completed Orders" value={userMetrics.completedOrders} />
        <MetricCard title="Total Amount Spent" value={`$${userMetrics.totalAmountSpent.toFixed(2)}`} />
        <MetricCard title="Items in Cart" value={userMetrics.itemsInCart} />
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
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
        <CardContent className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
            {recommendedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;