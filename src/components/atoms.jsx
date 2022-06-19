import tw from "tailwind-styled-components";

export const Button = tw.button`
    ${({ $warning }) =>
        $warning
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-600 hover:bg-blue-700"}
    
    text-white
    rounded-lg
    
    cursor-pointer
    block
    
    py-3
    px-8
    
    transition-colors
`;

export const CanvasWrapper = tw.div`
    w-[640px] 
    h-[480px] 
    
    bg-gray-100 
    rounded-lg
    
    overflow-hidden
    relative
`;

export const Footer = tw.footer`
    w-full
    text-center
    font-lg
    text-gray-500
    py-6
`;

export const P = tw.p`
    text-lg 
    leading-snug

    text-gray-500
`;

export const Input = tw.input`
    &[type="range"] {
        appearance-none 
        cursor-pointer
        bg-gray-300 
        rounded-lg 
        h-2 
        m-0
    }
`;

{
    /* <input
                            type="range"
                            min="20"
                            max="200"
                            className="h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                        /> */
}
