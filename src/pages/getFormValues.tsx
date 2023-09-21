const getFormValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const values = [...formData.values()];
  const isEmpty = values.includes("");
  const data = Object.fromEntries(formData);
  return { isEmpty, data, formData };
};

export default getFormValues;
