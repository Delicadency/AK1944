"use client";

import { trails, TrailSlug } from "../data/trails";
import { Button } from "@/components/shared/Button/Button";

type TrailSwitcherProps = {
  active: TrailSlug;
  onChange: (slug: TrailSlug) => void;
};

export const TrailSwitcher = ({ active, onChange }: TrailSwitcherProps) => {
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4 pb-16 pt-7">
      {Object.entries(trails).map(([slug, trail]) => {
        const typedSlug = slug as TrailSlug;
        const isActive = typedSlug === active;

        return (
          <Button
            key={slug}
            label={trail.displayName}
            ariaDescription={`Zmień na ${trail.displayName}`}
            variant="secondary"
            size={isActive ? "large" : "medium"}
            onClick={() => onChange(typedSlug)}
            disabled={!trail.enabled}
            className="w-[360px]"
          />
        );
      })}
    </div>
  );
};
