import PageTransition from "@/components/animations/PageTransition";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import electronFetch from "@/utils/electronFetch";
import useStore from "@/hooks/useStore";

import mt from "@/utils/mergeTailwind";

const OnboardingFinished = () => {
    const { alarmMethod, faceDistance } = useStore();
    const [savedSettings, setSavedSettings] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await electronFetch("/setOnboarding", {
                alarmMethod,
                faceDistance,
            });

            setSavedSettings(true);
            navigate("/dashboard");
        })();
    }, []);

    return (
        <PageTransition>
            <div className="h-screen text-center grid place-items-center">
                <div className="max-3-xl">
                    <h1 className="text-blue-600 text-5xl">
                        We're finishing up some things....
                    </h1>

                    <div className="rounded-full w-full h-3 mt-10 bg-gray-200">
                        <div
                            className={mt(
                                "w-0 h-full rounded-full bg-blue-600 transition-all",
                                savedSettings ? "w-full" : ""
                            )}
                        ></div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingFinished;
