// hooks/use-safe-motion.ts
"use client";

import { useEffect, useState } from "react";

export function useSafeMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(true);
  }, []);

  return enabled;
}
