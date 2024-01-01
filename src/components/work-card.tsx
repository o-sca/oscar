import { Badge } from './ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export function WorkCard({
  data,
}: {
  data: {
    company: string;
    location: string;
    position: string;
    summary: string;
    url: string;
    startDate: string;
    endDate: string;
    labels: string[];
  }[];
}) {
  return (
    <Card>
      {data.map((work) => {
        return (
          <CardHeader key={work.company}>
            <div className="flex flex-direction-row justify-between">
              <CardTitle className="hover:pointer">
                {work.url ? (
                  <a href={work.url}>
                    {work.company}
                    <span className="text-xs ml-1.5 text-muted-foreground">
                      {work.location}
                    </span>
                  </a>
                ) : (
                  <p>
                    {work.company}
                    <span className="text-xs ml-1.5 text-muted-foreground">
                      {work.location}
                    </span>
                  </p>
                )}
              </CardTitle>
              <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                {work.startDate} - {work.endDate}
              </p>
            </div>
            <CardDescription className="italic">
              {work.position}
            </CardDescription>
            <p className="max-w-md text-pretty text-s text-muted-foreground">
              {work.summary}
            </p>
            <div className="flex flex-row flex-wrap flex-start gap-x-1.5 gap-y-1.5">
              {work.labels.map((label) => {
                return (
                  <Badge key={label} variant="outline" className="w-fit">
                    {label}
                  </Badge>
                );
              })}
            </div>
          </CardHeader>
        );
      })}
    </Card>
  );
}
