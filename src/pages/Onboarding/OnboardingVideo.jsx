import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/atoms";

const OnboardingVideo = () => {
    const videoRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                setLoaded(true);
            });

        return () => {
            videoRef.current?.srcObject.getTracks().forEach((track) => {
                track.stop();
            });
        };
    }, []);

    return (
        <PageTransition>
            <div className="grid place-items-center h-screen">
                <div className="max-w-3xl">
                    <div className="w-[640px] h-[480px] bg-gray-100">
                        <motion.div
                            animate={{
                                opacity: loaded ? 1 : 0,
                            }}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover rounded-lg -scale-x-100"
                            ></video>
                        </motion.div>
                    </div>
                    <div className="mt-4 float-right">
                        <Link to="/onboarding/alarm">
                            <Button $as="a">I look hot.</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingVideo;
