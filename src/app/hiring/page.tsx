"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import {
  Instagram,
  Twitter,
  Youtube,
  LucideIcon,
  ArrowLeft,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Vector2 } from "three";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Influencer = {
  name: string;
  image: string;
  followers: number;
  bio: string;
  platform: "instagram" | "twitter" | "youtube";
};

const influencers: Influencer[] = [
  {
    name: "Zoe Quantum",
    image: "/placeholder.svg?height=400&width=400",
    followers: 2500000,
    bio: "Tech futurist and AI enthusiast. Exploring the intersection of technology and human potential.",
    platform: "youtube",
  },
  {
    name: "Neon Blaze",
    image: "/placeholder.svg?height=400&width=400",
    followers: 1800000,
    bio: "Cyberpunk fashion icon and digital artist. Pushing the boundaries of virtual fashion and AR experiences.",
    platform: "instagram",
  },
  {
    name: "Stella Nova",
    image: "/placeholder.svg?height=400&width=400",
    followers: 3200000,
    bio: "Space exploration advocate and science communicator. Making the cosmos accessible to everyone.",
    platform: "twitter",
  },
  {
    name: "Axel Synth",
    image: "/placeholder.svg?height=400&width=400",
    followers: 1500000,
    bio: "Electronic music producer and virtual concert pioneer. Creating immersive audio-visual experiences.",
    platform: "youtube",
  },
  {
    name: "Luna Pixel",
    image: "/placeholder.svg?height=400&width=400",
    followers: 2100000,
    bio: "Digital wellness coach and VR meditation guru. Helping you find balance in the digital age.",
    platform: "instagram",
  },
  {
    name: "Max Cipher",
    image: "/placeholder.svg?height=400&width=400",
    followers: 1900000,
    bio: "Cybersecurity expert and ethical hacker. Demystifying online security for the masses.",
    platform: "twitter",
  },
];

const platformIcons: { [key: string]: LucideIcon } = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

function WaveField() {
  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = 0;
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);

  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree<{ mouse: Vector2 }>();

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count * count; i++) {
      const xi = i % count;
      const zi = Math.floor(i / count);

      const offset =
        Math.sin(time * 0.5 + xi * 0.1) * 0.5 +
        Math.sin(time * 0.5 + zi * 0.1) * 0.5;
      const mouseEffect =
        Math.sin(mouse.x * 5 + xi * 0.1) * Math.sin(mouse.y * 5 + zi * 0.1) * 2;

      pointsRef.current.geometry.attributes.position.array[i * 3 + 1] =
        offset + mouseEffect;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function FuturisticInfluencerShowcase() {
  return (
    <div className="min-h-screen bg-purple-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 15, 35], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WaveField />
        </Canvas>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-purple-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:text-6xl lg:text-7xl mb-4">
            Next-Gen Influencers
          </h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Connect with visionaries shaping the digital frontier and propelling
            brands into the future.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {influencers.map((influencer: Influencer, index: number) => (
            <InfluencerCard key={index} influencer={influencer} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfluencerCard({
  influencer,
  index,
}: {
  influencer: Influencer;
  index: number;
}) {
  const PlatformIcon = platformIcons[influencer.platform] as LucideIcon;
  const [isHovered, setIsHovered] = useState(false);
  const [formattedFollowers, setFormattedFollowers] = useState<string>("");

  useEffect(() => {
    setFormattedFollowers(influencer.followers.toLocaleString("en-US"));
  }, [influencer.followers]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-purple-900 bg-opacity-50 backdrop-blur-md border-purple-700 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
        <CardContent className="p-6 relative">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-purple-500">
              <AvatarImage src={influencer.image} alt={influencer.name} />
              <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center bg-purple-800 bg-opacity-75 rounded-full"
                >
                  <PlatformIcon className="w-12 h-12 text-purple-200" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <h2 className="text-2xl font-bold text-purple-100 mb-2">
            {influencer.name}
          </h2>
          <Badge
            variant="secondary"
            className="bg-purple-700 text-purple-100 mb-4"
          >
            {formattedFollowers} followers
          </Badge>
          <p className="text-purple-300 mb-4">{influencer.bio}</p>
          <Link
            href={`/collaborate/${influencer.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-purple-100 font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Collaborate Now
            </motion.button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
