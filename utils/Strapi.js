import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = 'https://stonxs.herokuapp.com' || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default strapi;
export { apiUrl }
