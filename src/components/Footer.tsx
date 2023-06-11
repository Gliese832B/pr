import type { Component } from 'solid-js';

const Footer: Component = () => {
    return (
        <p class='text-center mt-20 mb-4'>
            <span class='font-robotomono'>Copyright</span> &copy;{' '}
            <span class='font-robotomono'>2023-present</span>{' '}
            <a class='hover:underline font-robotomono' target='_blank' href='https://hanzy.dev'>
                Hànzy
            </a>
        </p>
    );
};

export default Footer;
