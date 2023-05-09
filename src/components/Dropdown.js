import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/Dropdown.module.css";

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
