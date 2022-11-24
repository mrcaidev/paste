export interface State {
  title: string;
  content: string;
  password: string;
  isPreviewMode: boolean;
}

export type Action =
  | {
      type: "title" | "content" | "password";
      payload: string;
    }
  | {
      type: "isPreviewMode";
      payload: boolean;
    };

export const defaultState: State = {
  title: "",
  content: "",
  password: "",
  isPreviewMode: false,
};

export function reducer(state: State, action: Action) {
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
}
