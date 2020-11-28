import { ChangeEvent, useState } from "react";
import { KeyStringInterface } from "../types/common";

// FIXME : Исправить типизацию

export interface UseFormReturn<T> {
  values: T;
  errors: KeyStringInterface;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const useForm = <T extends KeyStringInterface = KeyStringInterface>(): UseFormReturn<T> => {
  const [values, setValues] = useState<T>({} as T);
  const [errors, setErrors] = useState<KeyStringInterface>({});

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setValues({
      [evt.currentTarget.name]: evt.currentTarget.value,
    } as T);
  };

  // const submitHandler = () => {
  // };

  return {
    values,
    errors,
    changeHandler,
  };
};
