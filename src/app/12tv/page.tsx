"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { motion } from "framer-motion";
import { PauseCircle, PlayCircle, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Component() {
  const [videoSrc, setVideoSrc] = useState("");
  const [description, setDescription] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-6xl bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl overflow-hidden">
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
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="text-white bg-purple-600 rounded-full p-3 shadow-lg"
              >
                {isPlaying ? (
                  <PauseCircle size={32} />
                ) : (
                  <PlayCircle size={32} />
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="text-white bg-purple-600 rounded-full p-3 shadow-lg"
              >
                {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 text-purple-100"
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-200 tracking-tight">
              Discover Our Vision
            </h2>
            <p className="text-xl leading-relaxed mb-8">{description}</p>
            <div className="flex justify-between items-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg">
                Learn More
              </Button>
              <span className="text-purple-300 text-base">
                Ad • Corporate Innovation
              </span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
