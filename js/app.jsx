/** @jsx React.DOM */
var Router         = window.ReactRouter;
var Route          = Router.Route;
var Redirect       = Router.Redirect;
var NotFoundRoute  = Router.NotFoundRoute;
var DefaultRoute   = Router.DefaultRoute;
var Link           = Router.Link;
var RouteHandler   = Router.RouteHandler;

var Row            = ReactBootstrap.Row
var Col            = ReactBootstrap.Col

var Panel          = ReactBootstrap.Panel
var Grid           = ReactBootstrap.Grid
var Navbar         = ReactBootstrap.Navbar
var CollapsableNav = ReactBootstrap.CollapsableNav
var Nav            = ReactBootstrap.Nav
var NavItem        = ReactBootstrap.NavItem
var Glyphicon      = ReactBootstrap.Glyphicon
var DropdownButton = ReactBootstrap.DropdownButton
var MenuItem       = ReactBootstrap.MenuItem
var PageHeader     = ReactBootstrap.PageHeader
var Badge          = ReactBootstrap.Badge

var App = React.createClass({
  render: function() {
    return (
	    <div id="wrapper">
	        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
	            <NavBar/>
				<SideBar/>
	        </nav>
			<RouteHandler {...this.props}/>
	    </div>

    )
  }
});


var NavBar = React.createClass({
  render: function() {
    return (
        <div>
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar" />
	            <span className="icon-bar" />
	            <span className="icon-bar" />
	          </button>
	          <a className="navbar-brand" href="index.html">FxOSPMClient</a>
			</div>
	        <ul className="nav navbar-top-links navbar-right">
		        <NavMessage/>
		        <NavProgress/>
		        <NavBell/>  
		        <NavUser/>
	        </ul>
        </div> 
    );
  }
});

var NavMessage = React.createClass({
  render: function() {
    return (
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-envelope fa-fw" />  <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-messages">
              <li>
                <a href="#">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a className="text-center" href="#">
                  <strong>Read All Messages</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
            {/* .dropdown-messages */}
          </li>
		);
	}
});

var NavProgress = React.createClass({
  render: function() {
    return (
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-tasks fa-fw" />  <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-tasks">
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 1</strong>
                      <span className="pull-right text-muted">40% Complete</span>
                    </p>
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span className="sr-only">40% Complete (success)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 2</strong>
                      <span className="pull-right text-muted">20% Complete</span>
                    </p>
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 3</strong>
                      <span className="pull-right text-muted">60% Complete</span>
                    </p>
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span className="sr-only">60% Complete (warning)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <p>
                      <strong>Task 4</strong>
                      <span className="pull-right text-muted">80% Complete</span>
                    </p>
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span className="sr-only">80% Complete (danger)</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a className="text-center" href="#">
                  <strong>See All Tasks</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
        	{/* .dropdown-tasks */}
          </li>
		);
	}
});

var NavBell = React.createClass({
  render: function() {
    return (
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-bell fa-fw" />  <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-alerts">
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-comment fa-fw" /> New Comment
                    <span className="pull-right text-muted small">4 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-twitter fa-fw" /> 3 New Followers
                    <span className="pull-right text-muted small">12 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-envelope fa-fw" /> Message Sent
                    <span className="pull-right text-muted small">4 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-tasks fa-fw" /> New Task
                    <span className="pull-right text-muted small">4 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">
                  <div>
                    <i className="fa fa-upload fa-fw" /> Server Rebooted
                    <span className="pull-right text-muted small">4 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a className="text-center" href="#">
                  <strong>See All Alerts</strong>
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </li>
		);
	}
});

var NavUser = React.createClass({
  render: function() {
    return (
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <i className="fa fa-user fa-fw" />  <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li><a href="#"><i className="fa fa-user fa-fw" /> User Profile</a>
              </li>
              <li><a href="#"><i className="fa fa-gear fa-fw" /> Settings</a>
              </li>
              <li className="divider" />
              <li><a href="login.html"><i className="fa fa-sign-out fa-fw" /> Logout</a>
              </li>
            </ul> 
          </li>
		);
	}
});

var SideBar = React.createClass({

  getInitialState: function(){

  	return {selected: 'dashboard'};
  },

  handleSelect: function() {
  
    setState({selected: 'project'})
  },  

  render: function() {
    return (
	  <Nav bsStyle='pills' stacked className="navbar-default sidebar">
	    <NavItem eventKey={1} title='Dashboard' href='./index.html#'><Glyphicon glyph='dashboard'/> Dashboard </NavItem>
	    {/*<NavItem eventKey={2} title='Projects' href='./index.html#/project'><Glyphicon glyph='th-large'/> Projects </NavItem>*/}
	  </Nav>

    );
  }
});

var SearchableRemoteDataMixin = {
  //need to implement `function buildURL(query) {...}`
  loading: {meta:{}, objects: [{name:"Loading..."}]},
  notFound: {data:{objects:[{name:"Can't find anything. Try loosen the search criteria."}]}},

  loadRemoteData: function(url) {
  	 var deferred = $.Deferred();

    $.ajax({
      url: url,
      timeout: 10000, // Force trigger the error callback

      success: function(data) {
        this.setState({data: data});
        console.log('success! total bugs: '+ this.state.data.bugs.length);
        deferred.resolve();
      }.bind(this),

      /*
      FIXME: this doesn't seem to work under jsonp proxy
      statusCode: {
        400: function() {
          alert.log('bad request'); }, },
      */
      error: function(xhr, status, err) {
      	error = true;
        this.setState(this.notFound)
        console.error(xhr, status, err.toString());
        deferred.reject();
      }.bind(this)
    });

    return deferred.promise(); 
  },

  getInitialState: function() {
  
    return {data: this.loading};
  },
  
  handleSearch: function(query) { 
    this.loadRemoteData(this.buildURL(query));
    this.setState({query: query, data: this.loading});
    //TODO: two way data binding?
    //console.log("handle search: " + query)
    this.refs.searchform.forceUpdateInput(query);
    window.history.pushState({}, "MozTrap", document.URL.split("search/")[0] + "search/" + encodeURI(query));
  },

  handleAddFilter: function(additionalQuery, removeRegex){
    var newQuery = this.state.query.replace(removeRegex, "")
    console.log(newQuery)
    this.handleSearch(newQuery + additionalQuery);
  },

  /*
  componentWillReceiveProps: function() {
    this.setState({data: this.loading})
    this.loadRemoteData(this.buildURL(this.state.query));
  },
  */

}

var DashboardView = React.createClass({
  mixins: [SearchableRemoteDataMixin],
  bugapi_url: config.bugBaseUrl + "/bug",
  defaultArgs : [],

  buildURL: function(args) {


      return (buildQueryUrl(this.bugapi_url, args)
             );
  },

 //  refreshData: function(args) {

	// aggregateBugCount(this.state.data);
 //  },

  componentDidMount: function() {
  	//TODO: need to change to acquire search criteria
  	this.defaultArgs.push(encodeURIComponent('product') + "=" + encodeURIComponent('Firefox OS'));
	this.defaultArgs.push(encodeURIComponent(config.flag) + "=" + encodeURIComponent(config.defaultRelease+ '+'));
	this.defaultArgs.push(encodeURIComponent('status') + "=" + encodeURIComponent('__open__'));
	this.defaultArgs.push(encodeURIComponent('include_fields') + "=" + encodeURIComponent('id, component, assigned_to, creation_time'));

    this.updateData();
	setInterval(this.updateData, config.reload*1000); 
  }, 

  componentWillReceiveProps: function(nextProps){
  	this.componentDidMount();

  },

  getInitialState: function() {
  
    return {component_count : {}};
  },

  updateData: function(){

  	this.loadRemoteData(this.buildURL(this.defaultArgs)).then(function () {
	})
  },

  render: function() {
    return (
		<div id="page-wrapper">
		    <PageHeader>Dashboard</PageHeader>
		    <Grid>
		        <Row className='show-grid'>
		            <GridList data={aggregateBugCount(this.state.data)}/>
		        </Row>
		    </Grid>
		</div>
    );
  }
});

var GridList = React.createClass({

  render: function() {

  	var component; 
  	var centeralign = {margin: '0px auto'};
	var white = {color: 'white'};

  	var	bugzillaLink = '';
	var	bugzillaLinkNobody = '';

    return (
    <div>
    {
    this.props.data.map(function(item) {

    	component = (
  		<h3 style={centeralign}>{item.component}</h3>
  		)
  		
  		owner = (
  		<strong style={centeralign}>{item.owner}</strong>
  		)

		if (item.count!=0)
		{
			bugzillaLink = config.bugLinkUrl+item.count_bugs.join(',');
		}
		else
			bugzillaLink = '';

		if (item.count_nobody!=0)
		{
			bugzillaLinkNobody = config.bugLinkUrl+item.count_nobody_bugs.join(',');
		}
		else
			bugzillaLinkNobody = '';
		
    	return (
    		<Col xs={2} md={2}>
    			<Panel header={component} footer={owner} bsStyle='primary'>
    			<p style={centeralign}><strong><a href={bugzillaLink} target='_blank'> {item.count}</a> </strong>
           			<Badge style={centeralign}><a href={bugzillaLinkNobody} target='_blank' style={white}>{item.count_nobody}</a></Badge>
           		</p>
    			</Panel>
    		</Col>
    		)
    	})
    }
 </div>
    );
  }
});


var ProjectCreate = React.createClass({

  render: function() {
    return (
      	<div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Create New Project</h1>
                </div>
            </div>
        </div>
    );
  }
});


var ProjectBreakdown = React.createClass({
  mixins: [SearchableRemoteDataMixin],
  // bugapi_url: config.bugBaseUrl + "/api/v1/project/",
  prjapi_url: config.prjBaseUrl + "/api/v1/project/",

  buildURL: function(query) {
      return (buildQueryUrl(this.api_url, query, caseversionCodegen) + 
              "&limit=" + config.defaultListLimit
              //"&order_by=" + "-modified_on"
             );
  },

  handleQueueUpdate: function(e) {
    if (e.target.checked){
      var newState = {};
      newState['checked'] = this.state['checked'].concat(e.target.value);
      //console.log('will set state')
      this.setState(newState);
    }
    else {
      this.state['checked'].splice(this.state['checked'].indexOf(e.target.value), 1);
      var newState = {};
      newState['checked'] = this.state['checked'];
      //console.log('will set state')
      this.setState(newState);
    }
  },

  render: function() {
    return (
      	<div id="page-wrapper">
		    <PageHeader>Project</PageHeader>
		    <Grid>
		    {
		    	<img src='http://www.sarkea.com.tw/images/pagemaster/underconstruction.jpg'/>
		        // <Row className='show-grid'>
		        //     <GridList data={aggregateBugCount(this.state.data)}/>
		        // </Row>
		        // 
		    }
		    </Grid>
		</div>
    );
  }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={DashboardView}/>
    <Route name="dashboard"          path="/dashboard" handler={DashboardView}/>
    <Route name="project"            path="/project" handler={ProjectBreakdown}/>
    <Route name="project_create"     path="/project/create" handler={ProjectCreate}/>
    <Route name="caseversion_search" path="/caseversion/search/:query" handler={ProjectBreakdown}/>
    <Redirect                        from="/search/:query"  to="/caseversion/search/:query" />
    <Route name="suites_noid"        path="/suite/" handler={ProjectBreakdown}/>
    <Redirect                        from="/suite"  to="/suite/" />
    <Route name="suite_search"       path="/suite/search/:query" handler={ProjectBreakdown}/>
    {/* <Route name="suite"              path="/suite/:id" handler={AddToSuite} />
    <Route name="settings"           path="/settings" handler={Settings} />*/}
    <NotFoundRoute handler={ProjectBreakdown}/> 
  </Route>
);

Router.run(routes, function(Handler, state) {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
})