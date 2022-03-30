import Link from 'next/link';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Plan Your Next Meetup Locale!</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Planned Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add Your New Meetup!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
