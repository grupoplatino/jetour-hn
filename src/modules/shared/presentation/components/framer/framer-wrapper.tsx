"use client";

import React, { ReactHTML } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import dynamic from "next/dynamic";

export type TagNameType = keyof ReactHTML;

export type MotionComponentProps<TagName extends TagNameType> = HTMLMotionProps<TagName>;

export interface FramerProps<TagName extends keyof ReactHTML> {
  as: TagName;
  children?: React.ReactNode;
  props?: MotionComponentProps<TagName>;
}

function Framer<TagName extends keyof ReactHTML>({ as, children, ...props }: FramerProps<TagName>) {
  const MotionComponent = motion[as as keyof typeof motion];

  return <MotionComponent {...props}>{children}</MotionComponent>;
}

export default Framer;
