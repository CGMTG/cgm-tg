import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box, Divider, Stack, Text } from '@chakra-ui/layout'
import { FiHome, FiMessageCircle, FiPackage, FiSettings } from 'react-icons/fi'

const SBItems = [
  ['Dashboard', '/', <FiHome />],
  ['Projects', '/about', <FiPackage />],
  ['Messages', '/projects', <FiMessageCircle />],
  ['Settings', '/settings', <FiSettings />],
]

const Sidebar = () => {
  const r = useRouter()

  return (
    <Box py={2}>
      <Text p={2} fontSize='xs' color='gray.400' fontWeight='semibold'>
        GENERAL
      </Text>
      <Stack p={2}>
        {SBItems.map(([title, href, icon], idx) => {
          const isActive = r.pathname === '/app' + (href === '/' ? '' : href)

          return (
            <Link key={idx} href={('/app' + href) as string}>
              <Box
                rounded='md'
                transition='all 0.4s'
                cursor='pointer'
                color={!isActive ? 'gray.400' : 'red.300'}
                _hover={{ color: 'red.300' }}
                bg={isActive ? 'red.50' : 'white'}
                py={2}
              >
                <Text
                  fontWeight={isActive ? 'semibold' : 'normal'}
                  px={4}
                  d='flex'
                  alignItems='center'
                >
                  <Box mr={3}>{icon} </Box>
                  {title}
                </Text>
              </Box>
            </Link>
          )
        })}
      </Stack>
      <Divider my={4} />
    </Box>
  )
}

export default Sidebar
