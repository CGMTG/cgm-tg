import type { NextPage } from 'next'
import { Input, Box, ButtonGroup, Button } from '@chakra-ui/react'
import UICard from '../components/ui/card'

const Home: NextPage = () => {
  return (
    <div>
      <Box maxW='xl' m='0 auto'>
        <UICard
          title='Dashboard'
          subTitle='Please enter your token to continue'
        >
          <Input placeholder='Enter your token' />
          <ButtonGroup mt={4}>
            <Button colorScheme='purple'>Continue</Button>
            <Button variant='outline'>Generate a token</Button>
          </ButtonGroup>
        </UICard>
      </Box>
    </div>
  )
}

export default Home
