declare namespace NodeJS {
  interface ProcessEnv {
    FIREBASE_API_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_DATABASE_URL: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: number;
    FIREBASE_APP_ID: string;
    MESUREMENT_ID: string;
  }
}
