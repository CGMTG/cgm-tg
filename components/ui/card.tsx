import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/layout'

type Props = {
  title: string
  subTitle?: string
}

const UICard: React.FC<Props> = ({ title, subTitle, children }) => {
  return (
    <Box p={3} shadow='base' rounded='lg'>
      <Heading size='lg'>{title}</Heading>
      <Text color='gray.500'>{subTitle}</Text>
      <Box py={4}>{children}</Box>
    </Box>
  )
}

export default UICard
