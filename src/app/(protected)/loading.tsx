import {
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderContent,
} from "@/components/ui/page-container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProtectedLoading() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="mt-2 h-4 w-64" />
        </PageHeaderContent>
        <Skeleton className="h-10 w-32" />
      </PageHeader>
      <PageContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
        <Skeleton className="mt-6 h-[400px] w-full rounded-xl" />
      </PageContent>
    </PageContainer>
  );
}

