import { Badge } from './ui/badge';
import { CardHeader, CardTitle } from './ui/card';

export function SkillCardHeader({
  name,
  data,
}: {
  name: string;
  data: string[];
}) {
  return (
    <CardHeader>
      <CardTitle className="mb-2">{name}</CardTitle>
      <div className="flex flex-row flex-wrap flex-start gap-x-1.5 gap-y-1.5">
        {data.map((d: string) => {
          return (
            <Badge key={d} variant="outline" className="w-fit">
              {d}
            </Badge>
          );
        })}
      </div>
    </CardHeader>
  );
}
