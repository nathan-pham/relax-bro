const PrimaryButton = ({ text, ...props }) => {
    return (
        <button
            className="bg-blue-600 text-white rounded-lg cursor-pointer py-3 px-8 hover:bg-blue-700 transition-colors"
            {...props}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
