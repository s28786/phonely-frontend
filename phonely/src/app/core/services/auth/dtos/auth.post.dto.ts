export interface LoginDto {
  identifier: string; // email or username depending on Strapi config
  password: string;
}

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
}
