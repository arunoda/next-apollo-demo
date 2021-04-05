// Avoid duplicate requests and request data from the client
// Request data only form the client, do not re - render server - side

import {useEffect, useState} from 'react';

export default function ClientOnly({children, ...delegated}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
