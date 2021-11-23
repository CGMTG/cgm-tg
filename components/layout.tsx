import { Box, Flex } from '@chakra-ui/layout'
import { useRouter } from 'next/router'

import Header from './header'
import Sidebar from './sidebar'

const Layout: React.FC = ({ children }) => {
  const r = useRouter()

  if (r.pathname === '/') {
    return (
      <Flex direction='column'>
        <Header />
        <Box mt={4}>{children}</Box>
      </Flex>
    )
  }

  return (
    <Flex>
      <Box w='72' h='100vh' shadow='base'>
        <Sidebar />
      </Box>
      <Box bg='gray.50' w='full'>
        <Header />
        <Box py={4}>{children}</Box>
      </Box>
    </Flex>
  )
}

export default Layout
