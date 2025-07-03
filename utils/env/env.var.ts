export class EnvVar {
  static getEnvVar = (): string => {
    const env = process.env.ENV || process.env.NODE_ENV || 'qa'; // default to 'qa'
    if (!env || typeof env !== 'string') {
      throw new Error('Environment variable ENV is not set correctly');
    }
    return env;
  };
}
