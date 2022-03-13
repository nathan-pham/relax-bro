const AlarmButton = ({ icon, text, ...props }) => {
    return (
        <div
            {...props}
            className="rounded-lg p-6 border-2 border-gray-200 cursor-pointer text-center hover:shadow-lg hover:-translate-y-1 transition-all"
        >
            <div className="text-blue-600 w-8 mx-auto">{icon}</div>
            <span className="text-gray-700 mt-4 block">{text}</span>
        </div>
    );
};

export default AlarmButton;
