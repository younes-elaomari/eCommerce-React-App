import React, { Component } from "react";

import { getUser } from "../../services/usersService";

class UserDeitails extends Component {
  state = { user: {} };

  async componentDidMount() {
    const userId = this.props.match.params.id;

    try {
      const { data: user } = await getUser(userId);
      this.setState({ user });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div class="container py-5 my-5 deitails-card text-white">
        <div class="feature-content px-3">
          <h2 className="display-6 fw-normal">
            {user.name}{" "}
            <span className="fs-3 fw-light color-primary">
              {user.username}.
            </span>
          </h2>
          <h2 className="fs-5 fw-light">{user.phone}</h2>
          <p className="lead fw-normal text-muted m-auto py-3">
            {user.description}
          </p>
          <h2 className="fs-4 fw-normal">
            website:{" "}
            <span className="fw-light color-primary">{user.website}</span>
          </h2>
          <h2 className="fs-4 fw-normal">
            email: <span className="fw-light color-primary">{user.email}</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default UserDeitails;
