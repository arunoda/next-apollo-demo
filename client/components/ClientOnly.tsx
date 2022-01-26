// wrapper-component to update some client side state to say
//it is now safe to render the client-side only component

import { useEffect, useState } from "react";

export default function ClientOnly({ children, ...delegated }) {

  // state to verify if component is mounted
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); 	// upadting the stat once component is mounted
  }, []);


  // until component is not mounted, child component will not redendered
  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

