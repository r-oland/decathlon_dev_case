// Components==============
import { VtmnBadge } from '@vtmn/react';
import { useMemo } from 'react';
// =========================

export default function Location() {
  const randomNumberBetween1And100 = useMemo(
    () => Math.floor(Math.random() * 100) + 1,
    []
  );

  return (
    <div
      style={{
        cursor: 'pointer',
      }}
    >
      <VtmnBadge value={randomNumberBetween1And100} variant="accent" />
    </div>
  );
}
