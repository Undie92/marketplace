import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Dropdown.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MoreDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const EvenMoreDots = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="right">
      <Dropdown.Toggle as={MoreDots} id="dropdown-custom-components" />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item className={styles.Dropdown} onClick={handleEdit}>
          Edit
        </Dropdown.Item>
        <Dropdown.Item className={styles.Dropdown} onClick={handleDelete}>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={MoreDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        > Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
