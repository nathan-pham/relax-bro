import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button, P } from "@/components/atoms";

import AlarmMethods from "@/components/pages/Onboarding/AlarmMethods";
import IconOption from "@/components/pages/Dashboard/IconOption";
import RangeInput from "./RangeInput";

import electronFetch from "@/utils/electronFetch";
import useStore from "@/hooks/useStore";

const SettingsModal = ({
    closeModal,
    renderingEnabled,
    setRenderingEnabled,
}) => {
    const { faceDistance, setFaceDistance, errorThreshold, setErrorThreshold } =
        useStore();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 top-0 left-0 h-screen w-screen bg-black bg-opacity-40 grid place-items-center"
        >
            <motion.aside
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl bg-white rounded-lg p-6"
            >
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">Settings</h1>
                    <IconOption
                        icon={<IoCloseOutline size="1.5rem" />}
                        onClick={closeModal}
                    />
                </div>

                <P className="mt-2 mb-8">
                    Need to improve performance or reconfigure any settings? Do
                    that here.
                </P>

                <AlarmMethods
                    compact
                    onChange={(i) => {
                        electronFetch("setAlarmMethod", { alarmMethod: i });
                    }}
                />

                <div className="mt-6">
                    <RangeInput
                        label={`Face Distance (${faceDistance})`}
                        name="faceDistance"
                        min="20"
                        max="200"
                        value={faceDistance}
                        onChange={(e) => {
                            setFaceDistance(parseInt(e.target.value));
                        }}
                    />

                    <RangeInput
                        label={`Error Threshold (${errorThreshold})`}
                        name="error"
                        min="0"
                        max="20"
                        value={errorThreshold}
                        onChange={(e) => {
                            setErrorThreshold(parseInt(e.target.value));
                        }}
                    />
                </div>

                <Link to="/onboarding" className="w-fit block">
                    <Button $warning className="mt-6">
                        Redo Onboarding
                    </Button>
                </Link>
                <Button
                    className="mt-3"
                    onClick={() => setRenderingEnabled((enabled) => !enabled)}
                >
                    {renderingEnabled
                        ? "Disable Rendering"
                        : "Enable Rendering"}
                </Button>
                <Button
                    className="mt-3"
                    onClick={() => {
                        electronFetch("set", {
                            faceDistance,
                            errorThreshold,
                        });

                        closeModal();
                    }}
                >
                    Save
                </Button>
            </motion.aside>
        </motion.div>
    );
};

export default SettingsModal;
