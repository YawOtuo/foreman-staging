const MetricCard = ({ title, value }: { title: any; value: any }) => (
  <div className="border-0 shadow-lg rounded-lg hover:bg-secondary cursor-pointer px-5 py-4">
    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
      <div className="text-sm font-medium">{title}</div>
    </div>
    <div className="text-2xl font-semibold text-primary lg:text-slate-600">{value}</div>
  </div>
);

export default MetricCard;
