"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Instagram,
  Twitter,
  Youtube,
  Users,
  Mail,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Influencer = {
  name: string;
  image: string;
  followers: number;
  bio: string;
  platform: "instagram" | "twitter" | "youtube";
  email: string;
  joinDate: string;
  recentPosts: string[];
};

const influencers: { [key: string]: Influencer } = {
  "zoe-quantum": {
    name: "Zoe Quantum",
    image: "/placeholder.svg?height=400&width=400",
    followers: 2500000,
    bio: "Tech futurist and AI enthusiast. Exploring the intersection of technology and human potential.",
    platform: "youtube",
    email: "zoe@quantum.tech",
    joinDate: "2019-03-15",
    recentPosts: [
      "The Future of AI in Healthcare",
      "Quantum Computing: A Beginner's Guide",
      "5 Emerging Technologies to Watch in 2024",
    ],
  },
  "neon-blaze": {
    name: "Neon Blaze",
    image: "/placeholder.svg?height=400&width=400",
    followers: 1800000,
    bio: "Cyberpunk fashion icon and digital artist. Pushing the boundaries of virtual fashion and AR experiences.",
    platform: "instagram",
    email: "neon@blaze.style",
    joinDate: "2020-07-22",
    recentPosts: [
      "Virtual Fashion Show Highlights",
      "Creating AR Filters for Instagram",
      "The Rise of Digital Couture",
    ],
  },
  "stella-nova": {
    name: "Stella Nova",
    image: "/placeholder.svg?height=400&width=400",
    followers: 3200000,
    bio: "Space exploration advocate and science communicator. Making the cosmos accessible to everyone.",
    platform: "twitter",
    email: "stella@nova.space",
    joinDate: "2018-11-30",
    recentPosts: [
      "Mars Colony: Fact vs Fiction",
      "The Search for Exoplanets",
      "Space Tourism: What to Expect",
    ],
  },
  "axel-synth": {
    name: "Axel Synth",
    image: "/placeholder.svg?height=400&width=400",
    followers: 1500000,
    bio: "Electronic music producer and virtual concert pioneer. Creating immersive audio-visual experiences.",
    platform: "youtube",
    email: "axel@synth.music",
    joinDate: "2021-01-10",
    recentPosts: [
      "The Evolution of Electronic Music",
      "Behind the Scenes: Virtual Concert Production",
      "Synthesizers 101: Getting Started",
    ],
  },
  "luna-pixel": {
    name: "Luna Pixel",
    image: "/placeholder.svg?height=400&width=400",
    followers: 2100000,
    bio: "Digital wellness coach and VR meditation guru. Helping you find balance in the digital age.",
    platform: "instagram",
    email: "luna@pixel.wellness",
    joinDate: "2020-04-01",
    recentPosts: [
      "5 VR Meditation Techniques for Stress Relief",
      "Digital Detox: Why and How",
      "Mindfulness Apps: Our Top Picks",
    ],
  },
  "max-cipher": {
    name: "Max Cipher",
    image: "/placeholder.svg?height=400&width=400",
    followers: 1900000,
    bio: "Cybersecurity expert and ethical hacker. Demystifying online security for the masses.",
    platform: "twitter",
    email: "max@cipher.security",
    joinDate: "2019-09-15",
    recentPosts: [
      "Password Security: Best Practices",
      "The Rise of Ransomware: What You Need to Know",
      "Blockchain and Cybersecurity: The Future?",
    ],
  },
};

const platformIcons = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

export default function CollaboratePage() {
  const params = useParams();
  const influencerSlug = params.influencer as string;
  const influencer = influencers[influencerSlug];

  if (!influencer) {
    return <div>Influencer not found</div>;
  }

  const PlatformIcon = platformIcons[influencer.platform];

  return (
    <div className="min-h-screen bg-purple-950 py-16 px-4 sm:px-6 lg:px-8 text-purple-50">
      <div className="max-w-4xl mx-auto">
        <Link href="/hiring">
          <Button
            variant="ghost"
            className="mb-8 text-purple-300 hover:text-purple-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Influencers
          </Button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-purple-900 border-purple-700 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-32 h-32 border-4 border-purple-500">
                  <AvatarImage src={influencer.image} alt={influencer.name} />
                  <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {influencer.name}
                  </h1>
                  <p className="text-xl mb-4 text-purple-300">
                    {influencer.bio}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-purple-700 text-purple-100"
                    >
                      <Users className="mr-1 h-4 w-4" />
                      {influencer.followers.toLocaleString()} followers
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-700 text-purple-100"
                    >
                      <PlatformIcon className="mr-1 h-4 w-4" />
                      {influencer.platform}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-700 text-purple-100"
                    >
                      <Mail className="mr-1 h-4 w-4" />
                      {influencer.email}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-700 text-purple-100"
                    >
                      <Calendar className="mr-1 h-4 w-4" />
                      Joined{" "}
                      {new Date(influencer.joinDate).toLocaleDateString()}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-300">
            Recent Posts
          </h2>
          <div className="grid gap-4">
            {influencer.recentPosts.map((post, index) => (
              <Card key={index} className="bg-purple-900 border-purple-700">
                <CardContent className="p-4">
                  <p className="text-purple-100">{post}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Link href={`/collaborate/${influencerSlug}/form`}>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-purple-100 font-semibold py-2 px-4 rounded-full transition-all duration-300">
              Start Collaboration
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
