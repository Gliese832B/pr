import type { Component } from 'solid-js';
import { A as RouteLink } from '@solidjs/router';

import Base from '@/components/Base';
import Container from '@/components/Container';
import Center from '@/components/Center';

const Error: Component = () => {
    return (
        <Base>
            <Container>
                <Center>
                    <div>
                        <h1 class='text-5xl font-bold'>404</h1>
                        <p class='text-xl mt-3 font-medium font-robotomono text-[#a1a1aa]'>
                            The page you are looking for does not exist.
                        </p>
                        <RouteLink
                            type='button'
                            role='button'
                            href='/'
                            class='text-lg mt-5 font-medium font-robotomono bg-blue-500 py-2 px-4 rounded-md w-fit'
                        >
                            Go back to home
                        </RouteLink>
                    </div>
                </Center>
            </Container>
        </Base>
    );
};

export default Error;
