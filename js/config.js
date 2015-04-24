var config = {
  bugBaseUrl: "https://bugzilla.mozilla.org/rest",
  prjBaseUrl: "http://localhost:8080/api/v1",
  bugLinkUrl: "https://bugzilla.mozilla.org/buglist.cgi?quicksearch=",

  releases: ["1.3", "1.3T", "1.4", "2.0", "2.0M", "2.1", "2.2", "3.0"], // which releases to show
  featureReleases: ["2.1", "2.2?", "2.2+", "3.0?", "3.0+"], // for feature-b2g transition. 
  flag: "cf_blocking_b2g", // name of the release flag to use
  feature_flag: "cf_feature_b2g", 
  reload: 300, // reload every this many seconds (0 means disabled)
  maxAge: 7, // maximum age in days (deep red when showing activity)
  filtercomponents: null, // don't filter any specific components
  filterowners: null, // don't filter any specific owners
  
  defaultProduct: "Firefox OS",
  defaultRelease: "2.2",
  //username: "admin-django",
  //api_key: "c67c9af7-7e07-4820-b686-5f92ae94f6c9",
  username: "",
  api_key: "",

}

function refreshConfig() {
  localforage.getItem('username').then(function(val){
    config['username'] = val;
  });
  localforage.getItem('api_key').then(function(val){
    config['api_key'] = val;
  });
}

refreshConfig();