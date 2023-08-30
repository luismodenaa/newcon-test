import * as yup from "yup";

export const addAttractionSchema = yup.object().shape({
  name: yup.string().required("Digite o nome"),
  description: yup
    .string()
    .required("Digite a descrição")
    .max(100, "Máximo de 100 caracteres"),
  adress: yup.string().required("Digite o endereço"),
  city: yup.string().required("Digite a cidade"),
  state: yup.string().required("Digite o estado"),
});

export const editAttractionSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().max(100, "Máximo de 100 caracteres").nullable(),
  adress: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
});
