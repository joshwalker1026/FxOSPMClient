/** @jsx React.DOM */
var SideBar = React.createClass({
  render: function() {
    return (
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
              <li className="sidebar-search">
                <div className="input-group custom-search-form">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
                {/* input-group */}
                
              </li>
              <li>
                <a href="index.html"><i className="fa fa-dashboard fa-fw" /> Dashboard</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Charts<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="flot.html">Flot Charts</a>
                  </li>
                  <li>
                    <a href="morris.html">Morris.js Charts</a>
                  </li>
                </ul>
                {/* .nav-second-level  */}
              </li>
              <li>
                <a href="tables.html"><i className="fa fa-table fa-fw" /> Tables</a>
              </li>
              <li>
                <a href="forms.html"><i className="fa fa-edit fa-fw" /> Forms</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-wrench fa-fw" /> UI Elements<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="panels-wells.html">Panels and Wells</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="notifications.html">Notifications</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="icons.html"> Icons</a>
                  </li>
                  <li>
                    <a href="grid.html">Grid</a>
                  </li>
                </ul>
                {/* .nav-second-level */}
              </li>
              <li>
                <a href="#"><i className="fa fa-sitemap fa-fw" /> Multi-Level Dropdown<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="#">Second Level Item</a>
                  </li>
                  <li>
                    <a href="#">Second Level Item</a>
                  </li>
                  <li>
                    <a href="#">Third Level <span className="fa arrow" /></a>
                    <ul className="nav nav-third-level">
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                    </ul>
                    {/* .nav-third-level */}
                  </li>
                </ul>
                {/* .nav-second-level */}
              </li>
              <li>
                <a href="#"><i className="fa fa-files-o fa-fw" /> Sample Pages<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="blank.html">Blank Page</a>
                  </li>
                  <li>
                    <a href="login.html">Login Page</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    );
  }
});

React.render(
    <SideBar/>,
    document.getElementById("SideBar")
    )