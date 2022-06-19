import useStore from "@/hooks/useStore";
import { useEffect } from "react";

import { Button, CanvasWrapper } from "@/components/atoms";

const Dashboard = () => {
    const { alarmMethod, faceDistance } = useStore();

    // useEffect(() => {
    //     new Notification("Welcome", {
    //         body: "welcome to this dashboard",
    //     });
    // }, []);

    return (
        <main className="max-w-3xl mx-auto mt-20">
            <h1 className="text-4xl font-bold">Welcome to the Dashboard.</h1>
            <p className="text-gray-500 mt-2">
                Just keep this app running in the background somewhere and we'll
                notify you if your face gets too close to the screen. If this is
                taking too many computer resources, try turning off result
                rendering.
            </p>

            <CanvasWrapper className="mt-6"></CanvasWrapper>
            <Button className="mt-4">Disable Rendering</Button>
        </main>
    );
};

export default Dashboard;
