export interface Constituency {
  name: string;
}

export interface Area {
  id: number;
  name: string;
  constituency: Constituency;
}
