
function buildQueryUrl(url, args) {
    //TODO: parse and transform query to tastypie filters
    var queryUrl = url + "?";
    // console.log('args: '+args)
    var arg_string = args.join("&");
    // console.log('arg_string: '+arg_string)
    queryUrl += arg_string;
    //var queryUrl = url + "?order_by=modified_on"
    // console.log('queryUrl: ' + queryUrl);
    return queryUrl;
}

function aggregateBugCount(res) {

    var component_item = {};
    var component_count_Array = [];
    var component_count_Array_trimed = [];
    
    // Prepare component_count from OWNERS
    $.each(OWNERS, function(key, value) {

        component_item = {
            'component': key,
            'owner': value,
            'count': 0,
            'count_bugs': [],
            'count_nobody': 0,
            'count_nobody_bugs': [],
        };

        component_count_Array.push(component_item);
    });

    //Aggregte count by component
    if (res.bugs != undefined) {
        for (var i = 0; i < res.bugs.length; i++) {
            for (var j = 0; j < component_count_Array.length; j++) {
                if (res.bugs[i].component == component_count_Array[j].component) {
                    component_count_Array[j].count += 1;
                    component_count_Array[j].count_bugs.push(res.bugs[i].id);
                    if (res.bugs[i].assigned_to == "nobody@mozilla.org"){
                        component_count_Array[j].count_nobody += 1;
                        component_count_Array[j].count_nobody_bugs.push(res.bugs[i].id);
                    }
                    break;
                }
            }
        };
    

        //Remove no bug components
        for (var j = 0; j < component_count_Array.length; j++) {
            if ((component_count_Array[j].count != 0) || (component_count_Array[j].count_nobody != 0)) {
                component_count_Array_trimed.push(component_count_Array[j]);
            }
        }
    }
    return component_count_Array_trimed;
}
