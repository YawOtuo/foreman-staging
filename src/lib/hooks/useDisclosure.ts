import { useState } from "react";

function useDisclosure() {
  const [open, setOpen] = useState(false);
  return {
    open,
    setOpen,
  };
}

export default useDisclosure;
