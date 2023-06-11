export const clearInputRef = (inputRef: React.RefObject<HTMLInputElement>) => {
  if (inputRef.current?.value) {
    inputRef.current.value = "";
  }
};
