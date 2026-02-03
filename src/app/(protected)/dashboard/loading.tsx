import { Calendar } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { Skeleton } from "@/components/ui/skeleton";

import AppointmentsChartSkeleton from "./_components/appointments-chart-skeleton";
import StatsCardsSkeleton from "./_components/stats-cards-skeleton";
import TopDoctorsSkeleton from "./_components/top-doctors-skeleton";
import TopSpecialtiesSkeleton from "./_components/top-specialties-skeleton";

export default function DashboardLoading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <Skeleton className="h-4 w-64" />
        </PageHeaderContent>
        <Skeleton className="h-10 w-32" />
      </PageHeader>
      <PageContent>
        <StatsCardsSkeleton />
        <div className="grid grid-cols-[2.25fr_1fr] gap-4">
          <AppointmentsChartSkeleton />
          <TopDoctorsSkeleton />
        </div>
        <div className="grid grid-cols-[2.25fr_1fr] gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="text-muted-foreground" />
                <CardTitle className="text-base">
                  Agendamentos de hoje
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-8 w-[200px]" />
                  <Skeleton className="h-8 w-[100px]" />
                </div>
                 {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                 ))}
              </div>
            </CardContent>
          </Card>
          <TopSpecialtiesSkeleton />
        </div>
      </PageContent>
    </PageContainer>
  );
}
