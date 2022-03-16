const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd07e931b3ef2e3c9147cacb1a9a99076',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;