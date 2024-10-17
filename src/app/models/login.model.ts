export interface ClientCredentials {
  isClient: true; 
  cpf: string;
  password: string;
}

export interface SupplierCredentials {
  isClient: false; 
  cnpj: string;
  password: string;
}

export type Credentials = ClientCredentials | SupplierCredentials;

export interface LoginResponse {
  jwt: string
}