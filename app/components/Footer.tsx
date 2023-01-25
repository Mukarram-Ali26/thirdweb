"use client"

import { ButtonGroup, Container, IconButton, Stack, Text, Avatar } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Footer = () => (
    <Container as="footer" role="contentinfo" py={{ base: '10', md: '16' }}>
        <Stack spacing={{ base: '4', md: '5' }}>
            <Stack justify="space-between" direction="row" align="center">
                <Avatar
                    size={'xl'}
                    src={
                        'https://images.ctfassets.net/bpbqpx524mlk/1YwimNfxaQdRFHKIphRVPQ/72eaf6b3c88027244863ef12375fc36d/WhatsApp_Image_2022-12-16_at_11.23.27_PM.jpeg?h=250'
                    }
                />

                <ButtonGroup variant="ghost">
                    <IconButton
                        as="a"
                        href="https://www.facebook.com/email4mukarramali"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Facebook"
                        icon={<FaFacebook fontSize="2rem" />}
                    />
                    <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/mukarram-ali-b22b581ba/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin fontSize="2rem" />}
                    />
                    <IconButton
                        as="a"
                        href="https://www.instagram.com/email4mukarram/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Instagram"
                        icon={<FaInstagram fontSize="2rem" />}
                    />
                    <IconButton
                        as="a"
                        href="https://github.com/Mukarram-Ali26"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Github"
                        icon={<FaGithub fontSize="2rem" />}
                    />
                    <IconButton
                        as="a"
                        href="https://twitter.com/email4mukarram"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Twitter"
                        icon={<FaTwitter fontSize="2rem" />}
                    />
                    <IconButton
                        as="a"
                        href="https://api.whatsapp.com/send?phone=923059085079"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Whatsapp"
                        icon={<FaWhatsapp fontSize="2rem" />}
                    />
                </ButtonGroup>
            </Stack>
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
            </Text>
        </Stack>
    </Container>
)

export default Footer;