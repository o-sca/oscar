import { GithubIcon, GlobeIcon } from 'lucide-react';

import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

export function ProjectCard({
  data,
}: {
  data: {
    name: string;
    description: string;
    url: string;
    github: string;
    startDate: string;
    endDate: string;
    labels: string[];
    skills: string[];
  }[];
}) {
  return (
    <Card>
      <ScrollArea className="h-[750px]">
        {data.map((project) => {
          return (
            <CardHeader key={project.name}>
              <div className="flex flex-direction-row justify-between">
                <CardTitle className="hover:pointer">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-1"
                    >
                      {project.name}
                      <span className="h-1 w-1 rounded-full bg-green-500 ml-1.5"></span>
                    </a>
                  ) : (
                    <p>{project.name}</p>
                  )}
                </CardTitle>
                <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                  {project.startDate} - {project.endDate}
                </p>
              </div>
              <CardDescription className="italic">
                {project.description}
              </CardDescription>
              <div>
                {project.url ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={project.url}>
                      <GlobeIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}

                {project.github ? (
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={project.github}>
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
              <div className="flex flex-row flex-wrap flex-start gap-x-1.5 gap-y-1.5">
                {project.labels.map((label) => {
                  return (
                    <Badge key={label} variant="secondary" className="w-fit">
                      {label}
                    </Badge>
                  );
                })}
                {project.skills.map((skill) => {
                  return (
                    <Badge key={skill} variant="outline" className="w-fit">
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </CardHeader>
          );
        })}
      </ScrollArea>
    </Card>
  );
}
