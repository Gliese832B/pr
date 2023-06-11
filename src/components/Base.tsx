import type { Component, ParentProps } from 'solid-js';

const Base: Component<ParentProps> = ({ children }) => {
    return (
            <div class='bg-[#111215] font-inter text-white flex flex-col w-full min-h-screen'>
                {children}
            </div>
    );
};

export default Base;
