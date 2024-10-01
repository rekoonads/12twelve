"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  Star,
  TrendingUp,
  ChevronUp,
  ChevronDown,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

interface InfluencerData {
  name: string;
  username: string;
  bio: string;
  followers: {
    instagram: number;
    twitter: number;
    youtube: number;
  };
  profileImage: string;
}

interface ChartData {
  month: string;
  amount?: number;
  rate?: number;
  users?: number;
}

interface BrandData {
  name: string;
  logo: string;
  engagement: number;
}

const mockInfluencerData: InfluencerData = {
  name: "Alex Johnson",
  username: "@alexjohnson",
  bio: "Lifestyle & Tech Influencer | Sharing daily inspirations and gadget reviews",
  followers: {
    instagram: 500000,
    twitter: 250000,
    youtube: 750000,
  },
  profileImage: "/placeholder.svg?height=200&width=200",
};

const mockEarningsData: ChartData[] = [
  { month: "Jan", amount: 5000 },
  { month: "Feb", amount: 7000 },
  { month: "Mar", amount: 6500 },
  { month: "Apr", amount: 8000 },
  { month: "May", amount: 10000 },
  { month: "Jun", amount: 11000 },
];

const mockEngagementData: ChartData[] = [
  { month: "Jan", rate: 3.2 },
  { month: "Feb", rate: 3.5 },
  { month: "Mar", rate: 3.8 },
  { month: "Apr", rate: 4.2 },
  { month: "May", rate: 4.5 },
  { month: "Jun", rate: 4.8 },
];

const mockInfluencedUsersData: ChartData[] = [
  { month: "Jan", users: 10000 },
  { month: "Feb", users: 15000 },
  { month: "Mar", users: 18000 },
  { month: "Apr", users: 22000 },
  { month: "May", users: 28000 },
  { month: "Jun", users: 35000 },
];

const mockBrands: BrandData[] = [
  {
    name: "TechGiant",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 85,
  },
  {
    name: "FashionNova",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 92,
  },
  {
    name: "GreenEats",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 78,
  },
  {
    name: "FitLife",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 88,
  },
];

const mockRanking = 7;

function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

export default function InfluencerDashboard() {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"earnings" | "engagement">(
    "earnings"
  );

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <header className="text-center mb-12">
          <motion.h1
            className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Influencer Dashboard
          </motion.h1>
          <motion.p
            className="text-xl text-purple-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your performance at a glance
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-24 h-24 border-4 border-purple-300">
                  <AvatarImage
                    src={mockInfluencerData.profileImage}
                    alt={mockInfluencerData.name}
                  />
                  <AvatarFallback>
                    {mockInfluencerData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-purple-100 mb-2">
                    {mockInfluencerData.name}
                  </h2>
                  <p className="text-xl text-purple-200 mb-2">
                    {mockInfluencerData.username}
                  </p>
                  <p className="text-sm text-purple-300 mb-4">
                    {mockInfluencerData.bio}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center">
                      <Instagram className="w-5 h-5 mr-2 text-purple-300" />
                      <span className="text-purple-100">
                        {isClient
                          ? formatNumber(mockInfluencerData.followers.instagram)
                          : "---"}{" "}
                        followers
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Twitter className="w-5 h-5 mr-2 text-purple-300" />
                      <span className="text-purple-100">
                        {isClient
                          ? formatNumber(mockInfluencerData.followers.twitter)
                          : "---"}{" "}
                        followers
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Youtube className="w-5 h-5 mr-2 text-purple-300" />
                      <span className="text-purple-100">
                        {isClient
                          ? formatNumber(mockInfluencerData.followers.youtube)
                          : "---"}{" "}
                        subscribers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <AnimatedCard
            title="Total Earnings"
            value="$47,500"
            icon={<DollarSign className="h-6 w-6" />}
            delay={0.2}
            trend={15}
          />
          <AnimatedCard
            title="Brand Collaborations"
            value={mockBrands.length.toString()}
            icon={<Users className="h-6 w-6" />}
            delay={0.3}
            trend={2}
          />
          <AnimatedCard
            title="Influencer Rank"
            value={`#${mockRanking}`}
            icon={<Star className="h-6 w-6" />}
            delay={0.4}
            trend={-1}
          />
          <AnimatedCard
            title="Growth Rate"
            value="+15%"
            icon={<TrendingUp className="h-6 w-6" />}
            delay={0.5}
            trend={3}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-100">
                  Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-4">
                  <TabButton
                    active={activeTab === "earnings"}
                    onClick={() => setActiveTab("earnings")}
                  >
                    Earnings
                  </TabButton>
                  <TabButton
                    active={activeTab === "engagement"}
                    onClick={() => setActiveTab("engagement")}
                  >
                    Engagement
                  </TabButton>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === "earnings" ? (
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={mockEarningsData}>
                          <XAxis dataKey="month" stroke="#e9d5ff" />
                          <YAxis stroke="#e9d5ff" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(139, 92, 246, 0.8)",
                              border: "none",
                              borderRadius: "4px",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Bar dataKey="amount" fill="url(#colorGradient)" />
                          <defs>
                            <linearGradient
                              id="colorGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#c084fc"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#8b5cf6"
                                stopOpacity={0.8}
                              />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={mockEngagementData}>
                          <XAxis dataKey="month" stroke="#e9d5ff" />
                          <YAxis stroke="#e9d5ff" />
                          <CartesianGrid
                            stroke="#e9d5ff"
                            strokeDasharray="5 5"
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(139, 92, 246, 0.8)",
                              border: "none",
                              borderRadius: "4px",
                            }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="rate"
                            stroke="#c084fc"
                            strokeWidth={2}
                            dot={{ fill: "#8b5cf6", strokeWidth: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-100">
                  Brand Collaborations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockBrands.map((brand, index) => (
                    <motion.div
                      key={brand.name}
                      className="flex items-center justify-between bg-purple-800/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="border-2 border-purple-300">
                          <AvatarImage src={brand.logo} alt={brand.name} />
                          <AvatarFallback className="bg-purple-600 text-purple-100">
                            {brand.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-purple-100">
                          {brand.name}
                        </span>
                      </div>
                      <div className="text-sm text-purple-200">
                        Engagement: {brand.engagement}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-100">
                Influenced Users Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockInfluencedUsersData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#e9d5ff" />
                  <YAxis stroke="#e9d5ff" />
                  <CartesianGrid stroke="#e9d5ff" strokeDasharray="5 5" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(139, 92, 246, 0.8)",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center text-purple-200">
                Total Influenced Users:{" "}
                <span className="font-bold text-purple-100">
                  {isClient
                    ? formatNumber(
                        mockInfluencedUsersData[
                          mockInfluencedUsersData.length - 1
                        ].users || 0
                      )
                    : "---"}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface AnimatedCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  delay: number;
  trend: number;
}

function AnimatedCard({ title, value, icon, delay, trend }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-purple-200">
            {title}
          </CardTitle>
          <div className="bg-purple-600/50 p-2 rounded-full group-hover:bg-purple-500/50 transition-colors duration-300">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-100 mb-1">{value}</div>
          <div
            className={`text-sm flex items-center ${
              trend > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {trend > 0 ? (
              <ChevronUp className="w-4 h-4 mr-1" />
            ) : (
              <ChevronDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(trend)}% from last month
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
        active
          ? "bg-purple-500 text-white shadow-lg"
          : "bg-purple-800/50 text-purple-200 hover:bg-purple-700/50"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
