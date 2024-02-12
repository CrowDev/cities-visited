export interface Result {
  data:     CityData[];
  links:    Link[];
  metadata: Metadata;
}

export interface CityData {
  id:          number;
  wikiDataId:  string;
  type:        string;
  city:        string;
  name:        string;
  country:     string;
  countryCode: string;
  region:      string;
  regionCode:  string;
  regionWdId:  string;
  latitude:    number;
  longitude:   number;
  population:  number;
}

export interface Link {
  rel:  string;
  href: string;
}

export interface Metadata {
  currentOffset: number;
  totalCount:    number;
}

export interface CityTable {
  id:      number;
  name:    string;
  region:  string;
}

export interface ParamsOptions {
  offset: number;
  limit: number;
}