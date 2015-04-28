import Migme from 'migme'

export function bootstrap({foo = 123, bar = 456} = {}) {
  let migme = new Migme()
  console.log('success!', foo, bar, migme)
}
