"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getSubscriptionStatus } from "@/actions/subscription/get-status";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SubscriptionSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [isProcessing, setIsProcessing] = useState(true);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkStatus = async () => {
      try {
        const result = await getSubscriptionStatus();

        if (result?.data?.plan === "essential" || result?.data?.subscriptionId) {
          setIsProcessing(false);
          // Small delay to show success state before redirecting
          setTimeout(() => {
            router.replace("/dashboard");
          }, 2000);
          return;
        }

        // Continue polling if not yet active
        if (retries < 20) {
          // Poll for ~40 seconds max
          timeoutId = setTimeout(() => {
            setRetries((prev) => prev + 1);
          }, 2000);
        } else {
          setIsProcessing(false); // Stop processing UI after timeout
        }
      } catch (error) {
        console.error("Error checking subscription status", error);
      }
    };

    checkStatus();

    return () => clearTimeout(timeoutId);
  }, [retries, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            {isProcessing ? (
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-500">
                <CheckCircle2 className="h-8 w-8" />
              </div>
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            {isProcessing
              ? "Confirming your payment..."
              : "Payment confirmed! 🎉"}
          </CardTitle>
          <CardDescription className="text-lg">
            {isProcessing
              ? "We are activating your subscription. This may take a few seconds."
              : "Your subscription is now active. redirecting to dashboard..."}
          </CardDescription>
        </CardHeader>

        {isProcessing && (
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Status</span>
                <span className="flex items-center gap-2 font-medium text-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  Processing
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Transaction ID</span>
                <span className="font-mono text-xs">
                  {sessionId ? `${sessionId.slice(0, 16)}...` : "Loading..."}
                </span>
              </div>
            </div>
          </CardContent>
        )}

        {!isProcessing && retries >= 20 && (
          <CardFooter className="flex flex-col gap-2">
            <p className="text-center text-sm text-muted-foreground">
              It seems taking longer than usual. Please check your dashboard.
            </p>
            <Button
              className="w-full"
              onClick={() => router.replace("/dashboard")}
            >
              Go to Dashboard
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
