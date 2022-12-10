import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PATH_MAIN } from '../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === PATH_MAIN.root) {
      router.push(PATH_MAIN.catalogue);
    }
  });

  return null;
}
