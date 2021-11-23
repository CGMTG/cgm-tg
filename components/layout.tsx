import { Box } from '@chakra-ui/layout'
import Header from './header'

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box py={4}>{children}</Box>
    </Box>
  )
}

export default Layout
