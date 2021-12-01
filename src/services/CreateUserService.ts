import AuthRepository from "../repositories/AuthRepository";

import { CardDTO } from "../repositories/interface";

class CreateCardService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public execute({ card_limit, id, name, owner, type, token }: CardDTO) {
    const user = this.authRepository.create({
      card_limit,
      id,
      name,
      owner,
      type,
      token,
    });

    return user;
  }
}

export default CreateCardService;
