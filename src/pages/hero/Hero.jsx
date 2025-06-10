import React from 'react';
import { motion } from 'framer-motion';
import Bus2 from '../../assets/bus5.png';

const Hero = () => {
    const imageVariants = {
        initial: {
            x: "100%",
        },
        animate: {
            x: "3%",
            transition: {
                duration: 3,
                ease: "easeInOut",
            }
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 px-4 sm:px-7 mt-[8ch] flex items-center justify-center flex-col hero relative overflow-hidden'>
            <div className="flex-1 w-full flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12 pb-10">
                <motion.div
                    className="w-full md:w-[55%] lg:w-[45%] xl:w-[35%] h-auto rounded-md flex flex-col justify-center space-y-8 md:space-y-14 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        className="space-y-4 md:space-y-5"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-50 leading-tight md:leading-[1.15]"
                            variants={textVariants}
                            transition={{ duration: 0.8 }}
                        >
                            Reserve Your Bus{' '}
                            <span className="text-violet-400 tracking-wide">Tickets</span> Now
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg font-normal text-neutral-300 line-clamp-3"
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Find and book your bus tickets with just a few clicks. We offer a
                            wide range of buses and schedules to suit your journey.
                        </motion.p>
                    </motion.div>

                    <motion.button
                        className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-2 px-5 sm:py-3 sm:px-6 rounded-md ease-in-out duration-300"
                        variants={textVariants}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Reserve Seat Now
                    </motion.button>
                </motion.div>

                <div className="w-full h-[200px] sm:h-[250px] md:h-full rounded-md flex items-end justify-end md:absolute top-0 right-0 md:right-48">
                    <motion.img
                        className="w-full max-w-[600px] aspect-[4/2] object-contain"
                        src={Bus2}
                        alt='bus img'
                        initial="initial"
                        animate="animate"
                        variants={imageVariants}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;