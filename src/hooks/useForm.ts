import { ChangeEvent, useState } from "react";

export interface useFormStates {
  [key: string]: string;
}

// FIXME : Исправить типизацию
export type useFormType = (
  callback?: () => void,
  validate?: (values: useFormStates) => string,
) => {
  values: useFormStates;
  errors: useFormStates;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
};

export const useForm: useFormType = (callback, validate) => {
  const [values, setValues] = useState<useFormStates>({});
  const [errors, setErrors] = useState<useFormStates>({});

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setValues({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  // const submitHandler = () => {
  // };

  return {
    values,
    errors,
    changeHandler,
  };
};
