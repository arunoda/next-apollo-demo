export interface TPerson {
  name: string;
  address: string;
  email: string;
  phone: string;
  id: number;
}

export type TPersons = TPerson[];

export interface ICardPersons {
  firstPersons: TPersons;
}
