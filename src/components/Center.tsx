import type { Component, ParentProps } from 'solid-js';

const Center: Component<ParentProps> = ({ children }) => {
    return (
        <div class='flex flex-col justify-center items-center w-full min-h-screen'>{children}</div>
    );
};

export default Center;
