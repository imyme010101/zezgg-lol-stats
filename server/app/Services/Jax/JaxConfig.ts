import Env from '@ioc:Adonis/Core/Env'

export interface JaxConfig {
  key_1: string
  key_2: string
  region: string
  regionCode: string,
  requestOptions: JaxConfigRequestOptions
}

export interface JaxConfigRequestOptions {
  retriesBeforeAbort: number
  delayBeforeRetry: number
}

export const JAX_CONFIG: JaxConfig = {
  key_1: Env.get('RIOT_API_KEY_1') as string,
  key_2: Env.get('RIOT_API_KEY_1') as string,
  region: 'kr',
  regionCode: 'ko_kr',
  requestOptions: {
    retriesBeforeAbort: 3,
    delayBeforeRetry: 1000,
  },
}
