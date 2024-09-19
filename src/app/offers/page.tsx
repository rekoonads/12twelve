"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  ChevronRight,
  Package,
  Rocket,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  const [videoSrc, setVideoSrc] = useState("");
  const [description, setDescription] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const offers = [
    {
      title: "Premium Package",
      description: "Full access to all corporate services",
      discount: "20% off",
      icon: Package,
    },
    {
      title: "Startup Bundle",
      description: "Essential tools for growing businesses",
      discount: "Free trial",
      icon: Rocket,
    },
    {
      title: "Enterprise Solution",
      description: "Customized for large-scale operations",
      discount: "Custom pricing",
      icon: Building2,
    },
  ];

  const fetchNextVideo = async () => {
    try {
      const response = await axios.get(
        `https://backend2-0-bf0m.onrender.com/api/get-video?type=Careers`
      );
      const newVideoSrc = response.data;
      setVideoSrc(newVideoSrc);

      setDescription(
        "Experience the future of corporate innovation. Our cutting-edge solutions are transforming industries and shaping tomorrow's business landscape. Join us on this exciting journey of growth and discovery."
      );
    } catch (error) {
      console.error("Error fetching next video:", error);
    }
  };

  useEffect(() => {
    fetchNextVideo();
  }, []);

  useEffect(() => {
    const handleVideoEnd = () => {
      fetchNextVideo();
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && videoSrc) {
      videoElement.load();
      videoElement.play().catch((err) => {
        console.error("Error attempting to play the video:", err);
      });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex flex-col items-center justify-center p-4 space-y-12">
      <Card className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden rounded-t-xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted={isMuted}
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noplaybackrate"
              onContextMenu={(e) => e.preventDefault()}
            >
              {videoSrc && <source src={videoSrc} type="video/mp4" />}
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="text-white bg-purple-600 rounded-full p-2 shadow-lg"
              >
                {isPlaying ? (
                  <PauseCircle size={24} />
                ) : (
                  <PlayCircle size={24} />
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="text-white bg-purple-600 rounded-full p-2 shadow-lg"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 text-purple-100"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-200 tracking-tight">
              Discover Our Vision
            </h2>
            <p className="text-lg leading-relaxed mb-6">{description}</p>
            <div className="flex justify-between items-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
                Learn More
              </Button>
              <span className="text-purple-300 text-sm">
                Ad • Corporate Innovation
              </span>
            </div>
          </motion.div>
        </CardContent>
      </Card>

      <div className="w-full max-w-4xl">
        <h3 className="text-3xl font-bold mb-8 text-purple-200 tracking-tight text-center">
          Exclusive Offers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      className="p-3 bg-purple-600 rounded-full text-white"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {offer.icon && <offer.icon size={32} />}
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-semibold mb-2 text-purple-200 text-center">
                    {offer.title}
                  </h4>
                  <p className="text-purple-100 mb-4 text-center flex-grow">
                    {offer.description}
                  </p>
                  <div className="flex flex-col items-center space-y-4">
                    <Badge
                      variant="secondary"
                      className="bg-purple-500 text-white px-4 py-1 text-sm font-medium"
                    >
                      {offer.discount}
                    </Badge>
                    <Button
                      variant="outline"
                      className="text-purple-500 hover:text-white hover:bg-purple-600 border-purple-400 transition-colors duration-300 w-full"
                    >
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
