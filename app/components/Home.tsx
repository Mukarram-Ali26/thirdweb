"use client"

import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Box, Container, Avatar, BoxProps, Flex, forwardRef, ButtonGroup, IconButton, Stack } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ANIMATION_DURATION = 0.5;

const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Box ref={ref} {...chakraProps} />;
    })
);

const MotionFlex = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Flex ref={ref} {...chakraProps} />;
    })
);
interface HeaderProps extends BoxProps {
    underlineColor: string;
}

const Header = ({ children, underlineColor, ...props }: PropsWithChildren<HeaderProps>) => (
    <Box
        as="h1"
        mt={10}
        mb={6}
        fontSize="3xl"
        lineHeight="shorter"
        fontWeight="bold"
        {...props}
        textAlign="left"
    >
        <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    </Box>
);

interface UnderlinedTextProps {
    color: string;
    h?: string;
    zIndex?: number;
}

const UnderlinedText = (props: PropsWithChildren<UnderlinedTextProps>) => (
    <Box as="span" display="inline-block" position="relative">
        {props.children}
        <Box
            as="span"
            display="block"
            position="absolute"
            bg={props.color || 'gray.200'}
            w="100%"
            h={props.h || '1px'}
            bottom={-2}
        />
    </Box>
);

const Hero = () => {
    const color = 'blue.400';

    return (
        <Container maxW="5xl" p={{ base: 5, md: 12 }}>
            <Flex direction={['column', 'column', 'row']}>
                <MotionBox
                    opacity="0"
                    initial={{
                        translateX: -150,
                        opacity: 0
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1,
                        transition: {
                            duration: ANIMATION_DURATION
                        }
                    }}
                    m="auto"
                    mb={[16, 16, 'auto']}
                >
                    <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
                        <Avatar
                            size="3xl"
                            showBorder={true}
                            borderColor={color}
                            src='https://images.ctfassets.net/bpbqpx524mlk/1YwimNfxaQdRFHKIphRVPQ/72eaf6b3c88027244863ef12375fc36d/WhatsApp_Image_2022-12-16_at_11.23.27_PM.jpeg?h=250'
                        />
                    </MotionBox>
                </MotionBox>
                <MotionFlex
                    position="relative"
                    ml={['auto', 'auto', 16]}
                    m={['auto', 'initial']}
                    w={['90%', '85%', '80%']}
                    maxW="800px"
                    opacity="0"
                    justify="center"
                    direction="column"
                    initial={{
                        opacity: 0,
                        translateX: 150
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                            duration: ANIMATION_DURATION
                        }
                    }}
                >
                    <Box position="relative">
                        <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                            <Header underlineColor={color} mt={0} cursor="pointer" width="max-content">
                                Hey!
                            </Header>
                        </MotionBox>
                    </Box>
                    <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
                        My name is{' '}
                        <Box as="strong" fontWeight="600">
                            Mukarram Ali
                        </Box>{' '}
                        and I&apos;m a{' '}
                        <Box as="span" whiteSpace="nowrap">
                            Full Stack BlockChain Developer and
                        </Box>{' '}
                        <Box as="span" whiteSpace="nowrap">
                            an open source lover&nbsp;
                        </Box>
                        from{' '}
                        <Box as="span" whiteSpace="nowrap">
                            Pakistan 🇵🇰
                        </Box>
                    </Box>
                    <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
                        This is my digital garden, where I write about the things I&apos;m working on and share
                        what I&apos;ve learned. 😊
                    </Box>
                    <Stack justify="space-between" direction="row" align="center" >
                        <ButtonGroup variant="ghost" size='md'>
                            <IconButton
                                as="a"
                                href="https://www.facebook.com/email4mukarramali"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Facebook"
                                icon={<FaFacebook fontSize="3rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://www.linkedin.com/in/mukarram-ali-b22b581ba/"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                icon={<FaLinkedin fontSize="3rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://www.instagram.com/email4mukarram/"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Instagram"
                                icon={<FaInstagram fontSize="3rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://github.com/Mukarram-Ali26"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Github"
                                icon={<FaGithub fontSize="3rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://twitter.com/email4mukarram"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Twitter"
                                icon={<FaTwitter fontSize="3rem" />}
                            />
                            <IconButton
                                as="a"
                                href="https://api.whatsapp.com/send?phone=923059085079"
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Whatsapp"
                                icon={<FaWhatsapp fontSize="3rem" />}
                            />
                        </ButtonGroup>
                    </Stack>
                </MotionFlex>
            </Flex>
        </Container>
    );
};

export default Hero;