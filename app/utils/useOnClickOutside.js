import { useEffect } from "react";

const useOnClickOutside = (ref, callback) => {
  useEffect(
    () => {
      const handleClick = (e) => {
        if (!ref.current || ref.current.contains(e.target)) {return};
        callback(e);
      };

      document.addEventListener("click", handleClick);
      
      return () => {
        document.addEventListener("click", handleClick);
      };
    },
    [ref, callback]
  );
};

export default useOnClickOutside;
