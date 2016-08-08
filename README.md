# Color-blind-test

After the test is done, `function endTestNow()` in `js/app/ENCRAPICApp.js` will be executed. The original script will send back the test results to server and then redirect to the result summary page as shown below:

```javascript
// send data to server, skip this part
$.post("/test/", {
        summary: encodeURIComponent(result_summary),
        axis: encodeURIComponent(result.ellipse_axis),
        exta: encodeURIComponent(result.ellipse_a),
        extb: encodeURIComponent(result.ellipse_b),
        lcs: encodeURIComponent(result.extent_wb),
        ver: encodeURIComponent(result.app_version),
        data: encodeURIComponent(JSON.stringify(result))
    })
    .done(function(data) {
        // redirect to summary page
        window.location = "http://tan-xun.com/test/?summary=" + encodeURIComponent(result_summary) +
            "&axis=" + encodeURIComponent(result.ellipse_axis) +
            "&exta=" + encodeURIComponent(result.ellipse_a) +
            "&extb=" + encodeURIComponent(result.ellipse_b) +
            "&lcs=" + encodeURIComponent(result.extent_wb) +
            "&ver=" + encodeURIComponent(result.app_version) +
            "&ds=true";
        return true;
    });
```

However, we are not able to call the post method since we do not own the server. Therefore, to make the app working, I comment out the part that sends back data to server so it will go directly to summary page.
