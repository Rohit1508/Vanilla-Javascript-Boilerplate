import {mock} from './mock.js';

export const getPoolDetails = (source, dest) => {
  const result = mock.filter(driver => driver.source.indexOf(source) > -1 && driver.destination.indexOf(dest) > -1 )
  return Promise.resolve(result);
}
