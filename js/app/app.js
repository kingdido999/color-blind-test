var result_email = "";
var result_from = "";
var result_comment = "";
var Pa = "";
var e2 = "";
var startApp = function() {};
var t2 = "main";
var survey = {};
var hc = "http://tan-xun.com/test";

function log() {
    if (arguments.length > 0) {
        var args = (arguments.length > 1) ? Array.prototype.join.call(arguments, " ") : arguments[0];
        try {
            console.log(args);
            return true;
        } catch (e) {
            try {
                opera.postError(args);
                return true;
            } catch (e) {}
        }
        alert(args);
        return false;
    }
}

function getOptionParameter(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    if (match) {
        return decodeURIComponent(match[1].replace(/\+/g, " "));
    } else if (localStorage !== null && localStorage.getItem("option_" + key) != "undefined" && typeof(localStorage.getItem("option_" + key)) != "undefined" && localStorage.getItem("option_" + key) !== null && localStorage.getItem("option_" + key) != "") {
        return localStorage.getItem("option_" + key);
    } else if (typeof(options[key]) != "undefined") {
        return options[key];
    } else {
        return;
    }
}

function setOptionParameter(key, value) {
    localStorage.setItem("option_" + key, value);
    options.key = value;
}

function loadResultEmail() {
    result_email = "";
    result_from = "";
    var key = "to";
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    if (match) {
        result_email = decodeURIComponent(match[1].replace(/\+/g, " "));
    } else if (localStorage !== null && localStorage.getItem("result_email") != "undefined" && typeof(localStorage.getItem("result_email")) != "undefined" && localStorage.getItem("result_from") !== null && localStorage.getItem("result_email") != "") {
        result_email = localStorage.getItem("result_email");
    }
    var key = "from";
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    if (match) {
        result_from = decodeURIComponent(match[1].replace(/\+/g, " "));
    } else if (localStorage !== null && localStorage.getItem("result_from") != "undefined" && typeof(localStorage.getItem("result_from")) != "undefined" && localStorage.getItem("result_from") !== null && localStorage.getItem("result_from") != "") {
        result_from = localStorage.getItem("result_from");
    }
}

function updateAppSize() {
    var controls_right_id;
    var controls_bottom_id;
    var Yc;
    var b4;
    var Bc = window.innerWidth;
    var j3 = window.innerHeight;
    $("#body").css("width", Bc);
    $("#body").css("height", j3);
    $("#test").css("width", Bc);
    $("#test").css("height", j3);
    $("#main").css("width", Bc);
    $("#main").css("height", j3);
    $("#instructions-1").css("width", Bc);
    $("#instructions-1").css("height", j3);
    $("#instructions-2").css("width", Bc);
    $("#instructions-2").css("height", j3);
    $("#sorry").css("width", Bc);
    $("#sorry").css("height", j3);
    $("#cvd").css("width", Bc);
    $("#cvd").css("height", j3);
    $("#result").css("width", Bc);
    $("#result").css("height", j3);
    $("#about").css("width", Bc);
    $("#about").css("height", j3);
    if (resizeCanvas == null || t2 != "test") {
        return;
    }
    var f2 = (task == "oddity" ? 500 : 700) * Math.min(1.0, window.devicePixelRatio);
    var marginSize = 34 * Math.min(1.0, window.devicePixelRatio);
    var buttonSize = 300 * Math.min(1.0, window.devicePixelRatio);
    if ((task != "oddity" && Bc > 1.25 * j3) || (task == "oddity" && Bc > 1.75 * j3)) {
        $("#controls-bottom").css("display", "none");
        $("#controls-bottom-mini").css("display", "none");
        if (j3 - ($("#status-bar").height()) <= 560) {
            controls_right_id = "#controls-right-mini";
            $("#controls-right").css("display", "none");
        } else {
            controls_right_id = "#controls-right";
            $("#controls-right-mini").css("display", "none");
        }
        $(controls_right_id).css("width", Math.min(Math.round(.25 * Bc), buttonSize) + "px");
        $(controls_right_id).css("display", "block");
        var ua = Math.round(Math.min((j3 - ($("#test-header").height())) - ($("#status-bar").height()) - ($("#test-footer").height()) - 1 * marginSize, (Bc - ($(controls_right_id).width())) - 2 * marginSize));
        if (ua > f2) {
            ua = f2;
        }
        if (ua < f2 / 4) {
            ua = f2 / 4;
        }
        $("#app-content").css("margin-top", Math.round((j3 - ($("#test-header").height()) - ($("#test-footer").height()) - ($("#status-bar").height()) - ua - 1 * marginSize) / 2) + "px");
        $("#app-content").css("margin-bottom", $("#app-content").css("margin-top"));
        $(controls_right_id).css("margin-top", ((j3 - ($("#test-header").height()) - ($("#test-footer").height()) - ($("#status-bar").height()) - $(controls_right_id).height() - 1 * marginSize) / 2) + "px");
        $("#app-content").css("padding-left", Math.max(0, ((Bc - ua - ($(controls_right_id).width())) / 2 - marginSize)) + "px");
        $("#app-content").css("width", ua + ((Bc - ua - ($(controls_right_id).width())) / 2 - marginSize) + 1 * marginSize);
        $("#status-content-inner").css("width", $("#app-content").width() + $(controls_right_id).width() - 1 * marginSize);
        $("#progress-content-inner").css("width", $("#app-content").width() + $(controls_right_id).width() - 1 * marginSize);
        resizeCanvas(ua);
        $("#timeout-notice").css("width", $("#main-canvas").width());
        $("#timeout-notice").css("width", $("#main-canvas").width());
        $("#timeout-notice").css("height", $("#main-canvas").height());
        $("#timeout-notice").css("height", $("#main-canvas").height());
        $("#timeout-notice").css("top", $("#main-canvas").position().top);
        $("#timeout-notice").css("left", $("#main-canvas").position().left);
    } else {
        $("#controls-right").css("display", "none");
        $("#controls-right-mini").css("display", "none");
        $("#controls-right").css("width", "0px");
        $("#controls-right-width").css("width", "0px");
        if (j3 <= 640 || Bc <= 640) {
            controls_bottom_id = "#controls-bottom-mini";
            $("#controls-bottom").css("display", "none");
        } else {
            controls_bottom_id = "#controls-bottom";
            $("#controls-bottom-mini").css("display", "none");
        }
        ua = Math.round(Math.min((j3 - ($(controls_bottom_id).height() + $("#test-header").height() + $("#test-footer").height() + ($("#status-bar").height()))) - 3 * marginSize, (Bc) - 2 * marginSize));
        if (ua > f2) {
            ua = f2;
        }
        if (ua < f2 / 4) {
            ua = f2 / 4;
        }
        $("#app-content").css("margin-top", Math.max(0, Math.round((j3 - ($("#test-header").height()) - ($("#test-footer").height()) - ($("#status-bar").height()) - ($(controls_bottom_id).height()) - ua - 2 * marginSize))) / 2 + "px");
        $(controls_bottom_id).css("margin-top", Math.min(j3 - ($("#test-header").height()) - ($("#test-footer").height()) - ($("#status-bar").height()) - ($(controls_bottom_id).height()) - ua - 1 * marginSize, 1 * marginSize) + "px");
        $(controls_bottom_id).css("margin-bottom", $("#app-content").css("margin-top"));
        $("#app-content").css("padding-left", "0px");
        $("#app-content").css("width", "100%");
        $(controls_bottom_id).css("display", "block");
        $(controls_bottom_id).css("width", "100%");
        $("#app-content").css("width", "100%");
        $("#status-content-inner").css("width", $(controls_bottom_id).width() - 1 * marginSize);
        $("#status-content-inner").css("width", $(controls_bottom_id).width() - 1 * marginSize);
        resizeCanvas(ua);
        $("#timeout-notice").css("width", $("#main-canvas").width());
        $("#timeout-notice").css("width", $("#main-canvas").width());
        $("#timeout-notice").css("height", $("#main-canvas").height());
        $("#timeout-notice").css("height", $("#main-canvas").height());
        $("#timeout-notice").css("top", $("#main-canvas").position().top);
        $("#timeout-notice").css("left", $("#main-canvas").position().left);
    }
}

function toggleStatus() {
    if ($("#status-content").css("display") == 'none') {
        $("#status-content").css("display", "block");
        $('#status-toggle').buttonMarkup({
            icon: "arrow-d"
        });
    } else {
        $("#status-content").css("display", "none");
        $('#status-toggle').buttonMarkup({
            icon: "arrow-u"
        });
    }
    updateAppSize();
}
$(document).bind("orientationchange", function(c4, data) {
    updateAppSize();
});
$(window).resize(function() {
    updateAppSize();
});
$(document).bind("pagebeforechange", function(c4, data) {
    if ((t2 == "result" || t2 == "test") && data.toPage[0].id == "test") {
        c4.preventDefault();
        data.deferred.reject(data.absUrl, data.options);
        $.mobile.changePage($("#main"), {});
    }
});

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
$(document).bind("pagechange", function(c4, data) {
    t2 = data.toPage[0].id;
    loadResultEmail();
    if (localStorage !== null) {
        if (localStorage.getItem("result_summary")) {
            result_summary = localStorage.getItem("result_summary");
            if (localStorage.getItem("result_data")) {
                result_data = JSON.parse(localStorage.getItem("result_data"));
            }
            U2 = localStorage.getItem("U2");
            Pa = localStorage.getItem("Pa");
            e2 = localStorage.getItem("e2");
            if (Pa != app_version) {
                result_summary = "";
                result_data = "";
                U2 = "";
            }
        } else {
            result_summary = "";
            result_data = "";
            U2 = "";
            e2 = "";
        }
    }
    if (getOptionParameter("format") == "symbol") {
        nafc = 3;
        task = "symbol";
        if (document.getElementById('option_format_choice_symbol')) {
            document.getElementById('option_format_choice_symbol').checked = true;
        }
    }
    if (getOptionParameter("format") == "number") {
        nafc = 9;
        task = "number";
        if (document.getElementById('option_format_choice_number')) {
            document.getElementById('option_format_choice_number').checked = true;
        }
    }
    if (getOptionParameter("format") == "oddity") {
        nafc = 16;
        task = "oddity";
        if (document.getElementById('option_format_choice_oddity')) {
            document.getElementById('option_format_choice_oddity').checked = true;
        }
    }
    if (getOptionParameter("g3") == "quick") {
        g3 = "quick";
        if (document.getElementById('option_test_mode_choice-quick')) {
            document.getElementById('option_test_mode_choice-quick').checked = true;
        }
    }
    if (getOptionParameter("g3") == "full") {
        g3 = "full";
        if (document.getElementById('option_test_mode_choice-full')) {
            document.getElementById('option_test_mode_choice-full').checked = true;
        }
    }
    if (getOptionParameter("confidence_goal") == "80") {
        confidence_goal = 0.80;
        if (document.getElementById('option_confidence_goal_choice-80')) {
            document.getElementById('option_confidence_goal_choice-80').checked = true;
        }
    }
    if (getOptionParameter("confidence_goal") == "90") {
        confidence_goal = 0.90;
        if (document.getElementById('option_confidence_goal_choice-90')) {
            document.getElementById('option_confidence_goal_choice-90').checked = true;
        }
    }
    if (getOptionParameter("confidence_goal") == "95") {
        confidence_goal = 0.95;
        if (document.getElementById('option_confidence_goal_choice-95')) {
            document.getElementById('option_confidence_goal_choice-95').checked = true;
        }
    }
    if (getOptionParameter("confidence_goal") == "97.5") {
        confidence_goal = 0.975;
        if (document.getElementById('option_confidence_goal_choice-97')) {
            document.getElementById('option_confidence_goal_choice-97').checked = true;
        }
    }
    if (getOptionParameter("confidence_goal") == "99") {
        confidence_goal = 0.99;
        if (document.getElementById('option_confidence_goal_choice-99')) {
            document.getElementById('option_confidence_goal_choice-99').checked = true;
        }
    }
    if (getOptionParameter("response_max_dt") == "0") {
        response_max_dt = 0;
        if (document.getElementById('option_response_max_dt_choice-0')) {
            document.getElementById('option_response_max_dt_choice-0').checked = true;
        }
    }
    if (getOptionParameter("response_max_dt") == "2") {
        response_max_dt = 2;
        if (document.getElementById('option_response_max_dt_choice-2')) {
            document.getElementById('option_response_max_dt_choice-2').checked = true;
        }
    }
    if (getOptionParameter("response_max_dt") == "5") {
        response_max_dt = 5;
        if (document.getElementById('option_response_max_dt_choice-5')) {
            document.getElementById('option_response_max_dt_choice-5').checked = true;
        }
    }
    if (getOptionParameter("w2") == "on") {
        w2 = true;
        if (document.getElementById('option_show_status_choice-on')) {
            document.getElementById('option_show_status_choice-on').selected = true;
        }
    }
    if (getOptionParameter("w2") == "off") {
        w2 = false;
        if (document.getElementById('option_show_status_choice-off')) {
            document.getElementById('option_show_status_choice-off').selected = true;
        }
    }
    if (getOptionParameter("dot_animate") == "on") {
        dot_animate = true;
        if (document.getElementById('option_dot_animate_choice-on')) {
            document.getElementById('option_dot_animate_choice-on').selected = true;
        }
    }
    if (getOptionParameter("dot_animate") == "off") {
        dot_animate = false;
        if (document.getElementById('option_dot_animate_choice-off')) {
            document.getElementById('option_dot_animate_choice-off').selected = true;
        }
    }
    if (data.toPage[0].id == "instructions-1") {
        d3 = true;
        Hb = 0;
        if (task == "oddity") {
            $('#instructions-symbol').css("display", "none");
            $('#instructions-oddity').css("display", "block");
            $('#instructions-number').css("display", "none");
        } else if (task == "symbol") {
            $('#instructions-symbol').css("display", "block");
            $('#instructions-oddity').css("display", "none");
            $('#instructions-number').css("display", "none");
        } else if (task == "number") {
            $('#instructions-symbol').css("display", "none");
            $('#instructions-oddity').css("display", "none");
            $('#instructions-number').css("display", "block");
        }
    }
    if (data.toPage[0].id == "main") {}
    if (data.toPage[0].id == "test") {
        if (!isCanvasSupported()) {
            $.mobile.changePage($("#error"), {
                role: "dialog"
            });
        }
        if (d3) {
            setDemoMode(true);
            Hb = 0;
        }
        updateAppSize();
        ENCRAPICAppInitialize();
    }
    if (data.toPage[0].id == "result") {
        updateResultText();
    }
    if (data.toPage[0].id == "instructions-0") {
        if (task == "oddity") {
            $('#instructions-symbol').css("display", "none");
            $('#instructions-oddity').css("display", "block");
            $('#instructions-number').css("display", "none");
        } else if (task == "symbol") {
            $('#instructions-symbol').css("display", "block");
            $('#instructions-oddity').css("display", "none");
            $('#instructions-number').css("display", "none");
        } else if (task == "number") {
            $('#instructions-symbol').css("display", "none");
            $('#instructions-oddity').css("display", "none");
            $('#instructions-number').css("display", "block");
        }
    }
});

function saveTestOptions(btn) {
    setOptionParameter("format", $("input:radio[name=option_format]:checked").val());
    setOptionParameter("g3", $("input:radio[name=option_test_mode]:checked").val());
    setOptionParameter("confidence_goal", $("input:radio[name=option_confidence_goal]:checked").val());
    setOptionParameter("response_max_dt", $("input:radio[name=option_response_max_dt]:checked").val());
    setOptionParameter("w2", $("#option_show_status").val());
    setOptionParameter("dot_animate", $("#option_dot_animate").val());
    $.mobile.changePage($("#main"), {
        transition: "fade"
    });
}
var responseButtonTimeout;

function responseButtonClear() {
    responseButtonTimeout = null;
}

function responseButton(response) {
    var z3;
    z3 = 0;
    if (responseButtonTimeout) {
        clearTimeout(responseButtonTimeout);
        responseButtonTimeout = null;
        z3 = 0;
    } else {
        z3 = 1;
    }
    responseButtonTimeout = setTimeout(responseButtonClear, 500);
    if (z3 == 0) {
        return;
    }
    if (d3) {
        Hb++;
    }
    if (response == 1) {
        respondSquare();
    }
    if (response == 2) {
        respondCircle();
    }
    if (response == 3) {
        respondDiamond();
    }
    if (response == 4 || response == 0) {
        respondNothing();
    }
}

function responseNumber(response) {
    var z3;
    z3 = 0;
    if (responseButtonTimeout) {
        clearTimeout(responseButtonTimeout);
        responseButtonTimeout = null;
        z3 = 0;
    } else {
        z3 = 1;
    }
    responseButtonTimeout = setTimeout(responseButtonClear, 500);
    if (z3 == 0) {
        return;
    }
    if (d3) {
        Hb++;
    }
    inputResponseNumber(response);
}

function updateResultText() {
    var V1 = document.getElementById("result-text");
    document.getElementById("result-form-submit-button").form.action = hc + "-" + app_version + "/result-submit.php";
    var T3;
    while (V1.hasChildNodes()) {
        V1.removeChild(V1.firstChild);
    }
    var U1 = document.getElementById("result-form");
    if (U2 == "") {
        U2 = "There is no test result data yet. Please take the test.";
    } else {
        $("#result-form").css("display", "block");
    }
    V1.innerHTML = U2;
    log(V1);
    log(U2);
    document.getElementById("email-result-summary").value = result_summary;
    document.getElementById("email-result-text").value = U2;
    result_data.result_from = result_from;
    result_data.result_to = result_email;
    result_data.result_comment = result_comment;
    document.getElementById("email-result-data").value = JSON.stringify(result_data);
    if ($("#email-to").attr('type') != 'hidden') {
        document.getElementById("email-to").value = result_email;
    }
    document.getElementById("email-from").value = result_from;
}

function saveResultEmail() {
    result_email = document.getElementById("email-to").value;
    result_from = document.getElementById("email-from").value;
    result_comment = document.getElementById("email-comment").value;
    if (localStorage !== null && document.getElementById("email-to").value) {
        localStorage.setItem("result_email", document.getElementById("email-to").value);
    }
    if (localStorage !== null && document.getElementById("email-from").value) {
        localStorage.setItem("result_from", document.getElementById("email-from").value);
    }
    if (localStorage !== null && document.getElementById("email-from").value) {
        localStorage.setItem("result_comment", document.getElementById("email-comment").value);
    }
}
$(document).bind("pageloadfailed", function(c4, data) {
    c4.preventDefault();
    data.deferred.reject(data.absUrl, data.options);
    $.mobile.changePage($("#sorry"), {
        role: "dialog"
    });
});

function reloadTest() {
    t2 = "";
    clearCanvas();
    clearTimeout(k2)
    sa = false;
    $.mobile.changePage($("#test"), {
        allowSamePageTransition: true,
        reloadPage: true,
        transition: "slidefade"
    });
}

function retakeTest() {
    t2 = "";
    clearCanvas();
    clearTimeout(k2)
    sa = false;
    $.mobile.changePage($("#instructions-0"), {
        role: "dialog",
        transition: "fade"
    });
}

function stopTest() {
    if (mobile_system == "online") {
        window.location ="http://www.tan-xun.com";
        return;
    }
    clearTimeout(k2)
    sa = false;
    clearCanvas();
    $.mobile.changePage($("#main"), {
        transition: "fade"
    });
}

function stopTestInconclusive() {
    if (mobile_system == "online") {
        window.location = hc + "/result/inconclusive/?completed=false";
        return;
    }
    clearTimeout(k2)
    sa = false;
    clearCanvas();
    $.mobile.changePage($("#main"), {
        transition: "fade"
    });
}

function surveyRespond(id, nextpage, formobject) {
    log("input:radio[name=" + id + "]:checked");
    var v = $("input:radio[name=" + id + "]:checked");
    if (v != null) {
        log(v.val());
        survey[id] = v.val();
    } else {
        survey[id] = null;
    }
    log(survey);
    $.mobile.changePage($("#" + nextpage), {
        role: "dialog",
        transition: "slide"
    });
}
