import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const NextLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  return <Link {...props}>{React.cloneElement(child, {
    active: router && router.pathname === props.href,
    default: !router || router.pathname !== props.href,

  })}</Link>;
};

export default withRouter(NextLink);
