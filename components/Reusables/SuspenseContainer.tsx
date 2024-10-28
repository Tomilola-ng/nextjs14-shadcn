"use client";

import React, { Suspense } from "react";
import Loading from "./Loading";

export default function SuspenseContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
