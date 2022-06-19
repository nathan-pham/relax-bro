import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import electronFetch from "@/utils/electronFetch";
import useStore from "@/hooks/useStore";

const Redirect = () => {
    const navigate = useNavigate();
    const { setAlarmMethod, setFaceDistance } = useStore();

    useEffect(() => {
        (async () => {
            const { alarmMethod, faceDistance } = await electronFetch(
                "/getOnboarding"
            );

            if (alarmMethod && faceDistance) {
                setAlarmMethod(alarmMethod);
                setFaceDistance(faceDistance);

                navigate("/dashboard");
            } else {
                navigate("/onboarding");
            }
        })();
    }, []);

    return <></>;
};

export default Redirect;
