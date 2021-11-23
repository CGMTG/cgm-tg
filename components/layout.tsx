import { Box, Flex } from '@chakra-ui/layout'

import Header from './header'
import Sidebar from './sidebar'

const Layout: React.FC = ({ children }) => {
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
