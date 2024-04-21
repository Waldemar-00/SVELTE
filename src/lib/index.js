// @ts-nocheck
// place files you want to import through the `$lib` alias in this folder.
import  axios from 'axios'

export async function getFetch (url) {
  const response = await axios.get( url )
  return response.data
}
