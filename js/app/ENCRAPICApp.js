var respondCircle;
var respondSquare;
var respondDiamond;
var respondNothing;
var clearTimeoutAlert;
var restartTest;
var restartTestDone;
var endTest;
var resultContinue;
var resultDone;
var resizeCanvas;
var setDemoMode;
var isAppRunning;
var getResultObject;
var getResultText;
var x1;
var getResultData;
var pa;
var s2;
var D2 = 100;
var U = 1;
var f3 = 0;
var e3 = false;
var dot_animate = false;
var R4 = new Array();
var Cb = document.getElementById("main-canvas");
var E3 = -1;
var b2 = false;
var Fa = 0;
var E1 = 0;
var q = 0;
var g2 = 0;
var sa = false;
var c1 = 0;
var response_dt = new Array();
var response_max_dt = 2;
var response_timeout;
var la = 0;
var G1 = 500;
var Q1 = 60;
var fa = 1000 / Q1;
var F = -1;
var app_running = false;
var o3 = false;
var nc = 0;
var Kc = 0;
var jc = 1.;
var Jc = 0;
var f4 = 0;
var O4 = 3;
var H4 = 0;
var s3 = false;
var cfg = [0, 0];
var cbg = [0, 0];
var F3 = 0;
var G3 = 0;
var Y3 = 0;
var Ob = 0;
var dot_color_h_rand = 0;
var Pb = 0;
var qb = 0;
var Jb = 0;
var D3 = 1.1;
var showstatus = false;
var progress_cur_val = 0;
var Xa;
var F2 = false;
var d3 = false;
var qa = new Array();
var Hb = 0;
var k2 = null;
var rb = new Date().getTime();
var S3 = 0;
var Ja = 60;
var app_give_thanks = true;
var kiosk_mode = (typeof(kiosk_pro) != "undefined");
var result;
var result_summary = "";
var U2 = "";
var result_data = null;
var N2 = false;
var Db = null;
var u3 = 0;
var v3 = 0;
var L3 = 0;
var V3 = 0;
var t3 = 0;
var canvas_context = null;
var Cb = null;
var E;
var use_canvas = true;
var use_svg = false;
var g3 = "full";
var za = false;
var confidence_goal = 0.90;
var B4 = 150;
var r1 = true;
var w2 = false;
var nafc = 9;
var task = "number";
var fb;
var g1 = 0;
var nb;
var T1 = 3.5;
var Ya = 15;
var db = 60;
var ga = 110;
var wa = 140;
var Nb;
var M2 = r3(R3(Q3(p3({
    L: 35,
    C: 0.,
    H: 0.
}))));
var lum_range = 20;

function ENCRAPICAppInitialize() {
    f3 = 0;
    R4 = new Array();
    Cb = document.getElementById("main-canvas");
    E3 = -1;
    Fa = 0;
    g2 = 0;
    sa = false;
    response_dt = new Array();
    app_running = false;
    o3 = false;
    nc = 0;
    Kc = 0;
    jc = 1.;
    f4 = 0;
    O4 = 3;
    H4 = 0;
    s3 = false;
    F3 = 0;
    G3 = 0;
    Y3 = 0;
    Ob = 0;
    Pb = 0;
    qb = 0;
    Jb = 0;
    Xa = null;
    F2 = false;
    d3 = false;
    lum_range = 20;
    clearTimeout(k2);
    k2 = null;
    rb = new Date().getTime();
    S3 = 0;
    result = null;
    result_summary = "";
    U2 = "";
    result_data = null;
    Nb = new Array();
    N2 = false;
    if (use_canvas) {
        Cb = document.getElementById("main-canvas");
        canvas_context = Cb.getContext("2d");
        u3 = Cb.width;
        v3 = Cb.height * 1.0;
        var ra = getElementPosition(Cb);
        L3 = ra.x;
        V3 = ra.y;
        t3 = Math.min(v3, u3);
    }
    E3 = -1;
    Fa = 0;
    g2 = 0;
    sa = false;
    app_running = true;
    o3 = false;
    progress_cur_val = 0;
    nc = 0;
    Kc = 0;
    jc = 1.;
    f4 = 0;
    O4 = 3;
    H4 = 0;
    s3 = false;
    F3 = 0;
    G3 = 0;
    Y3 = 0;
    Ob = 0;
    Pb = 0;
    qb = 0;
    Jb = 0;
    if (task == "oddity" && dot_animate) {
        Q1 = 15;
        U = nafc;
    } else if (task == "oddity") {
        Q1 = 30;
        U = 1;
    }
    result = undefined;
    fb = [new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, 15, 30), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, 10, 30), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, 5, 30), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, 0, 24), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, -5, 20), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, -10, 16), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, -15, 12), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, -20, 12), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, -25, 12), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, -85, 24), new o2(nafc, B4, confidence_goal, task == "oddity" ? 10 : 20, 0 / 0, 24)];
    fb[2].running = true;
    fb[3].running = true;
    fb[5].running = true;
    fb[9].running = true;
    fb[10].running = true;
    g1 = 4;
    nb = new I(nafc);
    showstatus = false;
    if (task == "symbol") {
        $("#controls-bottom-task-symbol").css("display", "block");
        $("#controls-bottom-mini-task-symbol").css("display", "block");
        $("#controls-right-task-symbol").css("display", "block");
        $("#controls-right-mini-task-symbol").css("display", "block");
        $("#controls-bottom-task-oddity").css("display", "none");
        $("#controls-bottom-mini-task-oddity").css("display", "none");
        $("#controls-right-task-oddity").css("display", "none");
        $("#controls-right-mini-task-oddity").css("display", "none");
        $("#controls-bottom-task-number").css("display", "none");
        $("#controls-bottom-mini-task-number").css("display", "none");
        $("#controls-right-task-number").css("display", "none");
        $("#controls-right-mini-task-number").css("display", "none");
    } else if (task == "oddity") {
        $("#controls-bottom-task-symbol").css("display", "none");
        $("#controls-bottom-mini-task-symbol").css("display", "none");
        $("#controls-right-task-symbol").css("display", "none");
        $("#controls-right-mini-task-symbol").css("display", "none");
        $("#controls-bottom-task-oddity").css("display", "block");
        $("#controls-bottom-mini-task-oddity").css("display", "block");
        $("#controls-right-task-oddity").css("display", "block");
        $("#controls-right-mini-task-oddity").css("display", "block");
        $("#controls-bottom-task-number").css("display", "none");
        $("#controls-bottom-mini-task-number").css("display", "none");
        $("#controls-right-task-number").css("display", "none");
        $("#controls-right-mini-task-number").css("display", "none");
    } else if (task == "number") {
        $("#controls-bottom-task-symbol").css("display", "none");
        $("#controls-bottom-mini-task-symbol").css("display", "none");
        $("#controls-right-task-symbol").css("display", "none");
        $("#controls-right-mini-task-symbol").css("display", "none");
        $("#controls-bottom-task-oddity").css("display", "none");
        $("#controls-bottom-mini-task-oddity").css("display", "none");
        $("#controls-right-task-oddity").css("display", "none");
        $("#controls-right-mini-task-oddity").css("display", "none");
        $("#controls-bottom-task-number").css("display", "block");
        $("#controls-bottom-mini-task-number").css("display", "block");
        $("#controls-right-task-number").css("display", "block");
        $("#controls-right-mini-task-number").css("display", "block");
    }
    if (w2) {
        $("#status-content").css("height", 100 * Math.min(1.0, window.devicePixelRatio));
        $("#status-content-inner").css("display", "block");
        $("#progress-content-inner").css("display", "none");
    } else {
        $("#status-content").css("height", 60 * Math.min(1.0, window.devicePixelRatio));
        $("#status-content-inner").css("display", "none");
        $("#progress-content-inner").css("display", "block");
    }
    updateAppSize();
    document.getElementById("status-var-resultest").innerHTML = "Unknown";
    updateStatusBar(0, "status-var-confidence-ext", "status-var-confidence-rem", "%", 100);
    updateStatusBar(0, "status-var-axis-RG-ext", "status-var-axis-RG-rem", "", 200);
    updateStatusBar(0, "status-var-axis-BY-ext", "status-var-axis-BY-rem", "", 200);
    updateProgressBar(0, "status-var-progress-ext", "status-var-progress-rem", "%", 100);
    F2 = false;
    rb = new Date().getTime();
    S3 = 0;
    Ja = 60;
    app_give_thanks = true;
    kiosk_mode = (typeof(kiosk_pro) != "undefined");
    result;
    result_summary = "";
    U2 = "";
    if (use_svg) {
        Db.clear();
        R4 = new Array();
        f3 = 0;
    }
    if (task == "oddity") {
        D2 = U;
    } else {
        D2 = 100;
    }
    N2 = false;
    clearCanvas();
    update();
}

function clearCanvas() {
    if (use_canvas && canvas_context !== null) {
        canvas_context.globalCompositeOperation = "source-over";
        canvas_context.clearRect(0, 0, u3, v3);
        canvas_context.restore();
        Cb.width = Cb.width;
        canvas_context.save();
    } else if (use_svg) {
        Db.clear();
    }
}

function resize(Ec) {
    if (task == "oddity") {
        E = Ec / (100 * window.devicePixelRatio);
        D3 = Math.min(1.1, 1.1 * (0.62 / (E / 4)));
    } else {
        D3 = 1.1;
    }
    if (use_canvas) {
        u3 = Ec;
        v3 = Ec;
        var m = document.getElementById("main-canvas-container");
        m.innerHTML = "";
        m.innerHTML = "<center><div id=\"main-canvas-standin\" style=\"margin-left: auto;margin-right: auto;text-align: center;width:" + u3 + "px;height:" + v3 + "px;\" /></div></center>";
        var fakeCanvasPosition = getElementPosition(document.getElementById("main-canvas-standin"));
        m.innerHTML += "<canvas width=\"" + u3 + "\" height=\"" + v3 + "\" id=\"main-canvas\" style=\"position:absolute;left: " + fakeCanvasPosition.x + "px;top: " + fakeCanvasPosition.y + "px;\" />";
        Cb = document.getElementById("main-canvas");
        canvas_context = Cb.getContext("2d");
        ra = getElementPosition(Cb);
        L3 = ra.x;
        V3 = ra.y;
        t3 = Math.min(v3, u3);
        if (E3 != -1 && f3 || (E3 == 4 && task == "oddity")) {
            for (var j = 0; j < Xa.length; j++) {
                canvas_context.globalCompositeOperation = "source-over";
                canvas_context.lineWidth = 0;
                canvas_context.strokeStyle = (E3 == 4 && task == "oddity") ? M2 : R4[j][3];
                canvas_context.fillStyle = (E3 == 4 && task == "oddity") ? M2 : R4[j][3];
                E4 = Math.round(R4[j][0] * (u3));
                d4 = Math.round(R4[j][1] * (u3));
                if (Pb) {
                    E4 = u3 - E4;
                }
                if (qb) {
                    d4 = u3 - d4;
                }
                canvas_context.beginPath();
                canvas_context.arc(E4, d4, Math.round(R4[j][2] * (u3) * D3), 0, Math.PI * 2, true);
                canvas_context.closePath();
                canvas_context.stroke();
                canvas_context.fill();
            }
        } else {}
    }
    if (use_svg) {
        if (Db === null) {
            u3 = 1000;
            v3 = 1000;
            Db = new ScaleRaphael("main-canvas", 1000, 1000);
            if (Db == null) {
                alert("Error with canvas");
            }
        }
        Db.changeSize(Ec, Ec, false, false);
    }
}

function draw() {
    if (!app_running) {
        return;
    }
    if (E3 == -2) {
        E3 = -1;
    }
    if (E3 == -1) {
        return;
    }
    if (use_canvas) {
        canvas_context.save();
    }
    if (E3 == 0) {
        $("#timeout-notice").css("display", "none");
        if (use_canvas) {
            canvas_context.globalCompositeOperation = "source-over";
            canvas_context.clearRect(0, 0, u3, v3);
            canvas_context.restore();
            Cb.width = Cb.width;
            canvas_context.save();
        } else if (use_svg) {
            Db.clear();
        }
        if (task == "symbol") {
            Xa = C1;
        } else if (task == "number") {
            Xa = I1;
        } else {
            Xa = k;
        }
        Ob = new Array();
        F3 = q1(Xa.length);
        G3 = 0;
        Y3 = 0;
        e3 = false;
        dot_color_h_rand = 360 * (Math.random() - 0.5);
        pa = new Date().getTime();
        if (task == "symbol") {
            var q0 = Math.round(Math.random());
            if (q0)
                Pb = !Pb;
            else
                qb = !qb;
        }
        if (Math.round(Math.random())) {
            Jb = 1;
        } else {
            Jb = 0;
        }
        H4 = Math.round(Math.random());
        E3 = 1;
    }
    if (G3 >= Xa.length && E3 == 3) {
        E3 = 0;
    }
    if (E3 == 2) {}
    if (E3 == 1) {
        if (task == "oddity") {
            D2 = U;
        }
        Y3 += D2;
    }
    if (E3 == 3 || E3 == 4 || E3 == 5) {
        G3 += Math.min(Xa.length, D2);
        var i = 0;
        var j = 0;
        for (i = 0; i < D2 && f3 > 0; i++) {
            if (use_svg) {
                var c = R4[f3 - 1];
                c.remove();
            } else if (use_canvas) {
                j = f3 - 1;
                circle = Xa[F3[j]];
                if ((!za) || (E3 == 3 && ((task == "symbol" && ((!(circle[3] & Math.pow(2, O4))))) || (task == "number" && ((!(circle[3] & Math.pow(2, O4))))) || (task == "oddity" && (circle[3] != O4)))) || (E3 == 5 && (circle[3] & Math.pow(2, O4)))) {
                    if (task == "oddity" && sa) {
                        canvas_context.globalCompositeOperation = "source-over";
                        canvas_context.lineWidth = 0;
                        canvas_context.strokeStyle = M2;
                        canvas_context.fillStyle = M2;
                        canvas_context.beginPath();
                        E4 = Math.round(R4[f3 - 1][0] * (u3));
                        d4 = Math.round(R4[f3 - 1][1] * (u3));
                        if (Pb) {
                            E4 = u3 - E4;
                        }
                        if (qb) {
                            d4 = u3 - d4;
                        }
                        canvas_context.arc(E4, d4, Math.round(R4[f3 - 1][2] * (u3) * D3) + 1, 0, Math.PI * 2, true);
                        canvas_context.closePath();
                        canvas_context.stroke();
                        canvas_context.fill();
                    } else {
                        canvas_context.globalCompositeOperation = "destination-out";
                        canvas_context.lineWidth = 0;
                        canvas_context.strokeStyle = "rgb(0,0,0)";
                        canvas_context.fillStyle = "rgb(0,0,0)";
                        canvas_context.beginPath();
                        E4 = Math.round(R4[f3 - 1][0] * (u3));
                        d4 = Math.round(R4[f3 - 1][1] * (u3));
                        if (Pb) {
                            E4 = u3 - E4;
                        }
                        if (qb) {
                            d4 = u3 - d4;
                        }
                        canvas_context.arc(E4, d4, Math.round(R4[f3 - 1][2] * (u3) * D3) + 2, 0, Math.PI * 2, true);
                        canvas_context.closePath();
                        canvas_context.stroke();
                        canvas_context.fill();
                        e3 = true;
                    }
                }
                f3--;
            }
        }
        if (f3 <= 0) {
            if (E3 == 3) {
                E3 = 4;
                if (sa && task != "oddity") {
                    $("#timeout-notice").css("display", "block");
                }
            } else {
                if (!sa) {
                    E3 = -1;
                }
                if (N2) {
                    app_running = false;
                }
            }
        }
        if (use_canvas) {
            canvas_context.restore();
        }
        return;
    }
    var sc;
    var color;
    var E4;
    var d4;
    if (H4) {
        jc = jc * -1.0;
    }
    var color;
    var s4 = 0;
    var ext2 = 0;
    var qc = 0;
    var ext = Math.abs(jc);
    if (f4 == -1) {
        document.getElementById("status-var-taxis").innerHTML = "135&deg;";
        document.getElementById("status-var-tdelta").innerHTML = sprintf("%0.01f", cfg[0] + cbg[0]);
    } else {
        document.getElementById("status-var-taxis").innerHTML = sprintf("%d&deg;", fb[f4].axis_angle);
        document.getElementById("status-var-tdelta").innerHTML = sprintf("%0.01f", cfg[0] + cbg[0]);
    }
    for (var j = f3; j < Y3 && j < Xa.length; j++) {
        circle = Xa[F3[j]];
        if (j < Ob.length && task != "oddity") {
            color = Ob[j];
        } else {
            sc = 50 + (lum_range * (Math.random() - 0.5));
            if (d3) {
                s3 = true;
            } else {
                s3 = false;
            }
            if ((task == "symbol" && (circle[3] & Math.pow(2, O4))) || (task == "number" && (circle[3] & Math.pow(2, O4))) || (task == "oddity" && (circle[3] == O4))) {
                if (task == "oddity") {
                    sc = 50 + (18. * (Math.random() - 0.5));
                }
                if (isNaN(cfg[1])) {
                    if (task == "oddity") {
                        color = r3(R3(Q3(p3({
                            L: cfg[0],
                            C: 0,
                            H: 0
                        }))));
                    } else {
                        color = r3(R3(Q3(p3({
                            L: cfg[0],
                            C: Ya,
                            H: (Math.random() - 0.5) * 360
                        }))));
                    }
                } else {
                    color = r3(R3(Q3(p3({
                        L: sc,
                        C: cfg[0],
                        H: cfg[1]
                    }))));
                }
            } else {
                if (isNaN(cbg[1])) {
                    if (task == "oddity") {
                        color = r3(R3(Q3(p3({
                            L: cbg[0],
                            C: 0,
                            H: 0
                        }))));
                    } else {
                        color = r3(R3(Q3(p3({
                            L: cbg[0],
                            C: Ya,
                            H: (Math.random() - 0.5) * 360
                        }))));
                    }
                } else {
                    color = r3(R3(Q3(p3({
                        L: sc,
                        C: cbg[0],
                        H: cbg[1]
                    }))));
                }
            }
            Ob[j] = color;
        }
        E4 = Math.round(circle[0] * (u3));
        d4 = Math.round(circle[1] * (u3));
        if (Pb) {
            E4 = u3 - E4;
        }
        if (qb) {
            d4 = u3 - d4;
        }
        if (use_canvas) {
            canvas_context.globalCompositeOperation = "source-over";
            canvas_context.lineWidth = 0;
            canvas_context.strokeStyle = color;
            canvas_context.fillStyle = color;
            canvas_context.beginPath();
            canvas_context.arc(E4, d4, Math.round(circle[2] * (u3) * D3), 0, Math.PI * 2, true);
            canvas_context.closePath();
            canvas_context.stroke();
            canvas_context.fill();
            R4[j] = new Array(circle[0], circle[1], circle[2], color);
        } else if (use_svg) {
            var c = Db.circle(E4, d4, Math.round(circle[2] * (u3) * D3));
            c.attr("fill", color);
            c.attr("stroke", color);
            R4[j] = c;
        }
        f3++;
        Na = f3;
    }
    if (f3 == Xa.length && E3 == 1) {
        if ((task == "symbol" || task == "number") && D2 == 100) {
            s2 = new Date().getTime();
            D2 = Math.round(D2 * (s2 - pa) / 300);
            if (D2 > 200) {
                D2 = 600;
            }
        }
        E3 = 2;
        g2 = 0;
        Fa++;
        sa = true;
        c1 = new Date().getTime();
        if (response_max_dt != 0) {
            clearTimeout(response_timeout);
            response_timeout = window.setTimeout(inputResponseTimeout, (Fa < 2 ? 5 : response_max_dt) * 1000);
        }
        var O = document.getElementById("test-header-text");
        O.innerHTML = "Trial #" + Fa + "";
    }
    if (dot_animate) {
        if (E3 == 2 && task == "oddity" && sa) {
            if (f3 == Xa.length) {
                f3 = 0;
                Y3 = U;
            }
            k2 = window.setTimeout(update, fa);
        }
        if (E3 == 2 && task == "oddity" && !sa) {
            f3 = Xa.length;
            D2 = U;
            E3 = 3;
            k2 = window.setTimeout(update, fa);
        }
    }
    if (use_canvas) {
        canvas_context.restore();
    }
}

function update() {
    window.clearTimeout(k2);
    if (F != -1) {
        var now = new Date().getTime();
        var gc = (now - F);
        var Xb = 1000 / Q1;
        if (fa + (Xb - gc) > 0) {
            fa = fa + (Xb - gc);
        }
    }
    F = new Date().getTime();
    var stim;
    if (Fa >= B4) {
        endTestNow();
        return;
    }
    if (E3 == -1 && app_running) {
        if (nc == 0) {
            Kc = new Array(3, 2, 1);
        } else if (nc % 3 == 0) {
            Kc = new Array(3, 2, 1);
        }
        if (Fa < 2 || (Fa >= 10 && Math.random() < 0.1 && f4 >= 0)) {
            f4 = -1;
            d3 = true;
            E3 = 0;
            stim = nb.O3();
            while (O4 == stim[1]) {
                stim = nb.O3();
            }
            jc = stim[0];
            cfg = stim[0][0];
            cbg = stim[0][1];
            O4 = stim[1];
            lum_range = 20;
            s3 = true;
        } else {
            d3 = false;
            s3 = false;
            f4 = 0;
            if (typeof(result) != "undefined" && g3 == "full") {
                if (((result.ellipse_axis < -70 || result.ellipse_axis > 75) && result.ellipse_b <= Ya) ||
                    ((result.ellipse_axis > -25 && result.ellipse_axis < 20) && result.ellipse_a <= Ya)) {
                    if (result.confidence > 90) {
                        fb[0].running = false;
                        fb[1].running = false;
                        fb[2].running = false;
                        fb[3].running = true;
                        fb[4].running = false;
                        fb[5].running = false;
                        fb[6].running = false;
                        fb[7].running = false;
                        fb[8].running = false;
                    } else if (result.confidence > 80) {
                        fb[2].running = true;
                        fb[3].running = true;
                        fb[5].running = true;
                    }
                } else if (result.confidence > 80) {
                    if (result.ellipse_a > Ya && result.ellipse_axis >= -5 && result.ellipse_axis < 0) {
                        fb[0].running = false;
                        fb[1].running = false;
                        fb[2].running = true;
                        fb[3].running = true;
                        fb[4].running = true;
                        fb[5].running = true;
                        fb[6].running = false;
                        fb[7].running = false;
                        fb[8].running = false;
                    } else if (result.ellipse_a > Ya && result.ellipse_axis < -5 && result.ellipse_axis > -15) {
                        fb[0].running = false;
                        fb[1].running = false;
                        fb[2].running = true;
                        fb[3].running = true;
                        fb[4].running = true;
                        fb[5].running = true;
                        fb[6].running = true;
                        fb[7].running = false;
                        fb[8].running = false;
                    } else if (result.ellipse_a > Ya && result.ellipse_axis <= -15 && result.ellipse_axis > -25) {
                        fb[0].running = false;
                        fb[1].running = false;
                        fb[2].running = true;
                        fb[3].running = true;
                        fb[4].running = false;
                        fb[5].running = false;
                        fb[6].running = true;
                        fb[7].running = true;
                        fb[8].running = true;
                    } else if (result.ellipse_a > Ya && result.ellipse_axis > 0 && result.ellipse_axis < 10) {
                        fb[0].running = false;
                        fb[1].running = true;
                        fb[2].running = true;
                        fb[3].running = true;
                        fb[4].running = false;
                        fb[5].running = true;
                        fb[6].running = false;
                        fb[7].running = false;
                        fb[8].running = false;
                    } else if (result.ellipse_a > Ya && result.ellipse_axis > 0 && result.ellipse_axis < 10) {
                        fb[0].running = true;
                        fb[1].running = true;
                        fb[2].running = true;
                        fb[3].running = true;
                        fb[4].running = false;
                        fb[5].running = true;
                        fb[6].running = false;
                        fb[7].running = false;
                        fb[8].running = false;
                    }
                } else if (result.confidence > .80) {
                    fb[0].running = false;
                    fb[1].running = false;
                    fb[2].running = true;
                    fb[3].running = true;
                    fb[4].running = false;
                    fb[5].running = true;
                    fb[6].running = false;
                    fb[7].running = false;
                    fb[8].running = false;
                }
            }
            f4 = -1;
            f4 = E1 % fb.length;
            var Ua = 0.;
            var B2 = 0.;
            var I2 = 0;
            var Zc = -1;
            g1 = 0;
            var j = Math.floor(Math.random() * fb.length) % fb.length;
            for (var i = 0; i < fb.length; i++) {
                if (fb[j].running) {
                    g1++;
                    I2++;
                    B2 += fb[j].confidence;
                    if (Zc == -1 && fb[j].n < 5) {
                        Zc = j;
                        Ua = 0;
                        break;
                    } else if (Zc == -1 || fb[j].confidence < Ua) {
                        Ua = fb[j].confidence;
                        Zc = j;
                    }
                }
                j = (j + 1) % fb.length;
            }
            E1 += 1;
            if (Ua > confidence_goal) {
                log("confidence goal reached: end now");
                endTestNow();
                return;
            }
            if (Zc == -1) {
                log("unable to select a viable sampler");
                endTestNow();
                return;
            }
            f4 = Zc;
            E3 = 0;
            stim = fb[f4].O3();
            lum_range = fb[f4].lum_range;
            cfg = stim[0][0];
            cbg = stim[0][1];
            O4 = stim[1];
            nc++;
        }
    }
    if (E3 != -1 && E3 != 2) {
        draw();
        if (E3 == 4) {
            if (f3 == 0 && (!sa)) {
                F = -1;
                window.clearTimeout(k2);
                if (task == "oddity" && !e3) {
                    E3--;
                    G3 = 0;
                    f3 = nafc;
                    Y3 = nafc;
                    k2 = window.setTimeout(update, fa);
                } else {
                    k2 = window.setTimeout(update, G1);
                }
            }
        } else {
            if (E3 == 5) {
                F = -1;
                k2 = window.setTimeout(update, G1);
            } else {
                k2 = window.setTimeout(update, fa);
            }
        }
    } else if (task == "oddity" && E3 == 2) {
        draw();
        k2 = window.setTimeout(update, fa);
    }
}

function endTestNow() {
    C2();
    var now = new Date();
    var c3 = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 5; i++) {
        c3 += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    var response_mean = 0.0;
    for (var i = 0; i < response_dt.length; i++) {
        response_mean += response_dt[i];
    }
    response_mean = response_mean / response_dt.length;
    var response_std = 0.0;
    if (response_dt.length > 4) {
        for (var i = 0; i < response_dt.length; i++) {
            response_std += Math.pow(response_dt[i] - response_mean, 2.0);
        }
        response_std = Math.sqrt(response_std / response_dt.length);
    }
    result.response_dt = response_dt;
    result.response_mean = response_mean;
    result.response_std = response_std;
    result.user_agent = navigator.userAgent;
    result.user_agent_dppx = window.devicePixelRatio;
    result.user_agent_window = [$(document).width(), $(document).height()];
    result.H = E;
    result.app_version = app_version;
    result.datetime = now.toISOString();
    result.id = c3;
    result.intermediate_results = Nb;
    U2 = ""
    result_summary = result.summary;
    result_data = result;
    clearTimeout(k2);
    clearTimeout(response_timeout);
    $("#timeout-notice").css("display", "none");
    sa = false;
    clearCanvas();
    if (E3 == 2) {
        E3 = 3;
    }
    N2 = true;
    var t = "";
    t = "<table cellpadding=\"5\">";
    t += "<tr><td>Color Vision Type:</td><td><b>" + result.summary.toUpperCase() + "</b></td></tr>";
    t += "<tr><td>Color Deficiency Extent:</td><td><b>" + sprintf("%d", Math.min(100, Math.max(0, 100 * ((result.ellipse_a - Ya) / (140 - Ya))))) + "%</b></td></tr>";
    t += "</table>";
    if (getOptionParameter("show_detail") == "on") {
        t += sprintf("<p><b>Threshold Ellipse Parameters:</b><br />" +
            "Extent A: %0.02f<br />Extent B: %0.02f<br />Axis %d&deg;<br /></p>", result.ellipse_a, result.ellipse_b, result.ellipse_axis);
        t += "<p><table width=\"100%\"><tr><td><b>Axis</b></td><td><b>Extent</b></td><td><b>Limit</b></td><td><b>Confidence</b></td></tr>";
        for (var i = 0; i < fb.length; i++) {
            if (fb[i].running) {
                t += sprintf("<tr><td>%d&deg;</td><td>%0.02f</td><td>%d</td><td>%d</td></tr>", fb[i].axis_angle, fb[i].level, fb[i].axis_limit_pos + fb[i].axis_limit_neg, fb[i].confidence * 100);
            }
        }
        t += "</table></p>";
    }
    U2 = t;
    if (mobile_system == "online") {
      window.location = "http://enchroma.com/test/?summary=" + encodeURIComponent(result_summary) +
          "&axis=" + encodeURIComponent(result.ellipse_axis) +
          "&exta=" + encodeURIComponent(result.ellipse_a) +
          "&extb=" + encodeURIComponent(result.ellipse_b) +
          "&lcs=" + encodeURIComponent(result.extent_wb) +
          "&ver=" + encodeURIComponent(result.app_version) +
          "&ds=true";
      return true;
        // $.post("/test/", {
        //         summary: encodeURIComponent(result_summary),
        //         axis: encodeURIComponent(result.ellipse_axis),
        //         exta: encodeURIComponent(result.ellipse_a),
        //         extb: encodeURIComponent(result.ellipse_b),
        //         lcs: encodeURIComponent(result.extent_wb),
        //         ver: encodeURIComponent(result.app_version),
        //         data: encodeURIComponent(JSON.stringify(result))
        //     })
        //     .done(function(data) {
        //
        //         window.location = "http://enchroma.com/test/?summary=" + encodeURIComponent(result_summary) +
        //             "&axis=" + encodeURIComponent(result.ellipse_axis) +
        //             "&exta=" + encodeURIComponent(result.ellipse_a) +
        //             "&extb=" + encodeURIComponent(result.ellipse_b) +
        //             "&lcs=" + encodeURIComponent(result.extent_wb) +
        //             "&ver=" + encodeURIComponent(result.app_version) +
        //             "&ds=true";
        //         return true;
        //     });

    }
    if (localStorage !== null) {
        localStorage.clear();
        localStorage.removeItem("result_summary");
        localStorage.removeItem("result_data");
        localStorage.removeItem("U2");
        localStorage.removeItem("Pa");
        localStorage.setItem("result_summary", result_summary);
        localStorage.setItem("result_data", JSON.stringify(result_data));
        localStorage.setItem("U2", U2);
        localStorage.setItem("Pa", app_version);
    }
    updateResultText();
    $.mobile.changePage($("#result"), {
        role: "dialog"
    });
}

function updateStatusBar(val, Bd, Ad, Qc, Xc) {
    $("#" + Bd).width(sprintf("%d%%", Math.min(100, 100 * (val / Xc))));
    $("#" + Ad).width(sprintf("%d%%", Math.min(100, 100 * (1 - val / Xc))));
    if (100 * (val / Xc) < 25) {
        document.getElementById(Bd).innerHTML = "&nbsp;";
        document.getElementById(Ad).innerHTML = sprintf("&nbsp;%d%s&nbsp;", val, Qc);
    } else {
        document.getElementById(Ad).innerHTML = "&nbsp;";
        document.getElementById(Bd).innerHTML = sprintf("&nbsp;%d%s&nbsp;", val, Qc);
    }
}

function updateProgressBar(val, Bd, Ad, Qc, Xc) {
    if (val > progress_cur_val) {
        $("#" + Bd).width(sprintf("%d%%", Math.min(100, 100 * (val / Xc))));
        $("#" + Ad).width(sprintf("%d%%", Math.min(100, 100 * (1 - val / Xc))));
        progress_cur_val = val;
    }
}

function C2() {
    var r;
    var A2 = 0;
    var mb = 0;
    var Mb = new Array();
    var pt;
    for (var i = 0; i < fb.length; i++) {
        if (fb[i].running && !isNaN(fb[i].axis_angle)) {
            mb++;
            A2 += fb[i].confidence;
            pt = [fb[i].level * Math.cos(fb[i].axis_angle * 0.0174533), fb[i].level * Math.sin(fb[i].axis_angle * 0.0174533)];
            Mb.push(pt);
            Mb.push([-1 * pt[0], -1 * pt[1]]);
        }
    }
    updateStatusBar(100 * (A2 / mb), "status-var-confidence-ext", "status-var-confidence-rem", "%", 100);
    updateProgressBar(Math.max(0, 100 * (Math.exp((A2 / mb)) - 1) / (Math.exp(1.0) - 1)), "status-var-progress-ext", "status-var-progress-rem", "%", 100);
    if (Mb.length >= 6) {
        var K2 = w(Mb);
        var phi = K2[4] * tc;
        var a = K2[2];
        var b = K2[3];
        var tx0 = lc((b * Id(phi)) / i4(C4(a, 2) * C4(Hd(phi), 2) + C4(b, 2) * C4(Id(phi), 2)), (a * Hd(phi)) / i4(C4(a, 2) * C4(Hd(phi), 2) + C4(b, 2) * C4(Id(phi), 2)));
        var bya1 = Math.abs(a * Math.cos(tx0) * Math.sin(phi) + b * Math.sin(tx0) * Math.cos(phi));
        var tx1 = lc((b * Hd(phi)) / i4(C4(b, 2) * C4(Hd(phi), 2) + C4(a, 2) * C4(Id(phi), 2)), -((a * Id(phi)) / i4(C4(b, 2) * C4(Hd(phi), 2) + C4(a, 2) * C4(Id(phi), 2))));
        var rga1 = Math.abs(a * Math.cos(tx1) * Math.cos(phi) - b * Math.sin(tx1) * Math.sin(phi));
        if (rga1 < 200 && bya1 < 200) {
            rga = rga1;
            bya = bya1;
        } else {
            rga = fb[3].level;
            bya = fb[9].level;
        }
    } else {
        K2 = [0., 0., Math.max(fb[3].level, fb[9].level), Math.min(fb[3].level, fb[9].level), (fb[3].level > fb[9].level) ? 0 : -90];
        rga = fb[3].level;
        bya = fb[9].level;
    }
    updateStatusBar(rga, "status-var-axis-RG-ext", "status-var-axis-RG-rem", "", 200);
    updateStatusBar(bya, "status-var-axis-BY-ext", "status-var-axis-BY-rem", "", 200);
    document.getElementById("status-var-ellipse").innerHTML = sprintf("M:%d&nbsp;m:%d&nbsp;&Phi;:%d&deg;", K2[2], K2[3], K2[4]);
    u1 = new Array();
    for (var i = 0; i < fb.length; i++) {
        if (fb[i].running) {
            u1[i] = {
                n: fb[i].n,
                nmiss: fb[i].nmiss,
                level: fb[i].level,
                confidence: fb[i].confidence,
                axis: fb[i].axis_angle
            };
        }
    };
    var Oa = 0;
    if (typeof(result) != "undefined") {
        Oa = result.confidence;
    }
    result = {
        survey: survey,
        n: Fa,
        nmiss: q,
        nafc: nafc,
        task: task,
        samplers: u1,
        mc_nmiss: nb.nmiss,
        feedback: za,
        confidence_goal: confidence_goal,
        response_timeout: response_max_dt,
        confidence: 100 * (A2 / mb),
        ellipse_a: K2[2],
        ellipse_b: K2[3],
        ellipse_axis: K2[4],
        extent_rg: rga,
        extent_by: bya,
        extent_wb: fb[10].level,
        summary: "unknown",
        summaryPretty: "Unknown"
    };
    if (result.confidence > 80 && result.ellipse_a > Ya) {
        if (result.ellipse_axis >= -2.5 && result.ellipse_axis <= 20) {
            result.summary = "protan";
        } else if (result.ellipse_axis < -2.5 && result.ellipse_axis >= -25) {
            result.summary = "deutan";
        } else if (result.ellipse_axis < -75 || result.ellipse_axis > 75) {
            result.summary = "tritan";
        } else {
            result.summary = "unknown";
        }
        if (result.summary != "unknown") {
            if (result.ellipse_a < db) {
                result.summary = "mild " + result.summary;
            } else if (result.ellipse_a < ga) {
                result.summary = "moderate " + result.summary;
            } else if (result.ellipse_a < wa) {
                result.summary = "strong " + result.summary;
            } else {
                result.summary = "complete " + result.summary;
            }
        }
    } else if (result.confidence > 50 && result.ellipse_a <= Ya) {
        result.summary = "normal";
    } else {
        result.summary = "unknown";
    }
    if (result.summary == "unknown")
        result.summaryPretty = "Unknown";
    if (result.summary == "mild deutan")
        result.summaryPretty = "Mild Red-Green Deficiency,Type Deutan";
    if (result.summary == "moderate deutan")
        result.summaryPretty = "Moderate Red-Green Deficiency,Type Deutan";
    if (result.summary == "strong deutan")
        result.summaryPretty = "Strong Red-Green Deficiency,Type Deutan";
    if (result.summary == "complete deutan")
        result.summaryPretty = "Complete Red-Green Dichromat,Type Deutan";
    if (result.summary == "mild protan")
        result.summaryPretty = "Mild Red-Green Deficiency,Type Protan";
    if (result.summary == "moderate protan")
        result.summaryPretty = "Moderate Red-Green Deficiency,Type Protan";
    if (result.summary == "strong protan")
        result.summaryPretty = "Strong Red-Green Deficiency,Type Protan";
    if (result.summary == "complete protan")
        result.summaryPretty = "Complete Red-Green Dichromat,Type Protan";
    if (result.summary == "mild tritan")
        result.summaryPretty = "Mild Blue-Yellow Deficiency,Type Tritan";
    if (result.summary == "moderate tritan")
        result.summaryPretty = "Moderate Blue-Yellow Deficiency,Type Tritan";
    if (result.summary == "strong tritan")
        result.summaryPretty = "Strong Blue-Yellow Deficiency,Type Tritan";
    if (result.summary == "complete tritan")
        result.summaryPretty = "Complete Blue-Yellow Dichromat,Type Tritan";
    if (result.summary == "mild mono")
        result.summaryPretty = "Mild General Color Deficiency";
    if (result.summary == "moderate mono")
        result.summaryPretty = "Moderate General Color Deficiency";
    if (result.summary == "strong mono")
        result.summaryPretty = "Possible Incomplete Achromatopsia";
    if (result.summary == "complete mono")
        result.summaryPretty = "Possible Complete Achromatopsia";
    if (result.summary == "normal")
        result.summaryPretty = "Normal Color Vision";
    if (result.summary == "super normal")
        result.summaryPretty = "Super-Fine Color Discrimination";
    document.getElementById("status-var-resultest").innerHTML = result.summary.toUpperCase().replace(/\s/g, '&nbsp;');
    if ((Oa < 50 && result.confidence >= 50) || (Oa < 75 && result.confidence >= 75) || (Oa < 80 && result.confidence >= 80) || (Oa < 90 && result.confidence >= 90) || (Oa < 95 && result.confidence >= 95) || (Oa < 97.5 && result.confidence >= 97.5) || (Oa < 98.125 && result.confidence >= 98.125)) {
        Nb.push({
            n: Fa,
            confidence: result.confidence,
            ellipse_a: K2[2],
            ellipse_b: K2[3],
            ellipse_axis: K2[4],
            summary: result.summary
        });
    }
    return result;
}

function inputResponseMarkTime() {
    clearTimeout(response_timeout);
    var now = new Date().getTime();
    var gc = (now - c1) / 1000;
    response_dt.push(gc);
    return true;
}

function inputResponse2D(x, y) {
    var i;
    var c;
    var d;
    if (!sa) {
        return;
    }
    if (typeof(Xa) == "undefined") {
        return;
    }
    if (task == "oddity") {
        for (i = 0; i < Xa.length; i++) {
            c = Xa[i];
            d = Math.sqrt((c[0] - x) * (c[0] - x) + (c[1] - y) * (c[1] - y)) / D3;
            if (d <= c[2]) {
                sa = false;
                inputResponseMarkTime();
                inputResponse(c[3]);
                return;
            }
        }
    }
}

function inputResponseTimeout() {
    if (sa) {
        if (E3 == 2) {
            f3 = Xa.length;
            E3++;
            log("app state", E3);
            update();
        }
    }
}

function inputResponseNumber(num) {
    if (sa) {
        sa = false;
        inputResponseMarkTime();
        inputResponse(num);
    }
}

function inputResponse(t4) {
    $("#timeout-notice").css("display", "none");
    if (t4 != O4) {
        q++;
    }
    if (f4 == -1) {
        nb.response(O4 == t4 ? 1 : 0);
    } else {
        fb[f4].response(O4 == t4 ? 1 : 0);
    }
    if (nb.nmiss >= 2) {
        app_running = false;
        clearCanvas();
        $.mobile.changePage($("#instructions-retry"), {
            role: "dialog"
        });
    }
    if (!d3 && E1 >= 2) {
        C2();
    }
    if (E3 == 2) {
        E3 = 3;
    }
    if (task == "oddity" && E3 == 4) {
        if (E3 == 4) {
            f3 = Xa.length;
            G3 = 0;
            Y3 = nafc;
            E3--;
            window.clearTimeout(k2);
            k2 = window.setTimeout(update, fa);
            return;
        }
    } else if (E3 == 4 && task != "oddity") {
        window.clearTimeout(k2);
        k2 = window.setTimeout(update, G1);
    } else {
        if (!(task == "oddity" && dot_animate)) {
            window.clearTimeout(k2);
            k2 = window.setTimeout(update, fa);
        }
    }
}

function inputResponseCircle() {
    if (sa) {
        sa = false;
        if (inputResponseMarkTime()) {
            inputResponse(3);
        } else {
            inputResponse(0);
        }
        $("#controls-bottom-circle").removeClass("ui-btn-active");
        $("#controls-bottom-mini-circle").removeClass("ui-btn-active");
        $("#controls-right-circle").removeClass("ui-btn-active");
        $("#controls-right-mini-circle").removeClass("ui-btn-active");
    }
}
respondCircle = inputResponseCircle;

function inputResponseSquare() {
    if (sa) {
        sa = false;
        if (inputResponseMarkTime()) {
            inputResponse(1);
        } else {
            inputResponse(0);
        }
        $("#controls-bottom-square").removeClass("ui-btn-active");
        $("#controls-bottom-mini-square").removeClass("ui-btn-active");
        $("#controls-right-square").removeClass("ui-btn-active");
        $("#controls-right-mini-square").removeClass("ui-btn-active");
    }
}
respondSquare = inputResponseSquare;

function inputResponseDiamond() {
    if (sa) {
        sa = false;
        if (inputResponseMarkTime()) {
            inputResponse(2);
        } else {
            inputResponse(0);
        }
        $("#controls-bottom-diamond").removeClass("ui-btn-active");
        $("#controls-bottom-mini-diamond").removeClass("ui-btn-active");
        $("#controls-right-diamond").removeClass("ui-btn-active");
        $("#controls-right-mini-diamond").removeClass("ui-btn-active");
    }
}
respondDiamond = inputResponseDiamond;

function inputResponseNothing() {
    if (sa) {
        sa = false;
        inputResponseMarkTime();
        inputResponse(0);
        $("#controls-bottom-nothing").removeClass("ui-btn-active");
        $("#controls-bottom-mini-nothing").removeClass("ui-btn-active");
        $("#controls-bottom-unsure").removeClass("ui-btn-active");
        $("#controls-bottom-mini-unsure").removeClass("ui-btn-active");
        $("#controls-bottom-skip").removeClass("ui-btn-active");
        $("#controls-bottom-mini-skip").removeClass("ui-btn-active");
        $("#controls-right-nothing").removeClass("ui-btn-active");
        $("#controls-right-mini-nothing").removeClass("ui-btn-active");
        $("#controls-right-unsure").removeClass("ui-btn-active");
        $("#controls-right-mini-unsure").removeClass("ui-btn-active");
        $("#controls-right-skip").removeClass("ui-btn-active");
        $("#controls-right-mini-skip").removeClass("ui-btn-active");
    }
}
respondNothing = inputResponseNothing;

function inputClearTimeoutAlert() {
    timeout_alert_elem.style.zIndex = "-1";
    g2 = 0;
    if (!app_running) {
        var result_dialog_elem = document.getElementById("overlay-result");
        result_dialog_elem.style.zIndex = "2";
        document.signup.email.focus();
    }
}
clearTimeoutAlert = inputClearTimeoutAlert;

function isKioskMode() {
    return (!(typeof(kioskpro_id) == "undefined"));
}

function inputRestartTest() {
    if ((!isKioskMode()) && typeof(result) != "undefined") {
        location.assign(location.href + "?result=" + encodeURIComponent(result_summary) + "&log=" + encodeURIComponent(JSON.stringify(result)));
    } else {
        location.reload();
    }
}
restartTest = inputRestartTest;

function inputResultContinue() {
    app_running = true;
    g2 = 0;
    var result_dialog_elem = document.getElementById("overlay-result");
    result_dialog_elem.style.zIndex = "-1";
    document.signup.email.blur();
}
resultContinue = inputResultContinue;

function inputEndTest() {
    endTestNow();
}
endTest = inputEndTest;

function inputGetResultObject() {
    return result;
}
getResultObject = inputGetResultObject;

function inputCancelTest() {}

function inputResizeCanvas(Ec) {
    resize(Ec);
}
resizeCanvas = inputResizeCanvas;

function inputSetDemoMode(mode) {
    d3 = mode;
}
setDemoMode = inputSetDemoMode;

function inputIsAppRunning() {
    return app_running;
}
isAppRunning = inputIsAppRunning;

function inputGetResultText() {
    return U2;
}
getResultText = inputGetResultText;

function inputGetResultSummary() {
    return result_summary;
}
x1 = inputGetResultSummary;

function inputGetResultData() {
    return result;
}
getResultData = inputGetResultData;
var bc, X3, Fb, Q2;

function getEventCoordinates(e) {
    if (e.clientX && e.clientY) {
        bc = (e.clientX - L3) / u3;
        X3 = (e.clientY - V3) / v3;
    } else if (e.offsetX) {
        bc = (e.offsetX - L3) / u3;
        X3 = (e.offsetY - V3) / v3;
    } else if (e.layerX) {
        bc = (e.layerX - L3) / u3;
        X3 = (e.layerY - V3) / v3;
    } else {
        bc = (e.pageX - Cb.offsetLeft) / u3;
        X3 = (e.pageY - Cb.offsetTop) / v3;
    }
}

function handleMouseMove(e) {
    if (e.touches) {
        getEventCoordinates(e.touches[0]);
    } else {
        getEventCoordinates(e);
    }
};
document.addEventListener("keyup", function(e) {
    if (task == "number" && sa) {
        var x = e.keyCode;
        if (x >= 49 && x <= 57) {
            inputResponseNumber(x - 48);
        }
        if (x >= 97 && x <= 105) {
            inputResponseNumber(x - 96);
        } else if (x == 48 || x == 96 || x == 13 || x == 32) {
            inputResponseNumber(0);
        }
    }
}, true);
document.addEventListener("mousedown", function(e) {
    if (!Fb) {
        Q2 = true;
    }
    Fb = true;
    handleMouseMove(e);
    document.addEventListener("mousemove", handleMouseMove, true);
}, true);
document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", handleMouseMove, true);
    Fb = false;
    inputResponse2D(bc, X3);
    bc = undefined;
    X3 = undefined;
}, true);
document.addEventListener("touchstart", function(e) {
    if (!Fb) {
        Q2 = true;
    }
    Fb = true;
    handleMouseMove(e);
    document.addEventListener("touchmove", handleMouseMove, true);
}, true);
document.addEventListener("touchend", function() {
    document.removeEventListener("touchmove", handleMouseMove, true);
    Fb = false;
    inputResponse2D(bc, X3);
    bc = undefined;
    X3 = undefined;
}, true);

function getElementPosition(Cc) {
    var elem = Cc,
        tagname = "",
        x = 0,
        y = 0;
    while ((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
        y += elem.offsetTop;
        x += elem.offsetLeft;
        tagname = elem.tagName.toUpperCase();
        if (tagname == "BODY")
            elem = 0;
        if (typeof(elem) == "object") {
            if (elem.offsetParent != null && typeof(elem.offsetParent) == "object") {
                elem = elem.offsetParent;
            } else {
                elem = 0;
            }
        }
    }
    return {
        x: x,
        y: y
    };
}
