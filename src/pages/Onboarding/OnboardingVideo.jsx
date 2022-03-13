import PrimaryButton from "@/components/Button/PrimaryButton";
import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

const OnboardingVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            });
    }, []);

    return (
        <div className="grid place-items-center h-screen">
            <div className="max-w-3xl">
                <video
                    ref={videoRef}
                    className="w-full bg-gray-100 object-cover rounded-lg -scale-x-100"
                ></video>

                <div className="mt-4 float-right">
                    <Link to="/onboarding/alarm">
                        <PrimaryButton text="Looks ok." />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OnboardingVideo;
