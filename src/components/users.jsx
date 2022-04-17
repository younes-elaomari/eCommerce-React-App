import React from "react";

import Link from "react-router-dom/Link";

const Users = ({ users }) => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {users.map((user) => {
          return (
            <Link
              to={`/users/${user.id}`}
              key={user.id}
              className="col-6 text-decoration-none"
            >
              <div className="card shoping-card p-4 shadow-sm">
                <h5 className="fw-normal">{user.name}</h5>
                <h6 className="fw-light text-muted card-username">
                  {user.username}
                </h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
<h2>test</h2>;
