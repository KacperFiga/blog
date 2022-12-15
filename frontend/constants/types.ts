export interface postI {
  id?: string;
  attributes: {
    title: {
      type: string;
    };
    content: {
      type: string;
    };
    date: {
      type: string;
    };
  };
}

export interface postsI {
  data: {
    [x: string]: any;
    id?: string;
    attributes: {
      title: {
        type: string;
      };
      content: {
        type: string;
      };
      date: {
        type: string;
      };
    };
  };
}
