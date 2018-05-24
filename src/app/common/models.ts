/**
 * Created by exley on 5/8/18.
 */
export interface Resource {
  id: number;
  code: string;
  name: string;
}

export class ApiResponse {
  data: any;
  errors: any[];
  timestamp: string;
  messages: string[];
}

export class Account implements Resource {
  id: number;
  code: string;
  name: string;
  created: string;
  inceptionDate: string;
  endDate: string;
}

export class Deal implements Resource {
  id: number;
  code: string;
  name: string;
  created: string;
  inceptionDate: string;
  endDate: string;
}

export class Strategy implements Resource {
  id: number;
  code: string;
  name: string;
  created: string;
  inceptionDate: string;
  endDate: string;
}

export class Tag {
  name: string;
  id?: number;
  accounts?: string;
}
