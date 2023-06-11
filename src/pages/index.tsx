import { onMount, createSignal, Show, For, type Component } from 'solid-js';
import { Icon } from '@iconify-icon/solid';

import Base from '@/components/Base';
import Container from '@/components/Container';
import Spinner from '@/components/Spinner';

import Contact from '@/data/contact.json';
import Projects from '@/data/projects.json';

import { StatusNames, StatusColors, DiscordUserId } from '@/constants';
import Footer from '@/components/Footer';
import Center from '@/components/Center';

const Home: Component = () => {
    const [data, setData] = createSignal<Record<string, any>>();

    onMount(async () => {
        const { data: lanyardData } = await fetch(
            `https://api.lanyard.rest/v1/users/${DiscordUserId}`,
        ).then((res) => res.json());

        setData(lanyardData);
    });

    return (
        <Base>
            <Show
                when={data()}
                fallback={
                    <Center>
                        <Spinner />
                    </Center>
                }
            >
                <Container>
                    <div class='md:mt-20 mt-12'>
                        <h1 class='text-4xl font-bold'>{data()!.discord_user.username}</h1>
                        <div class='space-y-5 mt-5 ml-2'>
                            <p class='font-medium font-robotomono text-[#a1a1aa]'>
                                Back-end Developer & Networking Enthusiast
                            </p>

                            <p class='font-medium font-robotomono text-[#a1a1aa]'>
                                Hello! My name is Gliese and I live in Turkey. I am a backend
                                developer and a networking enthusiast.
                            </p>
                            <div class='md:space-x-24 flex max-md:flex-col md:items-center max-md:space-y-2'>
                                <div class='flex space-x-2 items-center'>
                                    <Icon icon='carbon:location' class='text-lg' />{' '}
                                    <p class='font-medium font-robotomono text-[#a1a1aa]'>
                                        Türkiye
                                    </p>
                                </div>
                                <div class='flex space-x-2 max-md:ml-1 items-center'>
                                    <div
                                        class='w-2.5 h-2.5 rounded-full'
                                        style={{
                                            'background-color':
                                                StatusColors[
                                                    data()!
                                                        .discord_status as keyof typeof StatusColors
                                                ],
                                        }}
                                    ></div>
                                    <p class='font-medium font-robotomono text-[#a1a1aa]'>
                                        {
                                            StatusNames[
                                                data()!.discord_status as keyof typeof StatusNames
                                            ]
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class='mt-10 ml-1 space-y-5'>
                            <h2 class='text-2xl font-bold'>Projects</h2>
                            <div class='space-y-5 ml-2'>
                                <For each={Projects}>
                                    {(item) => (
                                        <div class='space-y-3'>
                                            <div class='flex items-center space-x-3 font-robotomono'>
                                                <span class='font-medium hover:underline'>
                                                    {item.name}
                                                </span>
                                                <div class='px-3 py-1 rounded-md text-xs bg-[#1a1c20]'>
                                                    {item.year}-present
                                                </div>
                                            </div>
                                            <p class='font-medium text-sm font-robotomono text-[#a1a1aa]'>
                                                {item.about}
                                            </p>
                                            <a
                                                href={item.link}
                                                target='_blank'
                                                class='flex items-center text-sm space-x-2 font-medium font-robotomono hover:underline w-fit'
                                            >
                                                <span>{new URL(item.link).hostname}</span>{' '}
                                                <Icon
                                                    icon='ep:arrow-right-bold'
                                                    class='text-xs mt-0.5'
                                                />
                                            </a>
                                        </div>
                                    )}
                                </For>
                            </div>
                        </div>

                        <div class='mt-10 ml-1 space-y-5'>
                            <h2 class='text-2xl font-bold'>Contact</h2>
                            <div class='space-x-5 ml-2 flex items-center'>
                                <For each={Contact}>
                                    {(item) => (
                                        <a
                                            href={item.link}
                                            target='_blank'
                                            class='flex items-center space-x-2 font-medium text-md font-robotomono hover:underline'
                                        >
                                            <Icon icon={item.icon} class='text-sm' />{' '}
                                            <span>{item.name}</span>
                                        </a>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Container>
            </Show>
        </Base>
    );
};

export default Home;
