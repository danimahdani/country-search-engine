import { useRef } from "react";

const useHandleInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.classList.add("focus:border-purple-600/50");
      const nextSibling = inputRef.current.nextSibling as HTMLElement;
      nextSibling?.classList.add("text-purple-600");
    }
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      inputRef.current.classList.remove("focus:border-purple-600/50");
      const nextSibling = inputRef.current.nextSibling as HTMLElement;
      nextSibling?.classList.remove("text-purple-600");
    }
  };

  return { inputRef, handleInputFocus, handleInputBlur };
};

export default useHandleInput;
