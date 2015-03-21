/**
 * Layout and route class
 * @flow
 */

var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect,

    ReactBootstrap = require('react-bootstrap'),
    Nav = ReactBootstrap.Nav,
    ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    MenuItem = ReactBootstrap.MenuItem,
    ButtonLink = ReactRouterBootstrap.ButtonLink,
    DropdownButton = ReactBootstrap.DropdownButton,
    ButtonToolbar = ReactBootstrap.ButtonToolbar;

var Layout = require("./layout");
let Empty = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    render(){
        return <RouteHandler />
    }
});

// Define react-router routes
var routes = (
    <Route name="/" handler={Layout}>
        <DefaultRoute handler={require('./home')} />

        <Route name="stickydiv" handler={require('./stickydiv')} />
        <Route name="static" handler={require('./static')} />
        <Route name="mixin" handler={require('./mixin')} />
        <Route name="flux" handler={require('./flux')} />
        <Route name="reflux" handler={require('./reflux')} />
        <Route name="login" handler={require('./login')} />
        <Route name="markdown" handler={require('./markdown')} />
        <Route name="home" handler={require('./home')} />
        <Route name="button" handler={require('./button')} />
        <Route name="mcfly" handler={require('./mcfly')} />
        <Route name="source" handler={require('./source')} />
        <Route name="articles" handler={require('./articles')}>

            <Route name="/articles/article/:id" handler={require('./articles/item')} />
        </Route>
        <Route name="breadcrumbs" handler={require('./breadcrumbs')} />
        <Route name="reactfire" handler={require('./reactfire')} />
        <Route name="forms" handler={require('./forms')} />
        <Route name="charts" handler={require('./charts')} />
        <Route name="animations" handler={require('./animations')} />
        <Redirect from="/" to="home" />
    </Route>
);



// Run the router
Router.run(routes, function (Handler) {
    // Render the root app view-controller
    React.render(<Handler />, $('#app-root')[0]);
});

