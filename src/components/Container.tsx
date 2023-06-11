import type { Component, ParentProps } from 'solid-js';

const Container: Component<ParentProps> = ({ children }) => {
    return (
        <div class='flex justify-center w-full h-full'>
            <div class='md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 w-10/12'>{children}</div>
        </div>
    );
};

export default Container;
