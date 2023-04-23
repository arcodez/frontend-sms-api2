import { Link } from "@reach/router";
import React, { Fragment } from "react";
import { project } from "../../../config";
import "./navbar.css";

export function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>{project.name}</h1>
      </Link>
      <ul>
        <li>
          <Link to="/twilio">Twilio</Link>
        </li>
        <li>
          <Link to="/nexmo">Nexmo</Link>
        </li>
        <li>
          <Link to="/textlocal">TextLocal</Link>
        </li>
      </ul>
    </nav>
  );
}
