"use client";
import { ProgressLoader } from "nextjs-progressloader";

const LoadingIndicator = () => {
  return <ProgressLoader color="#E4A951" showSpinner={false} height={4} />;
};

export default LoadingIndicator;
