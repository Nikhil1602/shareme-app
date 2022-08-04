import { useState } from "react";

const useDrag = () => {
  const [drag, setDragged] = useState(false);

  const setDrag = (e) => {
    e.preventDefault();
    setDragged(true);
  };

  const unsetDrag = () => {
    setDragged(false);
  };

  return [drag, setDrag, unsetDrag];
};

export default useDrag;
