import { useEffect, useState } from 'react';

export default function Client({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div {...delegated} data-testid="client">
      {children}
    </div>
  );
}
