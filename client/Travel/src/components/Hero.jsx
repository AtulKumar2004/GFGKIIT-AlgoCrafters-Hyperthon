import React from "react";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
    // Navigate to the "land" page when the button is clicked
        navigate('/land');
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <p className='text-white text-4xl pt-16 mx-5'>TravelTracker</p>
            <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">One stop solution for all travel bookings</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Ensure your travel bookings right now with TravelTracker</p>
                    <button onClick={handleClick} className="inline-flex items-center bg-green-600 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                    </button>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwYm9va2luZ3xlbnwwfHwwfHx8MA%3D%3D" alt="mockup" />
                </div>
            </div>
            <hr />
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                            <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                            <p class="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Bonnie Green</div>
                                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                            <p class="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
                            <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Roberta Casas</div>
                                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                            <p class="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
                            <p class="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
                            <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jese Leos</div>
                                <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                            <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                            <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Joseph McFall</div>
                                <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}
export default Hero;