import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button, P } from "@/components/atoms";

import AlarmMethods from "@/components/pages/Onboarding/AlarmMethods";
import IconOption from "@/components/pages/Dashboard/IconOption";

import RangeInput from "./RangeInput";

// const pageVariants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//     },
//     in: {
//         opacity: 1,
//         y: 0,
//     },
//     out: {
//         opacity: 0,
//         y: 100,
//     },
// };

//                 initial="initial"
//                 animate="in"
//                 exit="out"

const SettingsModal = ({ closeModal }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 grid place-items-center"
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

                <AlarmMethods compact />

                <div className="mt-6">
                    <RangeInput
                        label="Face Distance"
                        name="faceDistance"
                        min="20"
                        max="200"
                    />

                    <RangeInput
                        label="Error Threshold"
                        name="error"
                        min="0"
                        max="20"
                    />
                </div>

                {/* <Input type="range" /> */}

                <Link to="/onboarding">
                    <Button $warning className="mt-6">
                        Redo Onboarding
                    </Button>
                </Link>
                <Button className="mt-3">Pause Rendering</Button>
                <Button className="mt-3">Save</Button>
            </motion.aside>
        </motion.div>
    );
};

export default SettingsModal;
