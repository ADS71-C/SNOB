import React from 'react';
import { AppBar, Paper } from 'material-ui';
// Custom Components
import './overview.css';
import Navigation from './navigation';
import AnalysisMaster from './analyses/picker/analysisPickerWrapped';

export class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      anchor: undefined,
    };

    this.openMenu = () => this.setState({ menuOpen: true });
    this.closeMenu = () => this.setState({ menuOpen: false });
    this.setAnchor = anchor => this.setState({ anchor });
  }

  render() {
    return (
      <div>
        <AppBar
          title="S.N.O.B."
          onLeftIconButtonTouchTap={(event) => {
            this.setAnchor(event.currentTarget);
            this.openMenu();
          }}
        />

        <Navigation
          menuOpen={this.state.menuOpen}
          close={this.closeMenu}
          anchor={this.state.anchor}
        />

        <div className="overview-content">
          <div className="overview-content-inner">
            <Paper>
              {this.props.children || 'Hello world'}
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
