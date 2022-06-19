import tw from "tailwind-styled-components";

export const Button = tw.button`
    bg-blue-600
    text-white
    rounded-lg
    
    cursor-pointer
    block
    
    py-3
    px-8

    hover:bg-blue-700
    transition-colors
`;

export const CanvasWrapper = tw.div`
    w-[640px] 
    h-[480px] 
    
    bg-gray-100 
    rounded-lg
    
    overflow-hidden
    relative
`