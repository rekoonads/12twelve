"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  LinkIcon,
  UsersIcon,
  DollarSignIcon,
  UserIcon,
  GlobeIcon,
  PieChartIcon,
  ShoppingBagIcon,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Website {
  name: string;
  visits: number;
}

interface InfluencerProfit {
  name: string;
  profit: number;
}

interface Influencer {
  id: number;
  name: string;
  username: string;
  profit: number;
  followers: number;
  engagement: string;
}

interface ProfitDistribution {
  name: string;
  value: number;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
}

interface MockData {
  totalLinks: number;
  totalUsers: number;
  totalProfits: number;
  totalInfluencers: number;
  totalCommissions: number;
  userProfits: number;
  popularWebsites: Website[];
  influencerProfits: InfluencerProfit[];
  influencers: Influencer[];
  profitDistribution: ProfitDistribution[];
  partneredBrands: Brand[];
}

const mockData: MockData = {
  totalLinks: 15783,
  totalUsers: 5421,
  totalProfits: 87650,
  totalInfluencers: 127,
  totalCommissions: 32450,
  userProfits: 55200,
  popularWebsites: [
    { name: "example.com", visits: 3245 },
    { name: "test.org", visits: 2890 },
    { name: "demo.net", visits: 2456 },
    { name: "sample.io", visits: 2100 },
    { name: "trial.com", visits: 1987 },
  ],
  influencerProfits: [
    { name: "Alice", profit: 12500 },
    { name: "Bob", profit: 10800 },
    { name: "Charlie", profit: 9700 },
    { name: "Diana", profit: 8900 },
    { name: "Ethan", profit: 7600 },
  ],
  influencers: [
    {
      id: 1,
      name: "Alice Johnson",
      username: "@alice_j",
      profit: 12500,
      followers: 150000,
      engagement: "3.2%",
    },
    {
      id: 2,
      name: "Bob Smith",
      username: "@bob_smith",
      profit: 10800,
      followers: 120000,
      engagement: "2.8%",
    },
    {
      id: 3,
      name: "Charlie Brown",
      username: "@charlie_b",
      profit: 9700,
      followers: 100000,
      engagement: "3.5%",
    },
    {
      id: 4,
      name: "Diana Miller",
      username: "@diana_m",
      profit: 8900,
      followers: 95000,
      engagement: "3.0%",
    },
    {
      id: 5,
      name: "Ethan Davis",
      username: "@ethan_d",
      profit: 7600,
      followers: 80000,
      engagement: "3.7%",
    },
    {
      id: 6,
      name: "Fiona White",
      username: "@fiona_w",
      profit: 7200,
      followers: 75000,
      engagement: "3.1%",
    },
    {
      id: 7,
      name: "George Lee",
      username: "@george_l",
      profit: 6800,
      followers: 70000,
      engagement: "2.9%",
    },
    {
      id: 8,
      name: "Hannah Clark",
      username: "@hannah_c",
      profit: 6500,
      followers: 68000,
      engagement: "3.3%",
    },
  ],
  profitDistribution: [
    { name: "User Profits", value: 55200 },
    { name: "Website Commissions", value: 32450 },
  ],
  partneredBrands: [
    {
      id: 1,
      name: "TechGadget",
      logo: "/placeholder.svg?height=64&width=64",
      category: "Electronics",
    },
    {
      id: 2,
      name: "FashionHub",
      logo: "/placeholder.svg?height=64&width=64",
      category: "Apparel",
    },
    {
      id: 3,
      name: "GourmetDelight",
      logo: "/placeholder.svg?height=64&width=64",
      category: "Food & Beverage",
    },
    {
      id: 4,
      name: "FitLife",
      logo: "/placeholder.svg?height=64&width=64",
      category: "Fitness",
    },
    {
      id: 5,
      name: "BeautyBliss",
      logo: "/placeholder.svg?height=64&width=64",
      category: "Cosmetics",
    },
    {
      id: 6,
      name: "HomeHaven",
      logo: "/placeholder.svg?height=64&width=64",
      category: "Home Decor",
    },
  ],
};

const COLORS = ["#8b5cf6", "#10b981"];

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  if (!isClient) {
    return null; // or return a loading spinner
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl font-bold text-white"
          >
            Dashboard
          </motion.h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {[
            {
              title: "Links Generated",
              value: mockData.totalLinks,
              icon: <LinkIcon className="h-6 w-6" />,
              trend: 5.2,
            },
            {
              title: "Total Users",
              value: mockData.totalUsers,
              icon: <UsersIcon className="h-6 w-6" />,
              trend: 2.1,
            },
            {
              title: "Total Profits",
              value: `$${mockData.totalProfits.toLocaleString()}`,
              icon: <DollarSignIcon className="h-6 w-6" />,
              trend: -1.5,
            },
            {
              title: "Total Influencers",
              value: mockData.totalInfluencers,
              icon: <UserIcon className="h-6 w-6" />,
              trend: 0.8,
            },
            {
              title: "Commissions",
              value: `$${mockData.totalCommissions.toLocaleString()}`,
              icon: <GlobeIcon className="h-6 w-6" />,
              trend: 3.7,
            },
            {
              title: "User Profits",
              value: `$${mockData.userProfits.toLocaleString()}`,
              icon: <PieChartIcon className="h-6 w-6" />,
              trend: 4.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard
                title={item.title}
                value={item.value}
                icon={item.icon}
                trend={<TrendIndicator value={item.trend} />}
                onHover={() => setHoveredCard(index)}
                isHovered={hoveredCard === index}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AnimatedCard title="Most Popular Websites">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={mockData.popularWebsites}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis
                  dataKey="name"
                  stroke="#ffffff"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={60}
                  tick={{ fill: "#ffffff", fontSize: 12 }}
                />
                <YAxis stroke="#ffffff" tick={{ fill: "#ffffff" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Bar dataKey="visits" fill="#8b5cf6">
                  {mockData.popularWebsites.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#colorGradient-${index})`}
                    />
                  ))}
                </Bar>
                <defs>
                  {mockData.popularWebsites.map((entry, index) => (
                    <linearGradient
                      key={`gradient-${index}`}
                      id={`colorGradient-${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#8b5cf6"
                        stopOpacity={0.2}
                      />
                    </linearGradient>
                  ))}
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </AnimatedCard>
          <AnimatedCard title="Top Influencer Profits">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={mockData.influencerProfits}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis
                  dataKey="name"
                  stroke="#ffffff"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={60}
                  tick={{ fill: "#ffffff", fontSize: 12 }}
                />
                <YAxis stroke="#ffffff" tick={{ fill: "#ffffff" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Bar dataKey="profit" fill="#10b981">
                  {mockData.influencerProfits.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#profitGradient-${index})`}
                    />
                  ))}
                </Bar>
                <defs>
                  {mockData.influencerProfits.map((entry, index) => (
                    <linearGradient
                      key={`gradient-${index}`}
                      id={`profitGradient-${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#10b981"
                        stopOpacity={0.2}
                      />
                    </linearGradient>
                  ))}
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </AnimatedCard>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AnimatedCard title="Profit Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockData.profitDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {mockData.profitDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Legend
                  formatter={(value) => (
                    <span style={{ color: "#ffffff", fontSize: "14px" }}>
                      {value}
                    </span>
                  )}
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                />
              </PieChart>
            </ResponsiveContainer>
          </AnimatedCard>
          <AnimatedCard title="Influencers Details">
            <div className="max-h-[300px] overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Username</TableHead>
                    <TableHead className="text-white">Profit</TableHead>
                    <TableHead className="text-white">Followers</TableHead>
                    <TableHead className="text-white">Engagement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.influencers.map((influencer, index) => (
                    <motion.tr
                      key={influencer.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TableCell className="font-medium text-white">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage
                              src={`/placeholder.svg?height=32&width=32`}
                              alt={influencer.name}
                            />
                            <AvatarFallback>
                              {influencer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{influencer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-white">
                        {influencer.username}
                      </TableCell>
                      <TableCell className="text-white">
                        ${influencer.profit.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-white">
                        {influencer.followers.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-white">
                        {influencer.engagement}
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AnimatedCard>
        </div>
        <AnimatedCard title="Partnered Brands">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockData.partneredBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-white/5 rounded-lg"
              >
                <Avatar className="h-16 w-16 mb-2">
                  <AvatarImage src={brand.logo} alt={brand.name} />
                  <AvatarFallback>{brand.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="text-white font-semibold text-sm text-center">
                  {brand.name}
                </h3>
                <p className="text-white/60 text-xs mt-1">{brand.category}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend: React.ReactNode;
  onHover: () => void;
  isHovered: boolean;
}

function StatCard({
  title,
  value,
  icon,
  trend,
  onHover,
  isHovered,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHover}
      onHoverEnd={() => onHover()}
    >
      <Card
        className={`bg-white/10 backdrop-blur-lg border-0 transition-colors duration-300 ${
          isHovered ? "bg-white/20" : ""
        }`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white/80">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-2xl font-bold text-white"
          >
            {value}
          </motion.div>
          {trend}
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TrendIndicatorProps {
  value: number;
}

function TrendIndicator({ value }: TrendIndicatorProps) {
  const isPositive = value >= 0;
  return (
    <div
      className={`flex items-center text-sm ${
        isPositive ? "text-green-400" : "text-red-400"
      }`}
    >
      {isPositive ? (
        <ArrowUpIcon className="h-4 w-4 mr-1" />
      ) : (
        <ArrowDownIcon className="h-4 w-4 mr-1" />
      )}
      <span>{Math.abs(value)}%</span>
    </div>
  );
}

interface AnimatedCardProps {
  title: string;
  children: React.ReactNode;
}

function AnimatedCard({ title, children }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}
