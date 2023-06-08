import { useRef } from "react";

const useHandleInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.classList.add("focus:border-purple-primary/50");
      const nextSibling = inputRef.current.nextSibling as HTMLElement;
      nextSibling?.classList.add("text-purple-primary");
    }
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      inputRef.current.classList.remove("focus:border-purple-primary/50");
      const nextSibling = inputRef.current.nextSibling as HTMLElement;
      nextSibling?.classList.remove("text-purple-primary");
    }
  };

  return { inputRef, handleInputFocus, handleInputBlur };
};

export default useHandleInput;

