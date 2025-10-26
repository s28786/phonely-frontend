import {StrapiUser} from './strapi-user.get.dto';

export interface AuthResponseDto {
  jwt: string;
  user: StrapiUser;
}
