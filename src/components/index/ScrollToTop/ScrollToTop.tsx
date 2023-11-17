"use client";
import { useEffect } from "react";
import React from "react";

export default function ScrollToTop() {
  useEffect(() => {
    (window as any).scrollTo(0, 0);
  }, []);
  return null;
}
