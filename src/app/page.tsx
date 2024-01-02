import {
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from 'lucide-react';

import { EducationCard } from '@/components/edu-card';
import { ProjectCard } from '@/components/project-card';
import { SkillCardHeader } from '@/components/skill-card-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WorkCard } from '@/components/work-card';
import { data } from '@/data';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center flex-start p-24">
      <Tabs defaultValue="personal" className="w-[450px]">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <div className="flex flex-direction-row justify-between">
                <CardTitle>{data.name}</CardTitle>
                <Avatar>
                  <AvatarImage src={data.image} alt="@o-sca" />
                  <AvatarFallback>{data.initial}</AvatarFallback>
                </Avatar>
              </div>
              <CardDescription>{data.summary}</CardDescription>
              <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none"
                  href={data.location.googlemaps}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {data.location.city}, {data.location.country},{' '}
                  {data.location.timezone}
                </a>
              </p>
            </CardHeader>
            <CardContent>
              <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                <a href={data.email}>
                  <MailIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                <a href={data.tel}>
                  <PhoneIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                <a href={data.profiles.github}>
                  <GithubIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button className="h-8 w-8" variant="outline" size="icon" asChild>
                <a href={data.profiles.linkedin}>
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <EducationCard data={data.education} />
        </TabsContent>
        <TabsContent value="skills">
          <Card>
            <div className="flex flex-col">
              <SkillCardHeader name="Languages" data={data.skills.languages} />
              <SkillCardHeader
                name="Frameworks"
                data={data.skills.frameworks}
              />
              <SkillCardHeader name="Databases" data={data.skills.databases} />
              <SkillCardHeader name="Tools" data={data.skills.tools} />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="experience">
          <WorkCard data={data.work} />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectCard data={data.projects} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
