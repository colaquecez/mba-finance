import { Router } from "express";
import AuthRepository from "../repositories/AuthRepository";
import { CardDTO } from "../repositories/interface";
import CreateUserService from "../services/CreateUserService";

const authRouter = Router();

const authRepository = new AuthRepository();

authRouter.post("/card", async (request, response) => {
  const { card_limit, id, name, owner, type } = request.body as CardDTO;
  const token = request.headers.authorization;

  if (!token) {
    return response.send({
      message: "Token obrigatório",
    });
  }

  try {
    const bankIncome = new CreateUserService(authRepository);

    const user = await bankIncome.execute({
      card_limit,
      id,
      name,
      owner,
      type,
      token,
    });

    return response.json(user);
  } catch (error) {
    console.log(error);
  }
});

export default authRouter;
