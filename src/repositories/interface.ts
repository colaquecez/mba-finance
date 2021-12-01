export interface CardDTO {
  id: string;
  name: string;
  type: string;
  owner: string;
  card_limit: number;
  token?: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface ChangePasswordDTO {
  token: string;
  oldPassword: string;
  newPassword: string;
}
