import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

const StartupCardSkeleton = () => (
  <>
    {Array.from({length: 4}, (_, index: number) => (
      <div key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </div>
    ))}
  </>
);

export default StartupCardSkeleton;