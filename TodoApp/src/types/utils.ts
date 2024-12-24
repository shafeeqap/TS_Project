export type Items = {
  title: string;
  id: string;
  isCompleted: boolean;
};

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

