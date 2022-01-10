


const URL = proces.env.API_URL


if (!URL) {
    throw new Error(
      'Please define the URL environment variable inside .env.local'
    )
  }