"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  DollarSign,
  TrendingUp,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  Package,
  Star,
  LogOut,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const performanceData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
];

const productUsageData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 500 },
  { name: "Product D", value: 280 },
  { name: "Product E", value: 390 },
];

const userPurchaseData = [
  { name: "New Users", value: 2430 },
  { name: "Returning Users", value: 13320 },
];

interface Influencer {
  name: string;
  followers: string;
  engagement: string;
  commission: string;
  trend: "up" | "down";
}

const influencers: Influencer[] = [
  {
    name: "Alice Johnson",
    followers: "1.2M",
    engagement: "3.5%",
    commission: "$5,200",
    trend: "up",
  },
  {
    name: "Bob Smith",
    followers: "800K",
    engagement: "4.2%",
    commission: "$3,800",
    trend: "down",
  },
  {
    name: "Carol Williams",
    followers: "2.5M",
    engagement: "2.8%",
    commission: "$7,500",
    trend: "up",
  },
  {
    name: "David Brown",
    followers: "500K",
    engagement: "5.1%",
    commission: "$2,900",
    trend: "up",
  },
  {
    name: "Eva Davis",
    followers: "1.8M",
    engagement: "3.9%",
    commission: "$6,100",
    trend: "down",
  },
];

interface Product {
  id: number;
  name: string;
  sales: number;
  revenue: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    sales: 1200,
    revenue: "$36,000",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    sales: 950,
    revenue: "$23,750",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Ergonomic Keyboard",
    sales: 800,
    revenue: "$32,000",
    rating: 4.7,
  },
  { id: 4, name: "4K Monitor", sales: 600, revenue: "$180,000", rating: 4.9 },
  { id: 5, name: "Gaming Chair", sales: 750, revenue: "$112,500", rating: 4.6 },
];

const MotionCard = motion(Card);

const COLORS = ["#8b5cf6", "#6d28d9", "#5b21b6", "#4c1d95", "#3b0764"];

interface RedesignedDashboardProps {
  brandId: string;
}

export default function RedesignedDashboard({
  brandId,
}: RedesignedDashboardProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    console.log("Brand ID:", brandId);
  }, [brandId]);

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
    // You can use the brandId here to fetch brand-specific data
    console.log("Brand ID:", brandId);
  }, [controls, brandId]);

  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 p-8 text-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <motion.div
        className="flex justify-between items-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400"
        >
          Brand Dashboard
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={handleLogout}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12"
      >
        {[
          {
            title: "Total Influencers",
            value: "1,250",
            icon: Users,
            color: "from-purple-600 to-purple-400",
          },
          {
            title: "Total Commission",
            value: "$287,500",
            icon: DollarSign,
            color: "from-purple-500 to-purple-300",
          },
          {
            title: "Engagement Rate",
            value: "3.7%",
            icon: TrendingUp,
            color: "from-purple-400 to-purple-200",
          },
          {
            title: "Total Profit",
            value: "$1,250,000",
            icon: DollarSign,
            color: "from-purple-300 to-purple-100",
          },
        ].map((item, index) => (
          <motion.div key={item.title} variants={itemVariants}>
            <MotionCard
              className={`bg-gradient-to-br ${item.color} rounded-xl overflow-hidden`}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <CardContent className="p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <item.icon className="w-8 h-8 mb-4" />
                </motion.div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <motion.p
                  className="text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {item.value}
                </motion.p>
                <motion.div
                  className="mt-4 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={{ width: activeCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </motion.div>
              </CardContent>
            </MotionCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid gap-8 md:grid-cols-2 mb-12"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-purple-800 bg-opacity-50 rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div variants={chartVariants}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="name" stroke="#A78BFA" />
                    <YAxis stroke="#A78BFA" />
                    <Tooltip
                      contentStyle={{
                        background: "rgba(124, 58, 237, 0.8)",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      itemStyle={{ color: "#ffffff" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#C4B5FD"
                      strokeWidth={3}
                      dot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-purple-800 bg-opacity-50 rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Top Influencers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center bg-purple-700 bg-opacity-50 rounded-lg p-3">
                  <Search className="w-5 h-5 mr-2 text-purple-300" />
                  <Input
                    placeholder="Search influencers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-none text-white placeholder-purple-300 focus:ring-0"
                  />
                </div>
                <AnimatePresence>
                  {filteredInfluencers.slice(0, 3).map((influencer, index) => (
                    <motion.div
                      key={influencer.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between bg-purple-700 bg-opacity-30 rounded-lg p-3"
                    >
                      <div className="flex items-center">
                        <Avatar className="w-10 h-10 mr-3">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40`}
                            alt={influencer.name}
                          />
                          <AvatarFallback>
                            {influencer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">
                            {influencer.name}
                          </p>
                          <p className="text-sm text-purple-300">
                            {influencer.followers} followers
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">
                          {influencer.commission}
                        </p>
                        <motion.p
                          className={`text-sm flex items-center ${
                            influencer.trend === "up"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.1,
                          }}
                        >
                          {influencer.trend === "up" ? (
                            <ArrowUpRight className="w-4 h-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 mr-1" />
                          )}
                          {influencer.engagement}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid gap-8 md:grid-cols-2 mb-12"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-purple-800 bg-opacity-50 rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Users Purchased
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Total Users", value: "15,750" },
                  { label: "New Users (30 days)", value: "2,430" },
                  { label: "Returning Users", value: "13,320" },
                  { label: "Avg. Purchase Value", value: "$85.50" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="bg-purple-700 bg-opacity-30 rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <p className="text-sm text-purple-300">{item.label}</p>
                    <p className="text-2xl font-bold text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  User Distribution
                </h3>
                <motion.div variants={chartVariants}>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={userPurchaseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {userPurchaseData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          background: "rgba(124, 58, 237, 0.8)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                        itemStyle={{ color: "#ffffff" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>
                <div className="flex justify-center space-x-4 mt-4">
                  {userPurchaseData.map((entry, index) => (
                    <motion.div
                      key={entry.name}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                      <span className="text-sm text-white">{entry.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-purple-800 bg-opacity-50 rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Most Used Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {productUsageData.map((product, index) => (
                  <motion.div
                    key={product.name}
                    className="bg-purple-700 bg-opacity-30 rounded-lg p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">
                        {product.name}
                      </span>
                      <span className="text-sm text-purple-300">
                        {product.value} uses
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(product.value / 500) * 100}%` }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Progress value={product.value / 5} className="h-2" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Product Usage Distribution
                </h3>
                <motion.div variants={chartVariants}>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={productUsageData}>
                      <XAxis dataKey="name" stroke="#A78BFA" />
                      <YAxis stroke="#A78BFA" />
                      <Tooltip
                        contentStyle={{
                          background: "rgba(124, 58, 237, 0.8)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                        itemStyle={{ color: "#ffffff" }}
                      />
                      <Bar dataKey="value" fill="#C4B5FD" />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mb-12"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-purple-800 bg-opacity-50 rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Detailed Product List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-600">
                      <th className="text-left p-2 text-purple-300">Product</th>
                      <th className="text-left p-2 text-purple-300">Sales</th>
                      <th className="text-left p-2 text-purple-300">Revenue</th>
                      <th className="text-left p-2 text-purple-300">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <motion.tr
                        key={product.id}
                        className="border-b border-purple-700 hover:bg-purple-700 hover:bg-opacity-30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <td className="p-2 text-white">{product.name}</td>
                        <td className="p-2">
                          <Badge
                            variant="secondary"
                            className="bg-purple-600 text-white"
                          >
                            {product.sales.toLocaleString()}
                          </Badge>
                        </td>
                        <td className="p-2 text-white">{product.revenue}</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <span className="mr-2 text-white">
                              {product.rating}
                            </span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.1 * star,
                                  }}
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      star <= product.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-400"
                                    }`}
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
