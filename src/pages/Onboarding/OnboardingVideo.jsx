import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageTransition from "@/components/animations/PageTransition";
import { Button, CanvasWrapper } from "@/components/atoms";

import useFace from "@/hooks/useFace";
import useStore from "@/hooks/useStore";

const OnboardingVideo = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const { loaded, getFaceDistance } = useFace(videoRef, canvasRef);
    const { setFaceDistance } = useStore();

    return (
        <PageTransition>
            <div className="grid place-items-center h-screen">
                <div className="max-w-3xl">
                    <CanvasWrapper>
                        <motion.div
                            animate={{
                                opacity: loaded ? 1 : 0,
                            }}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                            ></video>
                            <canvas
                                ref={canvasRef}
                                className="absolute w-full h-full left-0 top-0 z-10"
                            ></canvas>
                        </motion.div>
                    </CanvasWrapper>
                    <div className="mt-4 float-right">
                        {loaded && (
                            <Link to="/onboarding/alarm">
                                <Button
                                    onClick={() => {
                                        setFaceDistance(getFaceDistance());
                                    }}
                                >
                                    I look hot.
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingVideo;
