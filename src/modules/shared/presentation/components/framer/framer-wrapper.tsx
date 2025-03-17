"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

export type TagNameType = keyof JSX.IntrinsicElements;

export type MotionComponentProps<TagName extends TagNameType> =
  HTMLMotionProps<TagName>;

export interface FramerProps<TagName extends keyof JSX.IntrinsicElements> {
  as: TagName;
  children?: React.ReactNode;
  props?: MotionComponentProps<TagName>;
}

function Framer<TagName extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...props
}: FramerProps<TagName>) {
  const MotionComponent = motion[as as keyof typeof motion];

  return <MotionComponent {...props}>{children}</MotionComponent>;
}

export default Framer;
