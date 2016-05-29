function nlog(label, s) {
    document.write(label + ":\n" + numeric.prettyPrint(s) + "\n\n");
}

function w(pts) {
    var x = numeric.transpose(pts)[0];
    var y = numeric.transpose(pts)[1];
    var mx = numeric.sum(x) / numeric.dim(x)[0];
    var my = numeric.sum(y) / numeric.dim(y)[0];
    var sx = (Math.max.apply(null, x) - Math.min.apply(null, x)) / 2;
    var sy = (Math.max.apply(null, y) - Math.min.apply(null, y)) / 2;
    x = numeric.div(numeric.add(x, -mx), sx);
    y = numeric.div(numeric.add(y, -my), sy);
    var D = numeric.transpose([numeric.mul(x, x), numeric.mul(x, y), numeric.mul(y, y), x, y, numeric.rep(numeric.dim(x), 1)]);
    var S = numeric.dot(numeric.transpose(D), D);
    var C = [
        [0, 0, -2, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [-2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    if (0) {
        var B = numeric.eig(numeric.dot(numeric.inv(S), C));
        var geval = B.lambda;
        var j = 0;
        for (var i = 0; i < 6; i++) {
            if (geval.x[i] < 0.) {
                j = i;
                break;
            }
        }
        var A = B.E.x[j];
    } else {
        var K4 = numeric.getBlock(S, [0, 0], [2, 2]);
        var n4 = numeric.getBlock(S, [0, 3], [2, 5]);
        var o4 = numeric.getBlock(S, [3, 3], [5, 5]);
        var Q4 = numeric.getBlock(C, [0, 0], [2, 2]);
        var P4 = numeric.dot(numeric.inv(o4), numeric.transpose(n4));
        var B = numeric.eig(numeric.dot(numeric.inv(Q4), numeric.sub(K4, numeric.dot(n4, P4))));
        var geval = B.lambda;
        var j = 0;
        for (var i = 0; i < 6; i++) {
            if (geval.x[i] < 0.) {
                j = i;
                break;
            }
        }
        var A = numeric.transpose(B.E.x)[j];
        var Sc = numeric.dot(numeric.mul(P4, -1), A);
        var A = [A[0], A[1], A[2], Sc[0], Sc[1], Sc[2]];
    }
    var par = [A[0] * sy * sy, A[1] * sx * sy, A[2] * sx * sx, -2 * A[0] * sy * sy * mx - A[1] * sx * sy * my + A[3] * sx * sy * sy, -A[1] * sx * sy * mx - 2 * A[2] * sx * sx * my + A[4] * sx * sx * sy, A[0] * sy * sy * mx * mx + A[1] * sx * sy * mx * my + A[2] * sx * sx * my * my -
        A[3] * sx * sy * sy * mx - A[4] * sx * sx * sy * my +
        A[5] * sx * sx * sy * sy
    ];
    var I3 = 0.5 * Math.atan2(par[1], par[0] - par[2]);
    var cost = Math.cos(I3);
    var sint = Math.sin(I3);
    var X2 = sint * sint;
    var x2 = cost * cost;
    var w3 = sint * cost;
    var Ao = par[5];
    var Au = par[3] * cost + par[4] * sint;
    var Av = -par[3] * sint + par[4] * cost;
    var Z4 = par[0] * x2 + par[2] * X2 + par[1] * w3;
    var y4 = par[0] * X2 + par[2] * x2 - par[1] * w3;
    var m3 = -Au / (2 * Z4);
    var J3 = -Av / (2 * y4);
    var x3 = Ao - Z4 * m3 * m3 - y4 * J3 * J3;
    var Z3 = m3 * cost - J3 * sint;
    var ac = m3 * sint + J3 * cost;
    var Ru = -x3 / Z4;
    var Rv = -x3 / y4;
    var Ru = Math.sqrt(Math.abs(Ru));
    var Rv = Math.sqrt(Math.abs(Rv));
    var g4 = ca(I3 / tc);
    if (Ru < Rv) {
        var w4 = Rv;
        Rv = Ru;
        Ru = w4;
        g4 = g4 + 90;
    }
    g4 = ca(g4);
    var a = [Z3, ac, Ru, Rv, g4];
    return a;
}

function k4(x) {
    if (x <= 0.) {
        return 0.
    } else {
        return Math.log(x);
    }
}

function UnwrapPhase(a) {
    if (a < -Math.PI) {
        return a + Math.PI;
    } else {
        if (a > Math.PI) {
            return a - Math.PI;
        } else {
            return a;
        }
    }
}

function q1(W3) {
    var permArray = new Array(W3);
    for (var i = 0; i < W3; i++) {
        permArray[i] = i;
    }
    for (var i = (W3 - 1); i >= 0; --i) {
        var y3 = Math.floor(i * Math.random());
        var tmpStore = permArray[i];
        permArray[i] = permArray[y3];
        permArray[y3] = tmpStore;
    }
    return permArray;
}

function E2(p, contour) {
    var fc = new Array();
    var wn = 0;
    for (var j = 0; j < contour.length; j++) {
        fc.push(Math.atan2(contour[j][1] - p[1], contour[j][0] - p[0]))
    }
    for (var j = 0; j < fc.length - 1; j++) {
        wn += UnwrapPhase(fc[j + 1] - fc[j]);
    }
    if (Math.abs(wn) < 0.0001) {
        wn = 0.;
    }
    return wn;
}

function P1(p, a, b) {
    if (a[0] == b[0] && a[1] == b[1]) {
        return Math.sqrt(Math.pow(p[0] - a[0], 2) + Math.pow(p[1] - a[1], 2));
    } else {
        var pz, az, bz, z;
        pz = new Complex(p[0], p[1]);
        az = new Complex(a[0], a[1]);
        bz = new Complex(b[0], b[1]);
        z = (pz.subtract(az)).divide(bz.subtract(az));
        if (!(0 <= z.real && z.real <= 1)) {
            var d1 = Math.sqrt(Math.pow(p[0] - a[0], 2) + Math.pow(p[1] - a[1], 2));
            var d2 = Math.sqrt(Math.pow(p[0] - b[0], 2) + Math.pow(p[1] - b[1], 2));
            if (d1 < d2) {
                return d1;
            } else {
                return d2;
            }
        } else {
            return Math.abs(z.imag * Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2)));
        }
    }
}

function n3(v1, v2) {
    var a = v1[0];
    var b = v1[1];
    var c = v2[0];
    var d = v2[1];
    return [(c * (a * c + b * d)) / (c * c + d * d), (d * (a * c + b * d)) / (c * c + d * d)];
}

function N3(v1) {
    return Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]);
}

function G2(xy, e4, Oc, wc, k3) {
    var deg = 0.0174533;
    var oc = [Math.cos(e4 * deg), Math.sin(e4 * deg)];
    var Mc = [Math.cos((e4 + 90) * deg), Math.sin((e4 + 90) * deg)];
    var Pc = N3(n3(xy, oc));
    var Rc = N3(n3(xy, Mc));
    return Md(N3([Oc * Pc, wc * Rc]), Oc * wc, k3 * Math.sqrt(Oc * wc));
}

function Md(x, mean, k3) {
    return 0.5 * (1 + Jd((x - mean) / (Math.sqrt(2 * k3))));
}

function Jd(x) {
    var sign = (x >= 0) ? 1 : -1;
    x = Math.abs(x);
    var a1 = 0.254829592;
    var a2 = -0.284496736;
    var a3 = 1.421413741;
    var a4 = -1.453152027;
    var a5 = 1.061405429;
    var p = 0.3275911;
    var t = 1.0 / (1.0 + p * x);
    var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
}
var tc = 0.0174533;

function ca(e4) {
    if (e4 >= 360) {
        return ca(e4 - 360);
    }
    if (e4 <= -360) {
        return ca(e4 + 360);
    }
    if (e4 >= 180) {
        return ca(e4 - 180);
    }
    if (e4 <= -180) {
        return ca(e4 + 180);
    }
    if (e4 > 90) {
        return e4 - 180;
    }
    if (e4 < -90) {
        return e4 + 180;
    }
    return e4;
}

function C4(x, e) {
    return Math.pow(x, e);
}

function lc(x, y) {
    return Math.atan2(y, x);
}

function Id(x) {
    return Math.sin(x);
}

function Hd(x) {
    return Math.cos(x);
}

function kc(x) {
    return Math.acos(x);
}

function i4(x) {
    return Math.sqrt(x);
}
