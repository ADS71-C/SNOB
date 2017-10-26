import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Menu, MenuItem, Popover } from 'material-ui';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.navigate = (url) => {
      this.props.close();
      console.log(<this className="props" />);
      return (<Redirect to={url} />);
    };
  }

  render() {
    return (
      <Popover
        open={this.props.menuOpen}
        onRequestClose={this.props.close}
        canAutoPosition
        style={{
          height: '100%',
        }}
      >
        <Menu width={300}>
          <MenuItem primaryText="Home" onClick={() => this.navigate('/')} />
          <MenuItem primaryText="Analyses" onClick={() => this.navigate('/analyses')} />
        </Menu>
      </Popover>
    );
  }
}

Navigation.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  anchor: PropTypes.object,
  close: PropTypes.func.isRequired,
};
