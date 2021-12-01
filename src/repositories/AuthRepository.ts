import jwt from "jsonwebtoken";
import { CardDTO } from "./interface";
import Bank from "../models/Bank";

class AuthRepository {
  private banks: Bank[];

  constructor() {
    this.banks = [];
  }

  private async validateTokenJwt(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_SECRET!, (err, user) => {
        resolve(user);
      });
    });
  }

  public async create({ card_limit, id, name, owner, type, token }: CardDTO) {
    const tokenValidated = await this.validateTokenJwt(token!);

    if (tokenValidated) {
      const alreadyExistsIndex = this.banks.findIndex(
        (owner) => owner.owner === tokenValidated
      );

      if (alreadyExistsIndex !== -1) {
        return (this.banks[alreadyExistsIndex] = {
          card_limit,
          id,
          name,
          owner: tokenValidated as string,
          type,
        });
      }

      this.banks = [
        ...this.banks,
        { card_limit, id, name, owner: tokenValidated as string, type },
      ];

      return this.banks;
    }
    return {
      message: "Token inválido",
    };
  }
}

export default AuthRepository;
