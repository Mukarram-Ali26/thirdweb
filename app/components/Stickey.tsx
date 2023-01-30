"use client"

import { Box } from '@chakra-ui/layout'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Stickey = () => {
    return (
        <Box sx={{ position: 'sticky', top: '80%' }} pl='80%' color='green.500' my={-50}>
            <a href="https://api.whatsapp.com/send?phone=923059085079" target="_blank" rel="noopener noreferrer" aria-label='Lets Connect'>
                <FaWhatsapp size='100px' />
            </a>
        </Box>
    )
}

export default Stickey