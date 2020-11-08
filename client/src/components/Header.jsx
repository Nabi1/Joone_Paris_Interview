import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Header = () => (
  <Typography className="mt-3" variant="h5" gutterBottom>
    <Link href="https://www.joone.fr/" target="_blank">
      Joone Interview
      <img
        className="ml-2 mb-1 mb-2"
        src="https://cdn.shopify.com/s/files/1/1956/4693/files/flavicon-joone_small.png?v=1545216161"
        alt="logo"
      />
    </Link>
  </Typography>
);
