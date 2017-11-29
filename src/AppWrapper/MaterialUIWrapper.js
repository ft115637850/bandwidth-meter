import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiTheme from '../palettes/standard';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Ensure that the tap event plugin is not injected multiple times.
// If this happens, then there would be a runtime error on the page.

try {
	injectTapEventPlugin();
} catch (ex) {

}

const MaterialUIWrapper = props => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(props.muiTheme)}>
			{props.children}
		</MuiThemeProvider>
	);
};

MaterialUIWrapper.defaultProps = {
	muiTheme: MuiTheme
};

export default MaterialUIWrapper;
