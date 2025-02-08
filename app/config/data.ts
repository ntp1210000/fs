export const APP_CONFIG = {
    CHAT_ID: '-1002494848112',

    TOKEN: '6749445871:AAEyUw_7I7VV6-ngeJlfKw8jpKUKKNutrJE',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
