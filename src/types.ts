export interface Tax {
  id: string;
  name: string;
  country: string;
  [key: string]: unknown;
}

export interface Country {
  id: string;
  name: string;
  [key: string]: unknown;
}

