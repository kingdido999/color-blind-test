var I = function(vb) {
    if (!(this instanceof I)) {
        return new FastSampler();
    }
    this.nafc = nafc;
    this.n = -1;
    this.nmiss = 0;
    this.done = 0;
};
I.prototype.response = function(Dc, confidence) {
    this.n++;
    if (!Dc) {
        this.nmiss++;
    }
};
I.prototype.O3 = function() {
    var na = Math.ceil(this.nafc * Math.random());
    return new Array([
        [80, -45],
        [40, 135]
    ], na);
};
var o2 = function(vb, ub, W, h, Da, init_lum_range) {
    if (!(this instanceof o2)) {
        return new o2();
    }
    this.nafc = vb;
    this.nmax = ub;
    this.confidence_goal = W;
    this.nmiss = 0;
    this.trials = new Array();
    this.n = -1;
    this.done = 0;
    this.level = 10;
    this.levelnext = 20;
    this.levelconfidence = 0.0;
    this.confidence_interval = h;
    this.slope = 5;
    this.rx = new Array(0, 1);
    this.nrx = 2;
    this.x = new Array();
    this.xi = 0;
    this.running = false;
    var i = 0;
    var x0 = 1.0;
    var D4 = 0.1;
    while (i < 10) {
        this.x[i] = x0;
        x0 += D4;
        i++;
    }
    var D4 = 0.2;
    while (i < 20) {
        this.x[i] = x0;
        x0 += D4;
        i++;
    }
    var D4 = 0.5;
    while (i < 30) {
        this.x[i] = x0;
        x0 += D4;
        i++;
    }
    var D4 = 1.0;
    while (x0 < 150) {
        this.x[i] = x0;
        x0 += D4;
        i++;
    }
    this.nx = i;
    this.g4 = new Array();
    i = 0;
    while (i < this.nx) {
        this.g4[i] = this.x[i];
        i++;
    }
    this.ntheta = i;
    this.xi = -1;
    var dx = 0;
    for (i = 0; i < this.nx; i++) {
        if (this.xi == -1 || Math.abs(this.x[i] - this.levelnext) < dx) {
            dx = Math.abs(this.x[i] - this.levelnext);
            this.xi = i;
        }
    }
    this.prx = new Array();
    var nx0;
    var Gc;
    var p4;
    var i, j, k;
    for (i = 0; i < this.nrx; i++) {
        this.prx[i] = new Array();
        for (j = 0; j < this.ntheta; j++) {
            this.prx[i][j] = new Array();
            for (k = 0; k < this.nx; k++) {
                this.prx[i][j][k] = (this.rx[i] == 1 ? 0 : 1) + (this.rx[i] == 1 ? 1 : -1) * ((1 / (this.nafc)) + ((this.nafc - 1) / (this.nafc)) *
                    (this.g4[j] == 0 ? 0 : 0.95 * Md(this.x[k], Math.abs(this.g4[j]), ((this.g4[j] * 4) / 100) * (this.slope))));
            }
        }
    }
    this.pttheta = new Array();
    for (i = 0; i < this.ntheta; i++) {
        this.pttheta[i] = 1.0 / this.ntheta;
    }
    this.xopti = new Array();
    this.rxopti = new Array();
    this.ptrx = new Array();
    for (i = 0; i < this.nrx; i++) {
        this.ptrx[i] = new Array();
        for (j = 0; j < this.nx; j++) {
            cc = 0.;
            for (k = 0; k < this.ntheta; k++) {
                cc += this.pttheta[k] * this.prx[i][k][j];
            }
            this.ptrx[i][j] = cc;
        }
    }
    this.ptthetarx = new Array();
    for (i = 0; i < this.nrx; i++) {
        this.ptthetarx[i] = new Array();
        for (j = 0; j < this.ntheta; j++) {
            this.ptthetarx[i][j] = new Array();
            for (k = 0; k < this.nx; k++) {
                this.ptthetarx[i][j][k] = (this.pttheta[j] * this.prx[i][j][k]) / this.ptrx[i][k];
            }
        }
    }
    this.response(-1);
    this.level = 50;
    this.confidence = 0;
    this.lum_range = init_lum_range;
    this.axis_angle = Da;
    this.Gb(Da);
};
o2.prototype.Y1 = function(Vb) {
    var rc = 0;
    this.xi = -1;
    for (i = 0; i < this.nx; i++) {
        if (this.xi == -1 || (Math.abs(this.x[i] - Vb) < rc)) {
            this.xi = i;
            rc = Math.abs(this.x[i] - Vb);
        }
    }
    this.levelnext = this.x[this.xi];
}
o2.prototype.Gb = function(U3) {
    var hb = 0;
    for (i = 0; i < this.ntheta; i++) {
        hb += this.pttheta[i];
    }
    for (i = 0; i < this.ntheta; i++) {
        this.pttheta[i] = this.pttheta[i] / hb;
    }
    this.axis_angle = U3;
    if (isNaN(this.axis_angle)) {
        this.axis_limit_pos = 0;
        this.axis_limit_pos = 0;
        var T4;
        var h4;
        for (var l = 0; l < 100; l++) {
            T4 = R3(Q3(p3({
                L: 50 + l * .5,
                C: 50 + (this.lum_range / 2),
                H: 40
            })));
            h4 = R3(Q3(p3({
                L: 50 + l * .5,
                C: 50 - (this.lum_range / 2),
                H: 40
            })));
            if (T4.R <= 250 && T4.G <= 250 && T4.B <= 250 && T4.R >= 5 && T4.G >= 5 && T4.B >= 5 && h4.R <= 250 && h4.G <= 250 && h4.B <= 250 && h4.R >= 5 && h4.G >= 5 && h4.B >= 5) {
                this.axis_limit_pos = l;
            } else {
                break;
            }
        }
        for (var l = 0; l < 100; l++) {
            T4 = R3(Q3(p3({
                L: 50 - l * .5,
                C: 50 + (this.lum_range / 2),
                H: 40
            })));
            h4 = R3(Q3(p3({
                L: 50 - l * .5,
                C: 50 - (this.lum_range / 2),
                H: 40
            })));
            if (T4.R <= 250 && T4.G <= 250 && T4.B <= 250 && T4.R >= 5 && T4.G >= 5 && T4.B >= 5 && h4.R <= 250 && h4.G <= 250 && h4.B <= 250 && h4.R >= 5 && h4.G >= 5 && h4.B >= 5) {
                this.axis_limit_neg = l;
            } else {
                break;
            }
        }
    } else {
        this.axis_limit_pos = 0;
        this.axis_limit_neg = 0;
        var T4;
        var h4;
        for (var c = 0; c < 250; c++) {
            T4 = R3(Q3(p3({
                L: 50 + (this.lum_range / 2),
                C: c,
                H: this.axis_angle
            })));
            h4 = R3(Q3(p3({
                L: 50 - (this.lum_range / 2),
                C: c,
                H: this.axis_angle
            })));
            if (T4.R <= 250 && T4.G <= 250 && T4.B <= 250 && T4.R >= 5 && T4.G >= 5 && T4.B >= 5 && h4.R <= 250 && h4.G <= 250 && h4.B <= 250 && h4.R >= 5 && h4.G >= 5 && h4.B >= 5) {
                this.axis_limit_pos = c;
            } else {
                break;
            }
        }
        for (var c = 0; c < 250; c++) {
            T4 = R3(Q3(p3({
                L: 50 + (this.lum_range / 2),
                C: c,
                H: this.axis_angle + 180
            })));
            h4 = R3(Q3(p3({
                L: 50 - (this.lum_range / 2),
                C: c,
                H: this.axis_angle + 180
            })));
            if (T4.R <= 250 && T4.G <= 250 && T4.B <= 250 && T4.R >= 5 && T4.G >= 5 && T4.B >= 5 && h4.R <= 250 && h4.G <= 250 && h4.B <= 250 && h4.R >= 5 && h4.G >= 5 && h4.B >= 5) {
                this.axis_limit_neg = c;
            } else {
                break;
            }
        }
    }
    this.q2();
}
o2.prototype.response = function(Dc) {
    this.n++;
    if (Dc == 0) {
        this.nmiss++;
    }
    if (Dc >= 0) {
        this.rxopti[this.n] = (Dc);
        var hb = 0;
        for (i = 0; i < this.ntheta; i++) {
            this.pttheta[i] = this.ptthetarx[Dc][i][this.xi];
            hb += this.pttheta[i];
        }
        for (i = 0; i < this.ntheta; i++) {
            this.pttheta[i] = this.pttheta[i] / hb;
        }
    }
    var i, j, k;
    var cc;
    this.ptrx = new Array();
    for (i = 0; i < this.nrx; i++) {
        this.ptrx[i] = new Array();
        for (j = 0; j < this.nx; j++) {
            cc = 0.;
            for (k = 0; k < this.ntheta; k++) {
                cc += this.pttheta[k] * this.prx[i][k][j];
            }
            this.ptrx[i][j] = cc;
        }
    }
    this.ptthetarx = new Array();
    for (i = 0; i < this.nrx; i++) {
        this.ptthetarx[i] = new Array();
        for (j = 0; j < this.ntheta; j++) {
            this.ptthetarx[i][j] = new Array();
            for (k = 0; k < this.nx; k++) {
                this.ptthetarx[i][j][k] = (this.pttheta[j] * this.prx[i][j][k]) / this.ptrx[i][k];
            }
        }
    }
    this.HtThetarx = new Array();
    var J2 = 0;
    for (i = 0; i < this.nrx; i++) {
        this.HtThetarx[i] = new Array();
        for (k = 0; k < this.nx; k++) {
            J2 = 0.;
            for (j = 0; j < this.ntheta; j++) {
                J2 += this.ptthetarx[i][j][k] * k4(this.ptthetarx[i][j][k])
            }
            this.HtThetarx[i][k] = -J2;
        }
    }
    this.HtThetaRx = new Array();
    var O2 = 0.;
    for (i = 0; i < this.nx; i++) {
        O2 = 0.;
        for (j = 0; j < this.nrx; j++) {
            O2 += this.ptrx[j][i] * this.HtThetarx[j][i];
        }
        this.HtThetaRx[i] = O2;
    }
    this.q2();
};
o2.prototype.q2 = function() {
    var i;
    var j;
    var Uc = 0;
    this.xi = -1;
    for (i = 0; i < this.nx; i++) {
        if (this.xi == -1 || this.HtThetaRx[i] < Uc) {
            this.xi = i;
            Uc = this.HtThetaRx[i];
        }
    }
    this.levelnext = this.x[this.xi];
    var Qb = 0.;
    var hb = 0.;
    j = 0;
    for (i = 0; i < this.ntheta; i++) {
        hb += this.pttheta[i];
        if (this.pttheta[i] > Qb) {
            Qb = this.pttheta[i];
            j = i;
        }
    }
    this.level = 0.0;
    var A3 = 0;
    for (i = 0; i < this.ntheta; i++) {
        A3 += this.pttheta[i];
        this.level += this.pttheta[i] * this.g4[i];;
    }
    this.level = this.level / A3;
    var Y2 = 0;
    var h2 = 0;
    for (i = 1; i < this.ntheta - 1; i++) {
        if (Math.abs(this.g4[i] - this.level) < this.confidence_interval) {
            Y2 += this.pttheta[i] * (this.g4[i + 1] - this.g4[i - 1]);
        } else {
            h2 += this.pttheta[i] * (this.g4[i + 1] - this.g4[i - 1]);
        }
    }
    this.confidence = Y2 / (Y2 + h2);
}
o2.prototype.O3 = function() {
    var na = Math.ceil(this.nafc * Math.random());
    if (!isNaN(this.axis_angle)) {
        while (1) {
            if (this.n == 0 && this.nmiss == 0) {
                this.Y1((0.25 * wa + 0.75 * ga));
                break;
            }
            if (this.n == 1 && this.nmiss == 0) {
                this.Y1(0.5 * db + 0.5 * Ya);
                break;
            }
            break;
        }
    } else {
        while (1) {
            if (this.n == 0 && this.nmiss == 0) {
                this.Y1(12);
                break;
            }
            if (this.n == 1 && this.nmiss == 0) {
                this.Y1(6);
                break;
            }
            break;
        }
    }
    var zc = this.levelnext;
    var yc = 0;
    if ((this.levelnext > this.axis_limit_neg && this.levelnext <= this.axis_limit_pos) || Math.random() < 0.5) {
        var zc = this.levelnext;
        var yc = 0;
        if (zc > this.axis_limit_pos) {
            yc += (zc - this.axis_limit_pos);
            zc = this.axis_limit_pos;
        }
        if (yc > this.axis_limit_neg) {
            log("ERROR: gamut limit exceeded", this.levelnext);
            yc = this.axis_limit_neg;
        }
        if (isNaN(this.axis_angle)) {
            return new Array([
                [Math.max(1, 50 + zc * 2.), 0 / 0],
                [Math.max(1, 50 - yc * 2.), 0 / 0]
            ], na);
        } else {
            return new Array([
                [zc, this.axis_angle],
                [yc, this.axis_angle + 180]
            ], na);
        }
    } else {
        var yc = this.levelnext;
        var zc = 0;
        if (yc > this.axis_limit_neg) {
            zc += (yc - this.axis_limit_neg);
            yc = this.axis_limit_neg;
        }
        if (zc > this.axis_limit_pos) {
            log("ERROR: gamut limit exceeded", this.levelnext);
            zc = this.axis_limit_pos;
        }
        if (isNaN(this.axis_angle)) {
            return new Array([
                [50 + yc * 2., 0 / 0],
                [50 - zc * 2., 0 / 0]
            ], na);
        } else {
            return new Array([
                [yc, this.axis_angle + 180],
                [zc, this.axis_angle]
            ], na);
        }
    }
};
o2.prototype.confidence = function() {
    return this.levelconfidence;
}

function CloneObject(o) {
    var no = new Object();
    for (var i in o) {
        no[i] = o[i];
    }
    return no;
}

function PlatformIDString() {
    var i2 = {
        appname: navigator.appName,
        platform: navigator.platform,
        ismobile: (navigator.userAgent.toLowerCase()).search("mobile") == -1 ? 0 : 1,
        ismsieold: (typeof document.documentElement.style.opacity != 'undefined') ? 0 : 1,
        screenwidth: screen.availWidth,
        screenheight: screen.availHeight,
        pixelratio: sprintf("%1.1f", window.devicePixelRatio)
    };
    var s = "";
    for (var i in i2) {
        if (s.length != 0) {
            s += "&";
        }
        s += i + "=" + encodeURIComponent(i2[i]);
    }
    return s;
}

function l3(x4) {
    var c = {
        X: x4.x * (x4.Y / x4.y),
        Y: x4.Y,
        Z: (1 - x4.x - x4.y) * (x4.Y / x4.y)
    };
    if (c.Y > 100) {
        log("ERROR: x4 out of bd gamut(Y)", x4.Y);
    }
    if (c.X > 97) {
        log("ERROR: x4 out of bd gamut(X)", x4.Y);
    }
    if (c.Z > 83) {
        log("ERROR: x4 out of bd gamut(Z)", x4.Y);
    }
    return c;
}
s1 = 2.2;
j2 = [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.9692660, 1.8760108, 0.0415560],
    [0.0556434, -0.2040259, 1.0572252]
];

function R3(Y4) {
    var x = Y4.X / 100.;
    var y = Y4.Y / 100.;
    var z = Y4.Z / 100.;
    var r = x * j2[0][0] + y * j2[0][1] + z * j2[0][2];
    var g = x * j2[1][0] + y * j2[1][1] + z * j2[1][2];
    var b = x * j2[2][0] + y * j2[2][1] + z * j2[2][2];
    if (r > 0.0031308) {
        r = 1.055 * (Math.pow(r, 1 / s1)) - 0.055;
    } else {
        r = 12.92 * r;
    }
    if (g > 0.0031308) {
        g = 1.055 * (Math.pow(g, 1 / s1)) - 0.055;
    } else {
        g = 12.92 * g;
    }
    if (b > 0.0031308) {
        b = 1.055 * (Math.pow(b, 1 / s1)) - 0.055;
    } else {
        b = 12.92 * b;
    }
    var c = {
        R: Math.round(r * 255),
        G: Math.round(g * 255),
        B: Math.round(b * 255)
    };
    return c;
}

function r3(bd) {
    if (bd.R > 255 || bd.G > 255 || bd.B > 255 || bd.R < 0 || bd.G < 0 || bd.B < 0) {
        return "#FF00FF";
    }
    return sprintf("#%02x%02x%02x", bd.R, bd.G, bd.B);
}

function yb(n) {
    return Math.pow(n, 1.0 / 3.0);
}

function q3(item) {
    return {
        Y: item.Y,
        x: item.X / (item.X + item.Y + item.Z),
        y: item.Y / (item.X + item.Y + item.Z)
    };
}

function Ma(item, pc) {
    if (item.L < 8) {
        log("ERROR: Ma not valid over linear region L<8");
    }
    if (pc >= 0) {
        return {
            L: item.L * (1 + Math.abs(pc)),
            U: item.U,
            V: item.V
        };
    } else {
        return {
            L: item.L / (1 + Math.abs(pc)),
            U: item.U,
            V: item.V
        };
    }
    var Tc = 100 * Math.pow((item.L + 16) / 116, 3);
    if (pc >= 0) {
        return {
            L: 116 * Math.pow((Tc * (1 + Math.abs(pc))) / 100, 1 / 3) - 16,
            U: item.U,
            V: item.V
        };
    } else {
        return {
            L: 116 * Math.pow((Tc / (1 + Math.abs(pc))) / 100, 1 / 3) - 16,
            U: item.U,
            V: item.V
        };
    }
}

function Q3(item) {
    var Ac = 0.008856;
    var xc = 903.3;
    var A4 = {
        X: 95.047,
        Y: 100.000,
        Z: 108.883
    };
    var c = -1.0 / 3.0;
    var Nc = (4.0 * A4.X) / (A4.X + 15.0 * A4.Y + 3.0 * A4.Z);
    var mc = (9.0 * A4.Y) / (A4.X + 15.0 * A4.Y + 3.0 * A4.Z);
    var a = (1.0 / 3.0) * ((52.0 * item.L) / (item.U + 13 * item.L * Nc) - 1.0);
    var n2 = (item.L + 16.0) / 116.0;
    var y = item.L > xc * Ac ?
        Math.pow(n2, 3) :
        item.L / xc;
    var b = -5.0 * y;
    var d = y * ((39.0 * item.L) / (item.V + 13.0 * item.L * mc) - 5.0);
    var x = (d - b) / (a - c);
    var z = x * a + b;
    var xyz = {
        X: 100 * x,
        Y: 100 * y,
        Z: 100 * z
    };
    return xyz;
}

function p3(item) {
    var deg = 0.0174533;
    return {
        L: item.L,
        U: item.C * Math.cos(item.H * deg),
        V: item.C * Math.sin(item.H * deg)
    };
}
