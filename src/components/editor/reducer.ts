export interface State {
  title: string;
  content: string;
  password: string;
  isPreviewMode: boolean;
}

// TODO: Derive `Action` from `State`, instead of hard-coding those property names.
export type Action =
  | { type: "title"; payload: string }
  | { type: "content"; payload: string }
  | { type: "password"; payload: string }
  | { type: "isPreviewMode"; payload: boolean };

export const defaultState: State = {
  title: "",
  content: "",
  password: "",
  isPreviewMode: false,
};

type Reducer = (state: State, action: Action) => State;

export const reducer: Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "title": {
      return { ...state, title: payload };
    }
    case "content": {
      return { ...state, content: payload };
    }
    case "password": {
      return { ...state, password: payload };
    }
    case "isPreviewMode": {
      return { ...state, isPreviewMode: payload };
    }
    default: {
      throw new Error("Invalid action type: " + type);
    }
  }
};
