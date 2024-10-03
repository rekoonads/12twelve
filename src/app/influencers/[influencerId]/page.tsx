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
  LogOut,
  Edit,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface InfluencerData {
  name: string;
  username: string;
  email: string;
  phone: string;
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
  products: { name: string; link: string; clickPercentage: number }[];
}

const mockInfluencerData: InfluencerData = {
  name: "Alex Johnson",
  username: "@alexjohnson",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
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
    products: [
      {
        name: "Smartphone X",
        link: "https://techgiant.com/smartphone-x",
        clickPercentage: 12.5,
      },
      {
        name: "Laptop Pro",
        link: "https://techgiant.com/laptop-pro",
        clickPercentage: 8.7,
      },
      {
        name: "Smart Watch 3",
        link: "https://techgiant.com/smart-watch-3",
        clickPercentage: 15.2,
      },
    ],
  },
  {
    name: "FashionNova",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 92,
    products: [
      {
        name: "Summer Dress",
        link: "https://fashionnova.com/summer-dress",
        clickPercentage: 18.3,
      },
      {
        name: "Denim Jacket",
        link: "https://fashionnova.com/denim-jacket",
        clickPercentage: 14.1,
      },
      {
        name: "Sneakers",
        link: "https://fashionnova.com/sneakers",
        clickPercentage: 20.5,
      },
    ],
  },
  {
    name: "GreenEats",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 78,
    products: [
      {
        name: "Organic Smoothie",
        link: "https://greeneats.com/organic-smoothie",
        clickPercentage: 9.8,
      },
      {
        name: "Vegan Burger",
        link: "https://greeneats.com/vegan-burger",
        clickPercentage: 11.2,
      },
      {
        name: "Kale Chips",
        link: "https://greeneats.com/kale-chips",
        clickPercentage: 7.6,
      },
    ],
  },
  {
    name: "FitLife",
    logo: "/placeholder.svg?height=40&width=40",
    engagement: 88,
    products: [
      {
        name: "Yoga Mat",
        link: "https://fitlife.com/yoga-mat",
        clickPercentage: 16.7,
      },
      {
        name: "Protein Powder",
        link: "https://fitlife.com/protein-powder",
        clickPercentage: 13.9,
      },
      {
        name: "Fitness Tracker",
        link: "https://fitlife.com/fitness-tracker",
        clickPercentage: 22.1,
      },
    ],
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedData, setEditedData] = useState(mockInfluencerData);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the mockInfluencerData with the edited data
    Object.assign(mockInfluencerData, editedData);
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Influencer Dashboard
          </motion.h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
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
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <h2 className="text-3xl font-bold text-purple-100 mr-2">
                      {mockInfluencerData.name}
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsEditModalOpen(true)}
                      className="text-purple-300 hover:text-purple-100 hover:bg-purple-800/50"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit profile</span>
                    </Button>
                  </div>
                  <p className="text-xl text-purple-200 mb-2">
                    {mockInfluencerData.username}
                  </p>
                  <p className="text-sm text-purple-300 mb-2 flex items-center justify-center md:justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    {mockInfluencerData.email}
                  </p>
                  <p className="text-sm text-purple-300 mb-4 flex items-center justify-center md:justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    {mockInfluencerData.phone}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
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
                        <CartesianGrid stroke="#e9d5ff" strokeDasharray="5 5" />
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
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-100">
                Brand Collaborations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockBrands.map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    className="bg-purple-800/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
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
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-purple-200 mb-2">
                        Promoted Products:
                      </h4>
                      {brand.products.map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="flex items-center justify-between space-x-2"
                        >
                          <Link
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-100 hover:text-purple-200 transition-colors duration-200"
                          >
                            {product.name}
                          </Link>
                          <div className="text-xs text-purple-300">
                            {product.clickPercentage.toFixed(1)}% clicks
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

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

        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="bg-purple-900 text-purple-100">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleEditSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={editedData.name}
                    onChange={(e) =>
                      setEditedData({ ...editedData, name: e.target.value })
                    }
                    className="col-span-3 bg-purple-800 text-purple-100 border-purple-700"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value={editedData.username}
                    onChange={(e) =>
                      setEditedData({ ...editedData, username: e.target.value })
                    }
                    className="col-span-3 bg-purple-800 text-purple-100 border-purple-700"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={editedData.email}
                    onChange={(e) =>
                      setEditedData({ ...editedData, email: e.target.value })
                    }
                    className="col-span-3 bg-purple-800 text-purple-100 border-purple-700"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={editedData.phone}
                    onChange={(e) =>
                      setEditedData({ ...editedData, phone: e.target.value })
                    }
                    className="col-span-3 bg-purple-800 text-purple-100 border-purple-700"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bio" className="text-right">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    value={editedData.bio}
                    onChange={(e) =>
                      setEditedData({ ...editedData, bio: e.target.value })
                    }
                    className="col-span-3 bg-purple-800 text-purple-100 border-purple-700"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-purple-600 text-purple-100 hover:bg-purple-700"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
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
