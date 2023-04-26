"use client"


import { ReactNode} from 'react';
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
import { ConnectWallet} from '@thirdweb-dev/react';

const NavList = [
    // {
    //     text: 'Sign Message',
    //     link: '/signMessage'
    // },
    {
        text: 'ERC20 TOKEN',
        link: '/token'
    },
    // {
    //     text: 'MTKN Staking',
    //     link: '/tokenStaking'
    // },
    {
        text: 'NFT',
        link: '/nft'
    },
    {
        text: 'DEX',
        link: '/dex'
    },
    {
        text: 'NEWS',
        link: '/news'
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
    // const sdk = useSDK();
    // const address = useAddress()
    // get a signer from somewhere (createRandom is being used purely for example purposes)
// const signer = ethers.Wallet.createRandom();

// get an instance of the SDK with the signer already setup
// const sdk = ThirdwebSDK.fromSigner(signer, "goerli");
    // useEffect(() => {
    //     async function justcall() {
            
            
            // // native currency balance
            // const balance = await sdk?.wallet.balance();
            // console.log("--------------",balance);

    // // ERC20 token balance
    // const erc20balance = await sdk.wallet.balance(tokenContractAddress);
    // transfer 0.8 ETH
    //  await sdk.wallet.transfer("0x...", 0.8);
    //  // transfer 0.8 tokens of `tokenContractAddress`
    // await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
    // This is the message to be signed
    // const message = "Sign this message...";
// }
//         justcall()
//     }, [])

    // // Now we can sign the message with the connected wallet
    // const signature = await sdk.wallet.sign(message);
    // const message = "Sign this message...";
    // const signature = await sdk.wallet.sign(message);

    // // Now we can recover the signing address
    // const address = sdk.wallet.recoverAddress(message, signature);
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
                                >
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
                            <ConnectWallet colorMode={useColorModeValue("light","dark")} auth={{
                                loginOptional: true,
                            }} />
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

        </>
    );
}