const Ping = () => (
  <div className="relative">
    <div className="absolute top-0 -left-1">
      <span className="flex size-[16px]">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
        <span className="relative inline-flex size-[16px] rounded-full bg-primary"></span>
      </span>
    </div>
  </div>
);

export default Ping;