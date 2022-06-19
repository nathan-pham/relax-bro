import { IoCogOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

import { Footer, CanvasWrapper, P } from "@/components/atoms";

import SettingsModal from "@/components/pages/Dashboard/SettingsModal";
import IconOption from "@/components/pages/Dashboard/IconOption";
import useStore from "@/hooks/useStore";
import useFace from "@/hooks/useFace";

import { AnimatePresence } from "framer-motion";

const Dashboard = () => {
    const { alarmMethod, faceDistance, errorThreshold } = useStore();
    const [modalOpen, setModalOpen] = useState(false);
    const [renderingEnabled, setRenderingEnabled] = useState(true);

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const audioRef = useRef(null);

    const { loaded, getFaceDistance } = useFace(
        videoRef,
        canvasRef,
        renderingEnabled
    );

    useEffect(() => {
        let sentNotification = false;
        let intervalId = setInterval(() => {
            if (
                loaded &&
                !sentNotification &&
                getFaceDistance() > faceDistance &&
                getFaceDistance() - faceDistance > errorThreshold
            ) {
                sentNotification = true;

                if (alarmMethod === 0) {
                    new Notification("Relax Bro!", {
                        body: "Keep your face away from the screen!",
                    });
                } else if (alarmMethod === 1) {
                    if (
                        audioRef.current.duration > 0 &&
                        audioRef.current.paused
                    ) {
                        audioRef.current.play();
                    }
                }

                setTimeout(() => {
                    sentNotification = false;
                }, 5000);
            }
        }, 1000 / 60);

        return () => {
            clearInterval(intervalId);
        };
    }, [loaded]);

    return (
        <main className="max-w-3xl mx-auto mt-20">
            <h1 className="text-4xl font-bold">Welcome to the Dashboard.</h1>
            <P className="mt-2">
                Just keep this app running in the background somewhere and we'll
                notify you if your face gets too close to the screen. If this is
                taking too many computer resources, try turning off result
                rendering in the settings down below.
            </P>

            <audio src="/horn.mp3" className="hidden" ref={audioRef}></audio>

            <CanvasWrapper className="mt-6">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                ></video>
                <canvas
                    ref={canvasRef}
                    className="absolute w-full h-full left-0 top-0 z-10"
                ></canvas>
            </CanvasWrapper>

            <div className="flex mt-4 gap-4">
                <IconOption
                    icon={<IoCogOutline size="1.5rem" />}
                    onClick={() => setModalOpen(!modalOpen)}
                />

                <AnimatePresence>
                    {modalOpen && (
                        <SettingsModal
                            closeModal={() => setModalOpen(false)}
                            renderingEnabled={renderingEnabled}
                            setRenderingEnabled={setRenderingEnabled}
                        />
                    )}
                </AnimatePresence>
            </div>

            <Footer>Made by Nathan Pham</Footer>
        </main>
    );
};

export default Dashboard;
