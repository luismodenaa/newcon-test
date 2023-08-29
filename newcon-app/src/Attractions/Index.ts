export interface IAttraction {
  id: number;
  name: string;
  description: string;
  adress: string;
  city: string;
  state: string;
}

export interface IGetAttractions {
  page: number;
  total: number;
}

export interface ISearchAttractions {
  page: number;
  total: number;
  search: string;
}

export interface IAttractionsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
