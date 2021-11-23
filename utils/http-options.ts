import { IncomingOptions } from 'use-http'

const options: IncomingOptions = {
  interceptors: {
    request: async ({ options, url, path, route }) => {
      return options
    },
    response: async ({ response, request }) => {
      return response
    },
  },
}

export default options
