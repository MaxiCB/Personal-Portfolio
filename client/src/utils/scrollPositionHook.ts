import React from "react";

const useScrollHook = () => {
  const [position, setPosition] = React.useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return position;
};

export default useScrollHook;
