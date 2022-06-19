import { IoAlarmOutline, IoNotificationsOutline } from "react-icons/io5";

import AlarmButton from "./AlarmButton";
import useStore from "@/hooks/useStore";
import mt from "@/utils/mergeTailwind";

const alarmMethods = [
    {
        icon: <IoNotificationsOutline size="2rem" />,
        text: "idk notifications are pretty generic",
    },
    {
        icon: <IoAlarmOutline size="2rem" />,
        text: "alarms are effective but annoying af",
    },
];

const AlarmMethods = ({ compact = false }) => {
    const { alarmMethod, setAlarmMethod } = useStore();

    return (
        <div
            className={mt(
                "grid grid-cols-2 mt-10 gap-6",
                compact ? "mt-4 gap-4" : ""
            )}
        >
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
    );
};

export default AlarmMethods;
