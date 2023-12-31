import {
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex flex-direction-row justify-between">
            <CardTitle>Oscar Yang Guang Zhu</CardTitle>
            <Avatar>
              <AvatarImage src="https://github.com/o-sca.png" alt="@o-sca" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <CardDescription>
            Full Stack Engineer focused on building products with extra
            attention to detail
          </CardDescription>
          <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
            <a
              className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href="https://www.google.com/maps/place/Vancouver,+BC/@49.2577354,-123.123904,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu"
              target="_blank"
            >
              <GlobeIcon className="h-3 w-3" />
              Vancouver, Canada, PST
            </a>
          </p>
        </CardHeader>
        <CardContent>
          <Button className="h-8 w-8" variant="outline" size="icon" asChild>
            <a href="mailto:oscar@chome.xyz">
              <MailIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button className="h-8 w-8" variant="outline" size="icon" asChild>
            <a href="tel:+17789380721">
              <PhoneIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button className="h-8 w-8" variant="outline" size="icon" asChild>
            <a href="https://github.com/o-sca">
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button className="h-8 w-8" variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/oscar-zhu">
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
