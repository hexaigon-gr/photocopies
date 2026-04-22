import { setRequestLocale } from "next-intl/server";
import { AtSign, Globe, KeyRound, Save, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/page-header";
import { Switch } from "@/components/ui/switch";
import { BasePageProps } from "@/types/page-props";

const notificationSettings = [
  { id: "email-notifications", label: "Email notifications", description: "Receive email updates about account activity", checked: true },
  { id: "push-notifications", label: "Push notifications", description: "Receive push notifications in your browser", checked: false },
  { id: "weekly-digest", label: "Weekly digest", description: "Get a weekly summary of your activity", checked: true },
];

const SettingsPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your application preferences and configuration."
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General</CardTitle>
            <CardDescription>Basic application settings and information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="app-name" className="flex items-center gap-1.5">
                <Tag className="inline size-3.5" />
                Application Name
              </Label>
              <Input id="app-name" defaultValue="My Application" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="app-url" className="flex items-center gap-1.5">
                <Globe className="inline size-3.5" />
                Application URL
              </Label>
              <Input id="app-url" defaultValue="https://example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="support-email" className="flex items-center gap-1.5">
                <AtSign className="inline size-3.5" />
                Support Email
              </Label>
              <Input id="support-email" type="email" defaultValue="support@example.com" />
            </div>
            <Button icon={<Save className="size-4" />}>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure how you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notificationSettings.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label htmlFor={item.id} className="text-sm font-medium">
                      {item.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch id={item.id} defaultChecked={item.checked} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your security preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password" className="flex items-center gap-1.5">
                <KeyRound className="inline size-3.5" />
                Current Password
              </Label>
              <Input id="current-password" type="password" placeholder="Enter current password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password" className="flex items-center gap-1.5">
                <KeyRound className="inline size-3.5" />
                New Password
              </Label>
              <Input id="new-password" type="password" placeholder="Enter new password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password" className="flex items-center gap-1.5">
                <KeyRound className="inline size-3.5" />
                Confirm New Password
              </Label>
              <Input id="confirm-password" type="password" placeholder="Confirm new password" />
            </div>
            <Button variant="outline">Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
