import { Link } from "react-router-dom";

import PageTransition from "@/components/animations/PageTransition";
import AlarmButton from "@/components/pages/Onboarding/AlarmButton";
import { Button } from "@/components/atoms";

import FilledPin from "@/assets/icons/FilledPin";
import Notification from "@/assets/icons/Notification";

import useStore from "@/hooks/useStore";

const alarmMethods = [
    {
        icon: <Notification />,
        text: "idk notifications are pretty generic",
    },
    {
        icon: <FilledPin />,
        text: "alarms are effective but annoying af",
    },
];

const OnboardingAlarm = () => {
    const { alarmMethod, setAlarmMethod } = useStore();

    return (
        <PageTransition>
            <div className="grid place-items-center h-screen">
                <div className="max-w-3xl">
                    <h1 className="text-5xl text-blue-600">
                        How would you like to be notified?
                    </h1>

                    <div className="grid grid-cols-2 mt-10 gap-6">
                        {alarmMethods.map((props, id) => (
                            <AlarmButton
                                {...props}
                                active={alarmMethod === id}
                                key={id}
                                onClick={() => {
                                    setAlarmMethod(id);
                                }}
                            />
                        ))}
                    </div>

                    <div className="mt-6 float-right">
                        <Link to="/onboarding/finished">
                            <Button>Sounds good.</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default OnboardingAlarm;
