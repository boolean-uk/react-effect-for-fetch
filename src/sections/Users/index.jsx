import { useState, useEffect } from "react";

import UserList from "./components/UsersList";

function UsersSection() {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          <UserList useState={useState} useEffect={useEffect} />
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
