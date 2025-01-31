import Link from 'next/link';
import React, { useState } from 'react';

function NavBar() {
  const [collapseStatus, setCollapseStatus] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginBottom: '50px' }}
    >
      <Link href="/">
        <a className="navbar-brand">591 租屋簡易查詢</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setCollapseStatus(status => !status)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        id="navbarToggler"
        className={
          collapseStatus
            ? 'collapse navbar-collapse show'
            : 'collapse navbar-collapse'
        }
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">
                About <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
