import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, Popover } from 'material-ui';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.navigate = (url) => {
      this.props.close();
      this.props.push(url);
    };
  }

  render() {
    return (
      <Popover
        open={this.props.menuOpen}
        onRequestClose={this.props.close}
        anchor={this.props.anchor}
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  push: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  return ownProps;
}

export default connect(mapStateToProps, {
  push,
})(Navigation);
