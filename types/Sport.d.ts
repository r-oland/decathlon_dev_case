type SportEntity = {
  id: number;
  type: string;
  attributes: {
    name?: string;
    description?: string;
    parent_id?: number;
    decathlon_id?: number;
    slug?: string;
    locale: string;
    weather: any[];
    icon?: string;
  };
  relationships: {
    children?: any;
    parent: {
      data: {
        id?: number;
        type?: string;
      };
      links?: {
        self: string;
      };
    };
    group: {
      data: {
        id?: number;
        type?: string;
      };
      links?: {
        self: string;
      };
    };
    related?: any;
    context: {
      data?: any;
    };
    tags: {
      data: Array<string>;
    };
    images: {
      data: Array<{
        url: string;
        variants: Array<{
          thumbnail: {
            url: string;
          };
          medium: {
            url: string;
          };
        }>;
      }>;
    };
  };
  links: {
    self: string;
  };
};

type SportResponseEntity = {
  data: SportEntity[];
  meta: {
    copyright: string;
    authors: Array<string>;
  };
  links: {
    self: string;
  };
};
