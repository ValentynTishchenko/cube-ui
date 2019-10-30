export type AsyncAction = {
  REQUEST: string;
  SUCCESS: string;
  ERROR: string;
};

export const createAsyncAction = (action: string): AsyncAction => ({
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  ERROR: `${action}_ERROR`,
});
