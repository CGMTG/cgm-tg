import { useRef } from 'react'
import type { NextPage } from 'next'
import { Input, Box, ButtonGroup, Button, useToast } from '@chakra-ui/react'
import UICard from '../components/ui/card'
import useFetch from 'use-http'

const Home: NextPage = () => {
  const toast = useToast()
  const tokenRef = useRef<HTMLInputElement>(null)
  const loginApi = useFetch('/auth/login')

  const login = () => {
    loginApi.post({ token: tokenRef.current?.value }).then((res) => {
      if (res.ok) {
        localStorage.setItem('token', res.user.token)
        toast({
          title: 'Success',
          description: "You're logged in!",
          status: 'success',
          duration: 3000,
          position: 'bottom-right',
        })
        setTimeout(() => {
          window.location.href = '/app'
        }, 2000)
      }
    })
  }

  return (
    <Box px={4} py={12} maxW='xl' m='0 auto'>
      <UICard title='Dashboard' subTitle='Please enter your token to continue'>
        <Input ref={tokenRef} placeholder='Enter your token' />
        <ButtonGroup mt={4}>
          <Button onClick={login} colorScheme='purple'>
            Continue
          </Button>
          <Button variant='outline'>Generate a token</Button>
        </ButtonGroup>
      </UICard>
    </Box>
  )
}

export default Home
