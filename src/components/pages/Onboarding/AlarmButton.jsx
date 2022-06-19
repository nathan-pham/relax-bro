import mt from "@/utils/mergeTailwind";

const AlarmButton = ({ icon, text, active, ...props }) => {
    return (
        <div
            {...props}
            className={mt(
                "rounded-lg p-5 border-2 border-gray-200 cursor-pointer text-center hover:shadow-lg transition-all",
                active
                    ? "border-blue-600 shadow-lg -translate-y-1"
                    : "hover:-translate-y-1"
            )}
        >
            <div className="text-blue-600 w-fit mx-auto">{icon}</div>
            <span className="text-gray-500 mt-4 block">{text}</span>
        </div>
    );
};

export default AlarmButton;
