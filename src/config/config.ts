export const AppConfig = {
  server: {
    main: process.env.VITE_MAIN_SPRING_SERVER_URL,
  },
  manual: {
    frederiqueAutomatic: process.env.REACT_APP_FREDERIQUE_AUTOMATIC_MANUAL,
    frederiqueQuartz: process.env.REACT_APP_FREDERIQUE_AUTOMATIC_QUARTZ,
  },
};
