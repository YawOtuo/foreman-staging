type Props = {
  text: string;
};

function NoValueComponent({ text }: Props) {
  return (
    <div className="py-16 bg-slate-50 rounded-md w-full flex items-center justify-center text-slate-500">
      <p>{text}</p>
    </div>
  );
}

export default NoValueComponent;
