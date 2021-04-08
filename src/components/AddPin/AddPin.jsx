import React from 'react'
import {Box, IconButton, Dropdown, Text} from 'gestalt';
import {Link} from 'react-router-dom';

export default function AddPin() {

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const anchorRef = React.useRef(null);
    const handleSelect = ({item}) => {
      setSelected(item);
    };

      return (
          <div style={{position: 'fixed', bottom:'60px', right:'60px'}}>
        <Box display="flex" justifyContent="center">
        <IconButton
          accessibilityControls="custom-dropdown-example"
          accessibilityHaspopup
          accessibilityExpanded={open}
          accessibilityLabel="More Options"
          selected={open}
          icon="add"
          bgColor="lightGray"
          iconColor="darkGray"
          onClick={ () => setOpen((prevVal) => !prevVal) }
          ref={anchorRef}
          size="lg"
        />
        {open && (
          <Dropdown
            id="custom-dropdown-example"
            anchor={anchorRef.current}
            onDismiss={() => {setOpen(false)}}
          >
            <Dropdown.Item
              isExternal
              option={{ value: "item 1", label: "Custom link 1" }}
              handleSelect={handleSelect}
              selected={selected}
            >
              <Box width="100%">
                <Text>
                <Link to="/addPin" className="text-dark text-decoration-none">
                    Add a pin
                </Link>
                </Text>
              </Box>
            </Dropdown.Item>
            <Dropdown.Item
              isExternal
              option={{ value: "item 2", label: "Another custom link" }}
              handleSelect={handleSelect}
              selected={selected}
            >
              <Box width="100%">
                <Text>
                  <Link
                    hoverStyle="none"
                    href="https://google.com"
                    target="blank"
                    className="text-dark text-decoration-none"
                  >
                    Another custom link
                  </Link>
                </Text>
              </Box>
            </Dropdown.Item>
          </Dropdown>
        )}
      </Box>
          </div>
      )
  }
  