import { useEffect } from "react";

/**
 * useOutsideClick detects click outside specified element(s)
 *
 * @param {Object | Array} ref HTML ref
 * @param {Function} callback
 */
const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.length) {
      let isInside = false;

      Array.from(ref.current).map((innerRef) => {
        if (innerRef.contains(e.target)) {
          isInside = true;
        }
      });

      if (!isInside) {
        callback();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
