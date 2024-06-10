import { useState } from "react";

function useLottie() {
  const [play, setPlay] = useState<boolean>(false);
  return {
    play,
    setPlay,
  };
}

export default useLottie;
