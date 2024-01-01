import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

export function EducationCard({
  data,
}: {
  data: {
    institution: string;
    area: string;
    startDate: string;
    endDate: string;
    url: string;
  }[];
}) {
  return (
    <Card>
      {data.map((edu) => {
        return (
          <CardHeader key={edu.institution}>
            <div className="flex flex-direction-col justify-between">
              <CardTitle className="hover:pointer">
                <a href={edu.url}>{edu.institution}</a>
              </CardTitle>
            </div>
            <CardDescription>{edu.area}</CardDescription>
            <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
              {edu.startDate} - {edu.endDate}
            </p>
          </CardHeader>
        );
      })}
    </Card>
  );
}
