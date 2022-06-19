import { IoCogOutline, IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button, Footer, CanvasWrapper, Input, P } from "@/components/atoms";

import SettingsModal from "@/components/pages/Dashboard/SettingsModal";
import IconOption from "@/components/pages/Dashboard/IconOption";
import useStore from "@/hooks/useStore";

import { AnimatePresence } from "framer-motion";

const Dashboard = () => {
    const { alarmMethod, faceDistance } = useStore();
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     new Notification("Welcome", {
    //         body: "welcome to this dashboard",
    //     });
    // }, []);

    return (
        <main className="max-w-3xl mx-auto mt-20">
            <h1 className="text-4xl font-bold">Welcome to the Dashboard.</h1>
            <P className="mt-2">
                Just keep this app running in the background somewhere and we'll
                notify you if your face gets too close to the screen. If this is
                taking too many computer resources, try turning off result
                rendering in the settings down below.
            </P>

            <CanvasWrapper className="mt-6"></CanvasWrapper>

            <div className="flex mt-4 gap-4">
                <IconOption
                    icon={<IoCogOutline size="1.5rem" />}
                    onClick={() => setModalOpen(!modalOpen)}
                />

                <AnimatePresence>
                    {modalOpen && (
                        <SettingsModal closeModal={() => setModalOpen(false)} />
                    )}
                </AnimatePresence>
            </div>

            <Footer>Made by Nathan Pham</Footer>
        </main>
    );
};

export default Dashboard;
