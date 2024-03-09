export interface Finance {
  item: any;
  amount: any;
  id: string;
  type: string;
  category: string;
  price: number;
}

export type ApiFinance = Omit<Finance, 'id'>;

export interface ApiFinances {
  [id: string]: ApiFinance;
}

export interface FinanceMutation {
  type: string;
  category: string;
  price: string;
}

export interface CartFinance {
  finance: Finance;
  amount: number;
}

export interface Customer {
  type: string;
  address: string;
  phone: string;
}

export interface OrderData {
  customer: Customer;
  finances: CartFinance[];
}
