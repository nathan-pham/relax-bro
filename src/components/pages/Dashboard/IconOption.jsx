const IconOption = ({ icon, ...props }) => (
    <div
        className="p-4 bg-gray-100 rounded-full w-fit cursor-pointer hover:bg-gray-200 transition-colors"
        {...props}
    >
        {icon && icon}
    </div>
);

export default IconOption;
