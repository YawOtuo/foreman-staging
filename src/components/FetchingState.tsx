type Props = {
  isLoading: boolean;
  isError: any;
  success: React.ReactNode;
  nullComponent?: React.ReactNode;

  loading: React.ReactNode;
  error?: React.ReactNode;
  skeletonCount: number;
  className?: string;
};

function FetchingState({
  isLoading,
  isError,
  success,
  loading,
  error,
  skeletonCount = 5,
  className,
  nullComponent
}: Props) {
  return (
    <div className={`${className} transition-all`}>
      {!isLoading && !isError && success}

      {!isLoading && !isError && nullComponent}

      {isLoading &&
        Array.from({ length: skeletonCount }).map((_, index) => (
          <div className="" key={index}>
            {loading}
          </div>
        ))}

      {isError && error}
    </div>
  );
}

export default FetchingState;
