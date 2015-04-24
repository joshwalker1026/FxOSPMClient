//TODO: replace this with jison generated parser
//
$.assocArraySize = function(obj) {
    // http://stackoverflow.com/a/6700/11236
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function buildQueryUrl(url, args) {
    //TODO: parse and transform query to tastypie filters
    var queryUrl = url + "?";
    // console.log('args: '+args)
    var arg_string = args.join("&");
    // console.log('arg_string: '+arg_string)
    queryUrl += arg_string;
    //var queryUrl = url + "?order_by=modified_on"
    console.log('queryUrl: ' + queryUrl);
    return queryUrl;
}

function aggregateBugCount(res) {
    var component_count = {};
    var component_item = {};
    var component_count_Array = [];

    // Prepare component_count from OWNERS
    
    $.each(OWNERS, function(key, value) {

        component_count[key] = {
            'owner': value,
            'count': 0,
            'count_nobody': 0
        };

        component_item = {
            'component': key,
            'owner': value,
            'count': 0,
            'count_nobody': 0
        };

        component_count_Array.push(component_item);
    });




    // // Accumulate bugs by components
    // if (res.bugs != undefined) {
    //     for (var i = 0; i < res.bugs.length; i++) {
    //         for (var entry in component_count) {
    //             if (res.bugs[i].component == entry) {
    //                 component_count[entry].count += 1;
    //                 if (res.bugs[i].assigned_to == "nobody@mozilla.org")
    //                     component_count[entry].count_nobody += 1;
    //                 break;
    //             }
    //         }
    //     };
    //     return component_count;
    // }

    if (res.bugs != undefined) {
        for (var i = 0; i < res.bugs.length; i++) {
            for (var j = 0; j < component_count_Array.length; j++) {

                if (res.bugs[i].component == component_count_Array[j].component) {
                    component_count_Array[j].count += 1;
                    if (res.bugs[i].assigned_to == "nobody@mozilla.org")
                        component_count_Array[j].count_nobody += 1;
                    break;
                }


            }
        };

    // console.log('component_count_Array: ');
    // console.log(component_count_Array);
        // return component_count_Array;
    }
    return component_count_Array;
}
