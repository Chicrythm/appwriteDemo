import {Client, Databases, ID} from 'appwrite'

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6520ba0c0ed0069af1ae')

export const databases = new Databases(client);

export default client;