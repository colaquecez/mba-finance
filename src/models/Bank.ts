import { v4 } from "uuid";

class Bank {
  id: string;
  name: string;
  type: string;
  owner: string;
  card_limit: number;
  constructor({ name, type, owner, card_limit }: Omit<Bank, "id">) {
    this.id = v4();
    this.name = name;
    this.type = type;
    this.owner = owner;
    this.card_limit = card_limit;
  }
}

export default Bank;
