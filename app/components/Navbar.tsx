"use client"

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavList = [
    {
      text: 'ERC20 TOKEN',
      link: '/Token'
    },
    {
      text: 'NFT',
      link: '/Nft'
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
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={link}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Link}
                href='/'
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.ctfassets.net/bpbqpx524mlk/1YwimNfxaQdRFHKIphRVPQ/72eaf6b3c88027244863ef12375fc36d/WhatsApp_Image_2022-12-16_at_11.23.27_PM.jpeg?h=250'
                  }
                />
              </MenuButton>
            </Menu>
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
                <NavLink link={link.link}  key={link.text}>{link.text}</NavLink>
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

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}