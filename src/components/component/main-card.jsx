/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/gQGcsw9CIJR
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { subjectService } from "../../services/subject";

export function MainCard() {
  const [subject, setSubject] = useState({});

  async function load() {
    const { id, name } = await subjectService.getOne();
    setSubject({ id, name });
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Card className="flex-1 w-full max-w-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://www.baidu.com/img/flexible/logo/pc/result.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <CardTitle className="text-base">@zhuzhu</CardTitle>
            <CardDescription>3小时前</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-center grid items-center h-[calc(80vh-4rem)]">
        <div className="space-y-2">
          <p className="text-lg font-medium">Iphone15是垃圾</p>
        </div>
      </CardContent>
    </Card>
  );
}