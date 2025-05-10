import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./addToListBtn.css"

const AddToListBtn = () => {
  const [add, setAdd] = useState(null);

  const handleAdd = (eventKey) => {
      if (add === eventKey) {
          setAdd(null);
      } else {
          setAdd(eventKey);
      }
  };

  return (
      <Dropdown className="add-to-list-button" onSelect={handleAdd}>
        <Dropdown.Toggle
            variant={add ? 'warning' : 'secondary'} // Change color to yellow if an item is selected, otherwise grey
            id="dropdown-basic"
            className={`add-to-list-toggle ${add ? '' : 'light-grey-toggle'}`}
        >
          {add ? (
              <>
                  <span className="add-to-list-button-text">Added: </span>
                  <br />
                  <span className="add-to-list-button-text">{add}</span>
              </>
          ) : (
              <span className="add-to-list-button-text">Add to List</span>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="SciFi All">SciFi Day</Dropdown.Item>
          <Dropdown.Item eventKey="YA YA YA">YA YA YA</Dropdown.Item>
          <Dropdown.Item eventKey="Dystopia">Dystopia</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
};

export default AddToListBtn;
