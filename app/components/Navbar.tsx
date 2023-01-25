"use client"


import { ReactNode } from 'react';
import Link from 'next/link';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
    useColorMode,
    Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { FaWhatsapp } from 'react-icons/fa';

const NavList = [
    {
        text: 'ERC20 TOKEN',
        link: '/token'
    },
    {
        text: 'NFT',
        link: '/nft'
    },
    {
        text: 'Staking',
        link: '/Stacking'
    },
    {
        text: 'Sign Message',
        link: '/Message'
    },

]

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
    <Link
        href={link} >
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'blue.800')} px={4} m={4} boxShadow="xl">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Link}
                                href='/'
                                rounded={'full'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'md'}
                                    src={
                                        'https://images.ctfassets.net/bpbqpx524mlk/1YwimNfxaQdRFHKIphRVPQ/72eaf6b3c88027244863ef12375fc36d/WhatsApp_Image_2022-12-16_at_11.23.27_PM.jpeg?h=250'
                                    }
                                />
                            </MenuButton>
                        </Menu>
                        <Button onClick={toggleColorMode} variant="nav-link">
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                    <Spacer />
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={1} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {NavList.map((link) => (
                                <NavLink link={link.link} key={link.text} >{link.text}</NavLink>
                            ))}

                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {NavList.map((link) => (
                                <NavLink link={link.link} key={link.text}>{link.text}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {/* <Box sx={{ position: '-webkit-sticky', top: '10%', }}>

<FaWhatsapp size='sm'/>
</Box> */}
        </>
    );
}