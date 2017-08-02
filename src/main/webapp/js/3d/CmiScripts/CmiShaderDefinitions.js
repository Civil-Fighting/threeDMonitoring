/*
 * Copyright CADMAI Software GmbH.
 * All rights reserved.
 *
 * Redistribution (includes making available on a web location) is permitted 
 * provided that the following conditions are met:
 *
 * The redistributor must hold one of these licenses:
 * a valid CADMAI WebGl-Publisher license (SingleWebGlPubLic)
 * a valid CADMAI WebGl-Publisher Revit export license (SingleWebGlRevitExportLic)
 * a valid CADMAI WebGl-Publisher Inventor export license (SingleWebGlInventorExportLic)
 * or a written permission of CADMAI Software GmbH 
 *
 * The redistributor / user does not have the right to change, translate,
 * back-develop, decompile or disassemble the software.
 * 
 * Redistributions must retain the above copyright notice, 
 * this list of conditions and the following disclaimer.
 *   
 * Neither the name of CADMAI Software GmbH nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
"\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";

function oO(h, NZ, w_) {
    var A = h.createProgram();
    if (!A) {
        throw new BJ("\x63\x6d\x69\x43\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
        return null;
    }
    var n_ = h.createShader(h.VERTEX_SHADER);
    if (!n_) {
        throw new BJ("\x63\x6d\x69\x43\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x76\x65\x72\x74\x65\x78\x20\x73\x68\x61\x64\x65\x72", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
        return null;
    }
    h.shaderSource(n_, NZ);
    h.compileShader(n_);
    if (!h.getShaderParameter(n_, h.COMPILE_STATUS)) {
        var V7 = h.getShaderInfoLog(n_);
        throw new BJ("\x63\x6d\x69\x43\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72", "\x43\x6f\x6d\x70\x69\x6c\x65\x20\x45\x72\x72\x6f\x72\x20\x56\x65\x72\x74\x65\x78\x20\x53\x68\x61\x64\x65\x72\x3a\x20" + V7, "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
        return null;
    }
    h.attachShader(A, n_);
    var Jx = h.createShader(h.FRAGMENT_SHADER);
    if (!Jx) {
        throw new BJ("\x63\x6d\x69\x43\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x66\x72\x61\x67\x6d\x65\x6e\x74\x20\x73\x68\x61\x64\x65\x72", "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
        return null;
    }
    h.shaderSource(Jx, w_);
    h.compileShader(Jx);
    if (!h.getShaderParameter(Jx, h.COMPILE_STATUS)) {
        var V7 = h.getShaderInfoLog(Jx);
        throw new BJ("\x63\x6d\x69\x43\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72", "\x43\x6f\x6d\x70\x69\x6c\x65\x20\x45\x72\x72\x6f\x72\x20\x46\x72\x61\x67\x6d\x65\x6e\x74\x20\x53\x68\x61\x64\x65\x72\x3a\x20" + V7, "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
        return null;
    }
    h.attachShader(A, Jx);
    h.linkProgram(A);
    if (!h.getProgramParameter(A, h.LINK_STATUS)) {
        var V7 = h.getProgramInfoLog(A);
        throw new BJ("\x63\x6d\x69\x43\x72\x65\x61\x74\x65\x53\x68\x61\x64\x65\x72", "\x4c\x69\x6e\x6b\x20\x45\x72\x72\x6f\x72\x20\x53\x68\x61\x64\x65\x72\x3a\x20" + V7, "\x4f\x70\x65\x6e\x47\x4c\x5f\x45\x52\x52\x4f\x52");
        return null;
    }
    return A;
};
var w6 = function() {
    this.usable = false;
    this.A = null;
    this.zx = "\x6e\x6f\x6e\x65";
    this.v = null;
    this.gV = false;
    this.Co = 1;
    this.Yw = null;
    this.RD = false;
    this.Vx = false;
};
var FE = function(B) {
    var Nn = hq;
    var OE = j7;
    var H = B.f7();
    this.o = null;
    var t = null;
    var vc = null;
    var Bq = null;
    this.zx = "\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(z7, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x6e\x43\x6f\x6c\x6f\x72\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            H.disable(H.BLEND);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniform4f(Bq, z7[0], z7[1], z7[2], z7[3]);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
FE.prototype = new w6();
var r3 = function(B) {
    var Nn = Z8;
    var OE = Ir;
    var H = B.f7();
    var yq = null;
    this.o = null;
    var Li = null;
    var iM = null;
    var K2 = null;
    var yq = null;
    var yM = 1.0;
    var qW = 1.0;
    this.zx = "\x42\x67\x49\x6d\x61\x67\x65";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Yh = function(X8) {
        if (X8.loaded) {
            yq = X8;
            return 0;
        } else return -1;
    };
    this.xp = function() {
        return yq;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x42\x67\x49\x6d\x61\x67\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        yq = this.v.fY();
        if (yq == null) {
            this.v.s("\x43\x6d\x69\x42\x67\x49\x6d\x61\x67\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (yq.XY) {
            this.v.s("\x43\x6d\x69\x42\x67\x49\x6d\x61\x67\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                iM = H.getUniformLocation(this.A, "\x75\x58\x53\x63\x61\x6c\x65");
                K2 = H.getUniformLocation(this.A, "\x75\x59\x53\x63\x61\x6c\x65");
                Li = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x42\x67\x49\x6d\x61\x67\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x42\x67\x49\x6d\x61\x67\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x42\x67\x49\x6d\x61\x67\x65\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            if (this.v.qg() == false) {
                yM = 1.0;
                qW = 1.0;
            } else {
                if (this.v.qP() > yq.xE) {
                    yM = 1.0;
                    qW = yq.xE / this.v.qP();
                } else {
                    yM = this.v.qP() / yq.xE;
                    qW = 1.0;
                };
            }
            H.useProgram(this.A);
            H.disable(H.BLEND);
            H.enableVertexAttribArray(this.o);
            H.uniform1f(iM, yM);
            H.uniform1f(K2, qW);
            H.uniform1i(Li, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, yq.PL);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
r3.prototype = new w6();
var N0 = function(B) {
    var Nn = k5;
    var OE = R7;
    var H = B.f7();
    var ib = null;
    this.o = null;
    var t = null;
    var vc = null;
    var ou = null;
    var ib = null;
    var a2 = null;
    this.zx = "\x53\x6b\x79\x42\x6f\x78";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Yh = function(X8) {
        if (X8.loaded) {
            ib = X8;
            return 0;
        } else return -1;
    };
    this.xp = function() {
        return ib;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x53\x6b\x79\x42\x6f\x78\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        ib = this.v.WT();
        if (ib == null) {
            this.v.s("\x43\x6d\x69\x53\x6b\x79\x42\x6f\x78\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (ib.XY) {
            this.v.s("\x43\x6d\x69\x53\x6b\x79\x42\x6f\x78\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                ou = H.getUniformLocation(this.A, "\x75\x53\x6b\x79\x42\x6f\x78");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x53\x6b\x79\x42\x6f\x78\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x53\x6b\x79\x42\x6f\x78\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x53\x6b\x79\x42\x6f\x78\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            H.disable(H.BLEND);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniform1i(ou, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_CUBE_MAP, ib.PL);
            H.uniform1f(a2, this.v.bQ);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_CUBE_MAP, null);
        H.useProgram(null);
        return 0;
    };
};
N0.prototype = new w6();
var AU = function(B) {
    var Nn = kX;
    var OE = kC;
    var H = B.f7();
    this.o = null;
    var t = null;
    var vc = null;
    var Bq = null;
    var bh = null;
    this.zx = "\x50\x6f\x69\x6e\x74";
    this.v = B;
    this.Yw = H.POINTS;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x6f\x69\x6e\x74\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                bh = H.getUniformLocation(this.A, "\x75\x50\x6f\x69\x6e\x74\x53\x69\x7a\x65");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x50\x6f\x69\x6e\x74\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x50\x6f\x69\x6e\x74\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(z7, IA, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x6f\x69\x6e\x74\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            H.disable(H.BLEND);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniform4f(Bq, z7[0], z7[1], z7[2], z7[3]);
            H.uniform1f(bh, IA);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
AU.prototype = new w6();
var dD = function(B) {
    var Nn = IX;
    var OE = nP;
    var H = B.f7();
    this.o = null;
    var t = null;
    var vc = null;
    var Bq = null;
    var _o = null;
    var Vv = null;
    this.zx = "\x4c\x69\x6e\x65";
    this.v = B;
    this.Yw = H.LINES;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                _o = H.getUniformLocation(this.A, "\x75\x4c\x69\x6e\x65\x53\x74\x79\x6c\x65");
                Vv = H.getUniformLocation(this.A, "\x75\x55\x6e\x69\x74\x4c\x65\x6e\x67\x74\x68");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(z7, La, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4c\x69\x6e\x65\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            H.disable(H.BLEND);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniform4f(Bq, z7[0], z7[1], z7[2], z7[3]);
            H.uniform1i(_o, La);
            H.uniform1f(Vv, this.v.ZT);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
dD.prototype = new w6();
var ns = function(B) {
    var Nn = Iv;
    var OE = zy;
    var H = B.f7();
    this.o = null;
    this.tV = null;
    this.zH = null;
    var g = null;
    var K0 = null;
    var MI = null;
    this.zx = "\x54\x65\x78\x74";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                g = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                K0 = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                MI = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(z7, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            H.enable(H.BLEND);
            H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.uniformMatrix4fv(K0, false, this.v.vN());
            H.uniformMatrix4fv(g, false, this.v.Yy());
            H.uniform4f(MI, z7[0], z7[1], z7[2], 1.0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.useProgram(null);
        return 0;
    };
};
ns.prototype = new w6();
var KE = function(B) {
    var Nn = V2;
    var OE = sC;
    var H = B.f7();
    var w = null;
    var LX = B.getLight1Pos();
    this.Z = null;
    this.o = null;
    var t = null;
    var lH = null;
    var vc = null;
    var lJ = null;
    var iI = null;
    var Ft = null;
    var Bq = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var ca = new Array(B.ambientColIni[0], B.ambientColIni[1], B.ambientColIni[2]);
    var tS = new Array(B.light1ColIni[0], B.light1ColIni[1], B.light1ColIni[2]);
    this.zx = "\x43\x6f\x6c\x6f\x72\x33\x44";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.lv = function(newValue) {
        if ((newValue) && (newValue.length >= 3)) {
            ca[0] = newValue[0];
            ca[1] = newValue[1];
            ca[2] = newValue[2];
            return 0;
        }
        return -1;
    };
    this.kW = function(newValue) {
        if ((newValue) && (newValue.length >= 3)) {
            tS[0] = newValue[0];
            tS[1] = newValue[1];
            tS[2] = newValue[2];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                lJ = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x43\x6f\x6c\x6f\x72");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Ft = H.getUniformLocation(this.A, "\x75\x44\x69\x72\x65\x63\x74\x69\x6f\x6e\x61\x6c\x43\x6f\x6c\x6f\x72");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(lJ, ca[0], ca[1], ca[2]);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform3f(Ft, tS[0], tS[1], tS[2]);
            H.uniform4f(Bq, w[0], w[1], w[2], w[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            H.uniform1i(jA, this.v.Is);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
KE.prototype = new w6();
var di = function(B) {
    var Nn = tp;
    var OE = WK;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iI = null;
    var ou = null;
    var Bq = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var ib = null;
    var Aa = null;
    var Wg = null;
    var UJ = null;
    var lc = null;
    var ym = null;
    var ld = null;
    var rD = 0.8;
    var yu = 0.0;
    var Dz = -0.1;
    var LD = 0.10;
    var p4 = 1.1;
    var tN = 0.1;
    this.zx = "\x50\x6c\x61\x73\x74\x69\x63";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this._I = function(newValue) {
        if (newValue) {
            rD = newValue;
            return 0;
        }
        return -1;
    };
    this.TV = function(newValue) {
        if (newValue) {
            yu = newValue;
            return 0;
        }
        return -1;
    };
    this.lh = function(newValue) {
        if (newValue) {
            Dz = newValue;
            return 0;
        }
        return -1;
    };
    this.zp = function(newValue) {
        if (newValue) {
            LD = newValue;
            return 0;
        }
        return -1;
    };
    this.IR = function(newValue) {
        if (newValue) {
            p4 = newValue;
            return 0;
        }
        return -1;
    };
    this.oq = function(newValue) {
        if (newValue) {
            tN = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x45\x6e\x76\x4d\x61\x70\x70\x65\x64\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        ib = this.v.WT();
        if (ib == null) {
            this.v.s("\x43\x6d\x69\x45\x6e\x76\x4d\x61\x70\x70\x65\x64\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (ib.XY) {
            this.v.s("\x43\x6d\x69\x45\x6e\x76\x4d\x61\x70\x70\x65\x64\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                ou = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x4d\x61\x70");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                Aa = H.getUniformLocation(this.A, "\x75\x41\x74\x74\x65\x6e\x75\x61\x74\x69\x6f\x6e");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                UJ = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x56\x61\x6c");
                lc = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x46\x61\x63\x74\x6f\x72");
                ym = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x56\x61\x6c");
                ld = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x56\x61\x6c");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x45\x6e\x76\x4d\x61\x70\x70\x65\x64\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x45\x6e\x76\x4d\x61\x70\x70\x65\x64\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x45\x6e\x76\x4d\x61\x70\x70\x65\x64\x43\x6f\x6c\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(ou, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_CUBE_MAP, ib.PL);
            H.uniform4f(Bq, w[0], w[1], w[2], w[3]);
            H.uniform1f(Aa, rD);
            H.uniform1f(Wg, yu);
            H.uniform1f(UJ, Dz);
            H.uniform1f(lc, LD);
            H.uniform1f(ym, p4);
            H.uniform1f(ld, tN);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_CUBE_MAP, null);
        H.useProgram(null);
        return 0;
    };
};
di.prototype = new w6();
var iQ = function(B) {
    var Nn = G4;
    var OE = qe;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iI = null;
    var Li = null;
    var hf = null;
    var Aa = null;
    var Wg = null;
    var UJ = null;
    var ym = null;
    var ld = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var DR = null;
    var WD = 0.1;
    var rD = 0.7;
    var yu = 3.0;
    var Dz = 0.5;
    var p4 = 1.0;
    var tN = 0.0;
    this.zx = "\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this._I = function(newValue) {
        if (newValue) {
            rD = newValue;
            return 0;
        }
        return -1;
    };
    this.TV = function(newValue) {
        if (newValue) {
            yu = newValue;
            return 0;
        }
        return -1;
    };
    this.lh = function(newValue) {
        if (newValue) {
            Dz = newValue;
            return 0;
        }
        return -1;
    };
    this.IR = function(newValue) {
        if (newValue) {
            p4 = newValue;
            return 0;
        }
        return -1;
    };
    this.oq = function(newValue) {
        if (newValue) {
            tN = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        var Ye = this.v.PN();
        switch (eh) {
            case "\x4d\x61\x74\x74\x4d\x65\x74\x61\x6c":
                WD = 0.1;
                rD = 0.7;
                yu = 3.0;
                Dz = 0.5;
                p4 = 1.0;
                tN = 0.0;
                DR = this.v.WQ(Ye + "\x2f\x6d\x65\x74\x61\x6c\x32\x2e\x6a\x70\x67");
                this.zx = "\x4d\x61\x74\x74\x4d\x65\x74\x61\x6c";
                break;
            case "\x43\x61\x73\x74\x65\x64\x4d\x65\x74\x61\x6c":
                WD = 1.0;
                rD = 1.2;
                yu = 0.0;
                Dz = 0.0;
                p4 = 1.0;
                tN = 0.0;
                DR = this.v.WQ(Ye + "\x2f\x6d\x65\x74\x61\x6c\x31\x2e\x6a\x70\x67");
                this.zx = "\x43\x61\x73\x74\x65\x64\x4d\x65\x74\x61\x6c";
                break;
            case "\x46\x69\x72\x57\x6f\x6f\x64":
                WD = 2.0;
                rD = 2.0;
                yu = 0.0;
                Dz = 0.0;
                p4 = 0.4;
                tN = 0.05;
                DR = this.v.WQ(Ye + "\x2f\x77\x6f\x6f\x64\x31\x30\x2e\x6a\x70\x67");
                this.zx = "\x46\x69\x72\x57\x6f\x6f\x64";
                break;
        };
        if (DR == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (DR.XY) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Li = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                Aa = H.getUniformLocation(this.A, "\x75\x41\x74\x74\x65\x6e\x75\x61\x74\x69\x6f\x6e");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                UJ = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x56\x61\x6c");
                ym = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x56\x61\x6c");
                ld = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x56\x61\x6c");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Li, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, DR.PL);
            H.uniform1f(hf, WD);
            H.uniform1f(Aa, rD);
            H.uniform1f(Wg, yu);
            H.uniform1f(UJ, Dz);
            H.uniform1f(ym, p4);
            H.uniform1f(ld, tN);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
iQ.prototype = new w6();
var CmiTexture3DShader = function(B) {
    var Nn = ut;
    var OE = sz;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iI = null;
    var Li = null;
    var Bq = null;
    var hf = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var WD = 1.0;
    this.zx = "\x54\x65\x78\x74\x75\x72\x65\x33\x44";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Li = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            if (K.Oj) {
                if (K.Oj._t != undefined) {
                    WD = parseFloat(K.Oj._t);
                } else {
                    WD = 1.0;
                };
            }
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Li, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, K.Qb().PL);
            H.uniform1f(hf, WD);
            H.uniform4f(Bq, w[0], w[1], w[2], w[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
CmiTexture3DShader.prototype = new w6();
var SY = function(B) {
    var Nn = ac;
    var OE = g2;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iI = null;
    var DP = null;
    var Li = null;
    var ou = null;
    var hf = null;
    var Aa = null;
    var Wg = null;
    var UJ = null;
    var lc = null;
    var ym = null;
    var ld = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var DR = null;
    var ib = null;
    var WD = 3.0;
    var rD = 1.7;
    var yu = 25.0;
    var Dz = 0.35;
    var LD = 0.08;
    var p4 = 0.82;
    var tN = 0.0;
    this.zx = "\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x45\x6e\x76\x4d\x61\x70\x70\x65\x64";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this._I = function(newValue) {
        if (newValue) {
            rD = newValue;
            return 0;
        }
        return -1;
    };
    this.TV = function(newValue) {
        if (newValue) {
            yu = newValue;
            return 0;
        }
        return -1;
    };
    this.lh = function(newValue) {
        if (newValue) {
            Dz = newValue;
            return 0;
        }
        return -1;
    };
    this.zp = function(newValue) {
        if (newValue) {
            LD = newValue;
            return 0;
        }
        return -1;
    };
    this.IR = function(newValue) {
        if (newValue) {
            p4 = newValue;
            return 0;
        }
        return -1;
    };
    this.oq = function(newValue) {
        if (newValue) {
            tN = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        var Ye = this.v.PN();
        switch (eh) {
            case "\x42\x75\x72\x6c\x57\x6f\x6f\x64":
                WD = 3.0;
                rD = 1.7;
                yu = 25.0;
                Dz = 0.35;
                p4 = 0.82;
                tN = 0.0;
                LD = 0.08;
                DR = this.v.WQ(Ye + "\x2f\x77\x6f\x6f\x64\x34\x2e\x6a\x70\x67");
                this.zx = "\x42\x75\x72\x6c\x57\x6f\x6f\x64";
                break;
            case "\x47\x6c\x6f\x73\x73\x79\x4d\x65\x74\x61\x6c":
                WD = 4.0;
                rD = 0.5;
                yu = 7.0;
                Dz = 0.8;
                p4 = 1.3;
                tN = 0.0;
                LD = 0.05;
                DR = this.v.WQ(Ye + "\x2f\x6d\x65\x74\x61\x6c\x37\x2e\x6a\x70\x67");
                this.zx = "\x47\x6c\x6f\x73\x73\x79\x4d\x65\x74\x61\x6c";
                break;
            case "\x50\x6f\x6c\x69\x73\x68\x65\x64\x47\x72\x61\x79\x53\x74\x6f\x6e\x65":
                WD = 4.0;
                rD = 1.2;
                yu = 25.0;
                Dz = 0.35;
                p4 = 0.85;
                tN = 0.0;
                LD = 0.08;
                DR = this.v.WQ(Ye + "\x2f\x73\x74\x6f\x6e\x65\x38\x2e\x6a\x70\x67");
                this.zx = "\x50\x6f\x6c\x69\x73\x68\x65\x64\x47\x72\x61\x79\x53\x74\x6f\x6e\x65";
                break;
            case "\x50\x6f\x6c\x69\x73\x68\x65\x64\x4d\x61\x72\x62\x6c\x65":
                WD = 4.0;
                rD = 1.2;
                yu = 25.0;
                Dz = 0.35;
                p4 = 0.85;
                tN = 0.0;
                LD = 0.08;
                DR = this.v.WQ(Ye + "\x2f\x73\x74\x6f\x6e\x65\x37\x2e\x6a\x70\x67");
                this.zx = "\x50\x6f\x6c\x69\x73\x68\x65\x64\x4d\x61\x72\x62\x6c\x65";
                break;
            case "\x50\x6f\x6c\x69\x73\x68\x65\x64\x4d\x65\x74\x61\x6c":
                WD = 4.0;
                rD = 0.45;
                yu = 10.0;
                Dz = 0.8;
                p4 = 1.0;
                tN = 0.0;
                LD = 0.7;
                DR = this.v.WQ(Ye + "\x2f\x6d\x65\x74\x61\x6c\x37\x2e\x6a\x70\x67");
                this.zx = "\x50\x6f\x6c\x69\x73\x68\x65\x64\x4d\x65\x74\x61\x6c";
                break;
            case "\x50\x6f\x6c\x69\x73\x68\x65\x64\x59\x65\x6c\x6c\x6f\x77\x53\x74\x6f\x6e\x65":
                WD = 4.0;
                rD = 1.2;
                yu = 25.0;
                Dz = 0.35;
                p4 = 0.85;
                tN = 0.0;
                LD = 0.08;
                DR = this.v.WQ(Ye + "\x2f\x73\x74\x6f\x6e\x65\x39\x2e\x6a\x70\x67");
                this.zx = "\x50\x6f\x6c\x69\x73\x68\x65\x64\x59\x65\x6c\x6c\x6f\x77\x53\x74\x6f\x6e\x65";
                break;
            case "\x57\x61\x6c\x6e\x75\x74\x57\x6f\x6f\x64":
                WD = 3.0;
                rD = 1.7;
                yu = 25.0;
                Dz = 0.35;
                p4 = 0.82;
                tN = 0.0;
                LD = 0.08;
                DR = this.v.WQ(Ye + "\x2f\x77\x6f\x6f\x64\x32\x2e\x6a\x70\x67");
                this.zx = "\x57\x61\x6c\x6e\x75\x74\x57\x6f\x6f\x64";
                break;
        };
        if (DR == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (DR.XY) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        ib = this.v.WT();
        if (ib == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (ib.XY) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Li = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65");
                ou = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x4d\x61\x70");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                Aa = H.getUniformLocation(this.A, "\x75\x41\x74\x74\x65\x6e\x75\x61\x74\x69\x6f\x6e");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                UJ = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x56\x61\x6c");
                lc = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x46\x61\x63\x74\x6f\x72");
                ym = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x56\x61\x6c");
                ld = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x56\x61\x6c");
                DP = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65\x56\x61\x6c");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x65\x72\x50\x69\x78\x65\x6c\x49\x6c\x6c\x75\x33\x44\x45\x6e\x76\x4d\x61\x70\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Li, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, DR.PL);
            H.uniform1i(ou, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_CUBE_MAP, ib.PL);
            H.uniform1f(hf, WD);
            H.uniform1f(Aa, rD);
            H.uniform1f(Wg, yu);
            H.uniform1f(UJ, Dz);
            H.uniform1f(lc, LD);
            H.uniform1f(ym, p4);
            H.uniform1f(ld, tN);
            H.uniform1f(DP, 10.0);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_CUBE_MAP, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
SY.prototype = new w6();
var lg = function(B) {
    var Nn = t0;
    var OE = er;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var XK = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var ou = null;
    var ib = null;
    this.zx = "\x43\x68\x72\x6f\x6d\x61\x74\x69\x63\x41\x62\x65\x72\x72\x61\x74\x69\x6f\x6e";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x43\x68\x72\x6f\x6d\x41\x62\x62\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        ib = this.v.WQ("\x53\x6e\x6f\x77");
        if (ib == null) {
            this.v.s("\x43\x6d\x69\x43\x68\x72\x6f\x6d\x41\x62\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (ib.XY) {
            this.v.s("\x43\x6d\x69\x43\x68\x72\x6f\x6d\x41\x62\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                XK = H.getUniformLocation(this.A, "\x75\x56\x69\x65\x77\x50\x6f\x73");
                ou = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x4d\x61\x70");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x43\x68\x72\x6f\x6d\x41\x62\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x43\x68\x72\x6f\x6d\x41\x62\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x43\x68\x72\x6f\x6d\x41\x62\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform3f(XK, 0.0, 0.0, 0.0);
            H.uniform1i(ou, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_CUBE_MAP, ib.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_CUBE_MAP, null);
        H.useProgram(null);
        return 0;
    };
};
lg.prototype = new w6();
var aL = function(B) {
    var Nn = Qc;
    var OE = Ln;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var XK = null;
    var Bq = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var oK = null;
    var ou = null;
    var Dy = null;
    var z4 = null;
    var fQ = null;
    var EU = null;
    var ib = null;
    var sJ = 0.1;
    var Rr = 0.3;
    var FA = 0.3;
    this.zx = "\x47\x6c\x61\x73\x73";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.Hx = function(newValue) {
        if (newValue) {
            sJ = newValue;
            return 0;
        }
        return -1;
    };
    this._5 = function(newValue) {
        if (newValue) {
            Rr = newValue;
            return 0;
        }
        return -1;
    };
    this.Wl = function(newValue) {
        if (newValue) {
            FA = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        EU = this.v.WQ("\x52\x61\x69\x6e\x62\x6f\x77");
        if (EU == null) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (EU.XY) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        ib = this.v.WT();
        if (ib == null) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (ib.XY) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                XK = H.getUniformLocation(this.A, "\x75\x56\x69\x65\x77\x50\x6f\x73");
                oK = H.getUniformLocation(this.A, "\x75\x52\x61\x69\x6e\x62\x6f\x77");
                ou = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x4d\x61\x70");
                Dy = H.getUniformLocation(this.A, "\x75\x52\x61\x69\x6e\x62\x6f\x77\x46\x61\x63\x74\x6f\x72");
                z4 = H.getUniformLocation(this.A, "\x75\x4d\x69\x72\x72\x6f\x72\x46\x61\x63\x74\x6f\x72");
                fQ = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72\x46\x61\x63\x74\x6f\x72");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x6c\x61\x73\x73\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            H.enable(H.BLEND);
            H.blendFunc(H.DST_COLOR, H.ONE_MINUS_SRC_ALPHA);
            H.blendFunc(H.SRC_COLOR, H.SRC_ALPHA);
            H.enable(H.CULL_FACE);
            H.cullFace(H.BACK);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            H.uniform3f(XK, 0.0, 0.0, 0.0);
            H.uniform1i(oK, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, EU.PL);
            H.uniform1i(ou, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_CUBE_MAP, ib.PL);
            H.uniform1f(Dy, sJ);
            H.uniform1f(z4, Rr);
            H.uniform1f(fQ, FA);
            H.uniform4f(Bq, w[0], w[1], w[2], w[3]);
            H.uniform1f(a2, this.v.bQ);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disable(H.CULL_FACE);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_CUBE_MAP, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
aL.prototype = new w6();
var tE = function(B) {
    var Nn = C2;
    var OE = YP;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var lH = null;
    var iL = null;
    var iI = null;
    var du = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var ZP = null;
    var iT = null;
    var RN = null;
    var Su = null;
    var Zq = null;
    var cK = null;
    var Ys = null;
    var uQ = null;
    var tN = new Array(0.13, 0.16, 0.13, 1.0);
    var Sv = 0.12;
    var Ok = new Array(-1.5, -20.0, 26.0, 1.0);
    var IS = new Array(1.0, 1.0, 1.0, 1.0);
    var Zd = null;
    var Ga = null;
    var KB = new Array(0.93, 0.94, 1.0, 1.0);
    var v2 = new Array(0.23, 0.25, 0.20, 1.0);
    this.zx = "\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Vx = true;
    this.Az = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            tN[0] = newValue[0];
            tN[1] = newValue[1];
            tN[2] = newValue[2];
            tN[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.xX = function(newValue) {
        if (newValue) {
            Sv = newValue;
            return 0;
        }
        return -1;
    };
    this.CY = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            KB[0] = newValue[0];
            KB[1] = newValue[1];
            KB[2] = newValue[2];
            KB[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.RC = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            v2[0] = newValue[0];
            v2[1] = newValue[1];
            v2[2] = newValue[2];
            v2[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        Zd = this.v.WQ("\x41\x6e\x69\x73\x6f\x53\x74\x72\x61\x6e\x64");
        if (Zd == null) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (Zd.XY) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        Ga = this.v.WQ("\x52\x69\x6e\x67\x47\x72\x61\x64\x69\x65\x6e\x74");
        if (Ga == null) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (Ga.XY) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                ZP = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74");
                iT = H.getUniformLocation(this.A, "\x75\x46\x6c\x41\x6d\x62\x69\x65\x6e\x74");
                RN = H.getUniformLocation(this.A, "\x75\x52\x69\x6e\x67\x43\x65\x6e\x74\x65\x72");
                Su = H.getUniformLocation(this.A, "\x75\x52\x69\x6e\x67\x53\x63\x61\x6c\x65");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Zq = H.getUniformLocation(this.A, "\x75\x53\x74\x72\x61\x6e\x64");
                cK = H.getUniformLocation(this.A, "\x75\x52\x69\x6e\x67\x47\x72\x61\x64\x69\x65\x6e\x74");
                du = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x43\x6f\x6c\x6f\x72");
                Ys = H.getUniformLocation(this.A, "\x75\x52\x69\x6e\x67\x43\x6f\x6c\x6f\x72");
                uQ = H.getUniformLocation(this.A, "\x75\x52\x69\x6e\x67\x41\x6d\x62\x69\x65\x6e\x74\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x42\x72\x75\x73\x68\x65\x64\x4d\x65\x74\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform4f(ZP, tN[0], tN[1], tN[2], tN[3]);
            H.uniform1f(iT, Sv);
            H.uniform4f(RN, Ok[0], Ok[1], Ok[2], Ok[3]);
            H.uniform4f(Su, IS[0], IS[1], IS[2], IS[3]);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Zq, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, Zd.PL);
            H.uniform1i(cK, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, Ga.PL);
            H.uniform4f(du, w[0], w[1], w[2], w[3]);
            H.uniform4f(Ys, KB[0], KB[1], KB[2], KB[3]);
            H.uniform4f(uQ, v2[0], v2[1], v2[2], v2[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
tE.prototype = new w6();
var Gw = function(B) {
    var Nn = Tv;
    var OE = El;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var Rl = null;
    var iI = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var Dv = null;
    var ip = null;
    var Er = null;
    var zT = null;
    var sp = null;
    var u4 = null;
    var tF = null;
    var du = null;
    var bp = null;
    var AX = new Array(0.8, 0.8, 0.8, 1.0);
    var yk = new Array(0.13, 0.13, 0.13, 1.0);
    var eU = 0.1;
    var ph = 20.5;
    var eI = 0.1;
    var BM = new Array(0.5, 0.5, 0.5, 1.0);
    var wU = new Array(0.23, 0.23, 0.23, 1.0);
    var L5 = new Array(1.0, 1.0, 1.0, 1.0);
    var A3 = new Array(0.43, 0.41, 0.41, 1.0);
    this.zx = "\x56\x65\x6c\x76\x65\x74";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.n6 = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            AX[0] = newValue[0];
            AX[1] = newValue[1];
            AX[2] = newValue[2];
            AX[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.G1 = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            yk[0] = newValue[0];
            yk[1] = newValue[1];
            yk[2] = newValue[2];
            yk[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.el = function(newValue) {
        if (newValue) {
            eU = newValue;
            return 0;
        }
        return -1;
    };
    this.Rt = function(newValue) {
        if (newValue) {
            ph = newValue;
            return 0;
        }
        return -1;
    };
    this.v0 = function(newValue) {
        if (newValue) {
            eI = newValue;
            return 0;
        }
        return -1;
    };
    this.Cr = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            BM[0] = newValue[0];
            BM[1] = newValue[1];
            BM[2] = newValue[2];
            BM[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Mx = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            wU[0] = newValue[0];
            wU[1] = newValue[1];
            wU[2] = newValue[2];
            wU[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.tm = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            L5[0] = newValue[0];
            L5[1] = newValue[1];
            L5[2] = newValue[2];
            L5[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.UH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            A3[0] = newValue[0];
            A3[1] = newValue[1];
            A3[2] = newValue[2];
            A3[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x56\x65\x6c\x76\x65\x74\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                Rl = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                Dv = H.getUniformLocation(this.A, "\x75\x53\x68\x65\x65\x6e");
                ip = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x79");
                Er = H.getUniformLocation(this.A, "\x75\x52\x6f\x75\x67\x68\x6e\x65\x73\x73");
                zT = H.getUniformLocation(this.A, "\x75\x45\x64\x67\x69\x6e\x65\x73\x73");
                sp = H.getUniformLocation(this.A, "\x75\x42\x61\x63\x6b\x73\x63\x61\x74\x74\x65\x72");
                u4 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x41\x6d\x62\x69\x65\x6e\x74");
                tF = H.getUniformLocation(this.A, "\x75\x4b\x61");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                du = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x43\x6f\x6c\x6f\x72");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x56\x65\x6c\x76\x65\x74\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x56\x65\x6c\x76\x65\x74\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x56\x65\x6c\x76\x65\x74\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform4f(Rl, w[0], w[1], w[2], w[3]);
            H.uniform4f(Dv, AX[0], AX[1], AX[2], AX[3]);
            H.uniform4f(ip, yk[0], yk[1], yk[2], yk[3]);
            H.uniform1f(Er, eU);
            H.uniform1f(zT, ph);
            H.uniform1f(sp, eI);
            H.uniform4f(u4, BM[0], BM[1], BM[2], BM[3]);
            H.uniform4f(tF, wU[0], wU[1], wU[2], wU[3]);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform4f(du, L5[0], L5[1], L5[2], L5[3]);
            H.uniform4f(bp, A3[0], A3[1], A3[2], A3[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
Gw.prototype = new w6();
var q6 = function(B) {
    var Nn = vg;
    var OE = L4;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var pW = null;
    var cE = 2.2;
    this.zx = "\x4e\x6f\x72\x6d\x61\x6c\x73";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.LN = function(newValue) {
        if (newValue) {
            cE = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x45\x79\x65\x4e\x6f\x72\x6d\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                pW = H.getUniformLocation(this.A, "\x75\x47\x61\x6d\x6d\x61");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x45\x79\x65\x4e\x6f\x72\x6d\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x45\x79\x65\x4e\x6f\x72\x6d\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x45\x79\x65\x4e\x6f\x72\x6d\x61\x6c\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(pW, cE);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
q6.prototype = new w6();
var h6 = function(B) {
    var Nn = LF;
    var OE = eP;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    var t = null;
    var vc = null;
    var iL = null;
    var iI = null;
    var SG = null;
    var cn = null;
    var p2 = null;
    var eF = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var BP = null;
    var U1 = null;
    var BX = null;
    var fX = null;
    var tU = null;
    var vZ = null;
    var KV = null;
    var hf = null;
    var Wd = 0.023;
    var Lb = 2.0;
    var LO = 0.325;
    var sL = 0.46;
    var vH = 1.5;
    var Pu = new Array(0.0, 0.0, 0.0, 1.0);
    var vb = new Array(0.8, 0.8, 0.8, 1.0);
    var WD = 1.5;
    this.zx = "\x52\x75\x73\x74\x79";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.setScale = function(newValue) {
        if (newValue) {
            Wd = newValue;
            return 0;
        }
        return -1;
    };
    this.DN = function(newValue) {
        if (newValue) {
            Lb = newValue;
            return 0;
        }
        return -1;
    };
    this.B2 = function(newValue) {
        if (newValue) {
            LO = newValue;
            return 0;
        }
        return -1;
    };
    this.Ai = function(newValue) {
        if (newValue) {
            sL = newValue;
            return 0;
        }
        return -1;
    };
    this.yn = function(newValue) {
        if (newValue) {
            vH = newValue;
            return 0;
        }
        return -1;
    };
    this.K8 = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            Pu[0] = newValue[0];
            Pu[1] = newValue[1];
            Pu[2] = newValue[2];
            Pu[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.vX = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            vb[0] = newValue[0];
            vb[1] = newValue[1];
            vb[2] = newValue[2];
            vb[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Kh = function(newValue) {
        if (newValue) {
            WD = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        var Ye = this.v.PN();
        p2 = this.v.WQ(Ye + "\x2f\x72\x75\x73\x74\x79\x2e\x6a\x70\x67");
        if (p2 == null) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (p2.XY) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        eF = this.v.WQ("\x4e\x6f\x69\x73\x65\x32\x44");
        if (eF == null) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (eF.XY) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                BP = H.getUniformLocation(this.A, "\x75\x53\x63\x61\x6c\x65");
                U1 = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x49\x6e\x74\x65\x6e\x73\x69\x74\x79\x46\x61\x63\x74\x6f\x72");
                SG = H.getUniformLocation(this.A, "\x75\x52\x75\x73\x74\x79");
                cn = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x32\x64");
                BX = H.getUniformLocation(this.A, "\x75\x45\x72\x6f\x73\x69\x6f\x6e\x46\x61\x63\x74\x6f\x72");
                fX = H.getUniformLocation(this.A, "\x75\x49\x6e\x74\x46\x61\x63\x74\x6f\x72\x31");
                tU = H.getUniformLocation(this.A, "\x75\x49\x6e\x74\x46\x61\x63\x74\x6f\x72\x32");
                vZ = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72\x31");
                KV = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72\x32");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x52\x75\x73\x74\x79\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1f(BP, Wd);
            H.uniform1f(U1, Lb);
            H.uniform1i(SG, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, p2.PL);
            H.uniform1i(cn, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, eF.PL);
            H.uniform1f(BX, LO);
            H.uniform1f(fX, sL);
            H.uniform1f(tU, vH);
            H.uniform4f(vZ, Pu[0], Pu[1], Pu[2], Pu[3]);
            H.uniform4f(KV, vb[0], vb[1], vb[2], vb[3]);
            H.uniform1f(hf, WD);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
h6.prototype = new w6();
var v5 = function(B) {
    var Nn = Ty;
    var OE = wu;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    var t = null;
    var vc = null;
    var iL = null;
    var iI = null;
    var du = null;
    var I2 = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var Wo = null;
    var UY = null;
    var ZP = null;
    var bp = null;
    var BP = null;
    var Vp = null;
    var _N = new Array(0.0, 0.0, 5.0);
    var Dz = new Array(0.2, 0.2, 0.2, 1.0);
    var tN = new Array(0.2, 0.2, 0.2, 1.0);
    var A3 = 0.8;
    var Wd = 10.0;
    var pr = 0.1;
    this.zx = "\x4c\x61\x74\x74\x69\x63\x65";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.Qt = function(newValue) {
        if ((newValue) && (newValue.length == 3)) {
            _N[0] = newValue[0];
            _N[1] = newValue[1];
            _N[2] = newValue[2];
            return 0;
        }
        return -1;
    };
    this.bX = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            Dz[0] = newValue[0];
            Dz[1] = newValue[1];
            Dz[2] = newValue[2];
            Dz[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.bX = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            tN[0] = newValue[0];
            tN[1] = newValue[1];
            tN[2] = newValue[2];
            tN[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.eM = function(newValue) {
        if (newValue) {
            A3 = newValue;
            return 0;
        }
        return -1;
    };
    this.gO = function(newValue) {
        if (newValue) {
            Wd = newValue;
            return 0;
        }
        return -1;
    };
    this.rk = function(newValue) {
        if (newValue) {
            pr = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4c\x61\x74\x74\x69\x63\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                du = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x43\x6f\x6c\x6f\x72");
                Wo = H.getUniformLocation(this.A, "\x75\x45\x79\x65\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                UY = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72");
                ZP = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                BP = H.getUniformLocation(this.A, "\x75\x53\x63\x61\x6c\x65");
                Vp = H.getUniformLocation(this.A, "\x75\x54\x68\x72\x65\x73\x68\x6f\x6c\x64");
                I2 = H.getUniformLocation(this.A, "\x75\x53\x75\x72\x66\x61\x63\x65\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x4c\x61\x74\x74\x69\x63\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x4c\x61\x74\x74\x69\x63\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4c\x61\x74\x74\x69\x63\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform4f(du, w[0], w[1], w[2], w[3]);
            H.uniform3f(Wo, _N[0], _N[1], _N[2]);
            H.uniform4f(UY, Dz[0], Dz[1], Dz[2], Dz[3]);
            H.uniform4f(ZP, tN[0], tN[1], tN[2], tN[3]);
            H.uniform1f(bp, A3);
            H.uniform1f(BP, Wd);
            H.uniform1f(Vp, pr);
            H.uniform4f(I2, w[0], w[1], w[2], w[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.useProgram(null);
        return 0;
    };
};
v5.prototype = new w6();
var iJ = function(B) {
    var Nn = VU;
    var OE = kb;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    this.mq = null;
    this.A4 = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iI = null;
    var cD = null;
    var Bq = null;
    var a2 = null;
    var Yr = null;
    var hf = null;
    var Aa = null;
    var Wg = null;
    var UJ = null;
    var ym = null;
    var ld = null;
    var wy = null;
    var qh = null;
    var WD = 0.0045;
    var rD = 0.6;
    var yu = 10.0;
    var Dz = 0.5;
    var p4 = 1.0;
    var tN = 0.2;
    var vF = 1.5;
    var Jj = null;
    var jA = null;
    this.zx = "\x53\x74\x72\x75\x63\x74\x75\x72\x65";
    this.v = B;
    this.gV = true;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Kh = function(newValue) {
        if (newValue) {
            WD = newValue;
            return 0;
        }
        return -1;
    };
    this._I = function(newValue) {
        if (newValue) {
            rD = newValue;
            return 0;
        }
        return -1;
    };
    this.TV = function(newValue) {
        if (newValue) {
            yu = newValue;
            return 0;
        }
        return -1;
    };
    this.lh = function(newValue) {
        if (newValue) {
            Dz = newValue;
            return 0;
        }
        return -1;
    };
    this.IR = function(newValue) {
        if (newValue) {
            p4 = newValue;
            return 0;
        }
        return -1;
    };
    this.oq = function(newValue) {
        if (newValue) {
            tN = newValue;
            return 0;
        }
        return -1;
    };
    this.L_ = function(newValue) {
        if (newValue) {
            vF = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x53\x74\x72\x75\x63\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        switch (eh) {
            case "\x45\x6d\x62\x6f\x73\x73\x65\x64\x53\x71\x75\x61\x72\x65\x73":
                WD = 0.003;
                rD = 0.6;
                yu = 10.0;
                Dz = 0.4;
                p4 = 1.0;
                tN = 0.2;
                vF = 1.5;
                qh = this.v.WQ("\x53\x71\x75\x61\x72\x65\x42\x75\x6d\x70");
                this.zx = "\x45\x6d\x62\x6f\x73\x73\x65\x64\x53\x71\x75\x61\x72\x65\x73";
                break;
            case "\x45\x6d\x62\x6f\x73\x73\x65\x64\x43\x72\x6f\x73\x73\x65\x73":
                WD = 0.0039;
                rD = 0.6;
                yu = 10.0;
                Dz = 0.4;
                p4 = 1.0;
                tN = 0.2;
                vF = 1.5;
                qh = this.v.WQ("\x43\x72\x6f\x73\x73\x42\x75\x6d\x70");
                this.zx = "\x45\x6d\x62\x6f\x73\x73\x65\x64\x43\x72\x6f\x73\x73\x65\x73";
                break;
            case "\x45\x6d\x62\x6f\x73\x73\x65\x64\x53\x75\x72\x66\x61\x63\x65":
                WD = 0.011;
                rD = 0.6;
                yu = 10.0;
                Dz = 0.4;
                p4 = 1.0;
                tN = 0.2;
                vF = 1.5;
                qh = this.v.WQ("\x53\x74\x72\x75\x63\x74\x75\x72\x65\x42\x75\x6d\x70");
                this.zx = "\x45\x6d\x62\x6f\x73\x73\x65\x64\x53\x75\x72\x66\x61\x63\x65";
                break;
        };
        if (qh == null) {
            this.v.s("\x43\x6d\x69\x53\x74\x72\x75\x63\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (qh.XY) {
            this.v.s("\x43\x6d\x69\x53\x74\x72\x75\x63\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.A4 = H.getAttribLocation(this.A, "\x61\x42\x69\x6e\x6f\x72\x6d\x61\x6c\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                this.mq = H.getAttribLocation(this.A, "\x61\x54\x61\x6e\x67\x65\x6e\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Yr = H.getUniformLocation(this.A, "\x75\x4e\x6f\x72\x6d\x61\x6c\x4d\x61\x70");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                Aa = H.getUniformLocation(this.A, "\x75\x41\x74\x74\x65\x6e\x75\x61\x74\x69\x6f\x6e");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                UJ = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x56\x61\x6c");
                ym = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x56\x61\x6c");
                ld = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x56\x61\x6c");
                wy = H.getUniformLocation(this.A, "\x75\x42\x75\x6d\x70\x69\x6e\x65\x73\x73");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                Bq = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x53\x74\x72\x75\x63\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x53\x74\x72\x75\x63\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x53\x74\x72\x75\x63\x74\x75\x72\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.enableVertexAttribArray(this.mq);
            H.enableVertexAttribArray(this.A4);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Yr, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, qh.PL);
            H.uniform1f(hf, WD);
            H.uniform1f(Aa, rD);
            H.uniform1f(Wg, yu);
            H.uniform1f(UJ, Dz);
            H.uniform1f(ym, p4);
            H.uniform1f(ld, tN);
            H.uniform1f(wy, vF);
            H.uniform1f(cD, K.size);
            H.uniform4f(Bq, w[0], w[1], w[2], w[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.disableVertexAttribArray(this.mq);
        H.disableVertexAttribArray(this.A4);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
iJ.prototype = new w6();
var un = function(B) {
    var Nn = hJ;
    var OE = f9;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var lH = null;
    var Bq = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var AB = null;
    var WL = 5.0;
    this.zx = "\x47\x6c\x69\x74\x74\x65\x72\x50\x6c\x61\x73\x74\x69\x63";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Vx = true;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x6c\x69\x74\x74\x65\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                AB = H.getUniformLocation(this.A, "\x75\x47\x6c\x69\x74\x74\x65\x72\x53\x74\x72\x65\x6e\x67\x74\x68");
                Bq = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x47\x6c\x69\x74\x74\x65\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x47\x6c\x69\x74\x74\x65\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x6c\x69\x74\x74\x65\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform1f(AB, WL);
            H.uniform4f(Bq, w[0] * 0.8, w[1] * 0.8, w[2] * 0.8, w[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
un.prototype = new w6();
var QG = function(B) {
    var Nn = E_;
    var OE = lm;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var XK = null;
    var oK = null;
    var Rl = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var EU = null;
    var ou = null;
    var DM = null;
    var Dy = null;
    var iI = null;
    var ib = null;
    var gt = 0.6;
    var sJ = 0.1;
    var td = new Array(100.0, 100.0, 100.0);
    this.zx = "\x4d\x69\x72\x72\x6f\x72";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.tv = function(newValue) {
        if (newValue) {
            gt = newValue;
            return 0;
        }
        return -1;
    };
    this.Hx = function(newValue) {
        if (newValue) {
            sJ = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        EU = this.v.WQ("\x52\x61\x69\x6e\x62\x6f\x77");
        if (EU == null) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (EU.XY) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        ib = this.v.WT();
        if (ib == null) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x63\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (ib.XY) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x43\x75\x62\x65\x20\x74\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                XK = H.getUniformLocation(this.A, "\x75\x56\x69\x65\x77\x50\x6f\x73");
                oK = H.getUniformLocation(this.A, "\x75\x52\x61\x69\x6e\x62\x6f\x77");
                ou = H.getUniformLocation(this.A, "\x75\x45\x6e\x76\x4d\x61\x70");
                Rl = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                DM = H.getUniformLocation(this.A, "\x75\x4d\x69\x78\x52\x61\x74\x69\x6f");
                Dy = H.getUniformLocation(this.A, "\x75\x52\x61\x69\x6e\x62\x6f\x77\x46\x61\x63\x74\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4d\x69\x72\x72\x6f\x72\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform3f(iI, td[0], td[1], td[2]);
            H.uniform3f(XK, 0.0, 0.0, 0.0);
            H.uniform1i(oK, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, EU.PL);
            H.uniform1i(ou, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_CUBE_MAP, ib.PL);
            H.uniform4f(Rl, w[0], w[1], w[2], w[3]);
            H.uniform1f(DM, gt);
            H.uniform1f(Dy, sJ);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_CUBE_MAP, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
QG.prototype = new w6();
var cN = function(B) {
    var Nn = VU;
    var OE = Kq;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    this.tV = null;
    this.mq = null;
    this.A4 = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iI = null;
    var cD = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var Yx = null;
    var Yr = null;
    var hf = null;
    var Aa = null;
    var Wg = null;
    var UJ = null;
    var ym = null;
    var ld = null;
    var wy = null;
    var Oe = null;
    var qh = null;
    var WD = 0.03;
    var rD = 1.0;
    var yu = 33.0;
    var Dz = 0.0;
    var p4 = 1.0;
    var tN = 0.0;
    var vF = 1.0;
    this.zx = "\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70";
    this.v = B;
    this.gV = true;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        var Ye = this.v.PN();
        switch (eh) {
            case "\x53\x68\x65\x6c\x76\x65\x73":
                WD = 0.03;
                rD = 1.0;
                yu = 33.0;
                Dz = 0.0;
                p4 = 1.0;
                tN = 0.0;
                vF = 2.0;
                qh = this.v.WQ("\x57\x6f\x6f\x64\x35\x42\x75\x6d\x70");
                Oe = this.v.WQ(Ye + "\x2f\x77\x6f\x6f\x64\x35\x2e\x6a\x70\x67");
                this.zx = "\x53\x68\x65\x6c\x76\x65\x73";
                break;
        };
        if (qh == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (qh.XY) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (Oe == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (Oe.XY) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.A4 = H.getAttribLocation(this.A, "\x61\x42\x69\x6e\x6f\x72\x6d\x61\x6c\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                this.mq = H.getAttribLocation(this.A, "\x61\x54\x61\x6e\x67\x65\x6e\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Yx = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65");
                Yr = H.getUniformLocation(this.A, "\x75\x4e\x6f\x72\x6d\x61\x6c\x4d\x61\x70");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                Aa = H.getUniformLocation(this.A, "\x75\x41\x74\x74\x65\x6e\x75\x61\x74\x69\x6f\x6e");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                UJ = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x56\x61\x6c");
                ym = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x56\x61\x6c");
                ld = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x56\x61\x6c");
                wy = H.getUniformLocation(this.A, "\x75\x42\x75\x6d\x70\x69\x6e\x65\x73\x73");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x54\x65\x78\x74\x75\x72\x65\x42\x75\x6d\x70\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.enableVertexAttribArray(this.mq);
            H.enableVertexAttribArray(this.A4);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Yx, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, Oe.PL);
            H.uniform1i(Yr, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, qh.PL);
            H.uniform1f(hf, WD);
            H.uniform1f(Aa, rD);
            H.uniform1f(Wg, yu);
            H.uniform1f(UJ, Dz);
            H.uniform1f(ym, p4);
            H.uniform1f(ld, tN);
            H.uniform1f(wy, vF);
            H.uniform1f(cD, K.size);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.disableVertexAttribArray(this.mq);
        H.disableVertexAttribArray(this.A4);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
cN.prototype = new w6();
var c9 = function(B) {
    var Nn = Kd;
    var OE = wq;
    var H = B.f7();
    var LX = B.getLight1Pos();
    this.Z = null;
    this.o = null;
    this.tV = null;
    this.mq = null;
    this.A4 = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iL = null;
    var Jj = null;
    var iI = null;
    var a2 = null;
    var Yx = null;
    var Yr = null;
    var IP = null;
    var Wg = null;
    var Nt = null;
    var oG = null;
    var zW = null;
    var wy = null;
    var hf = null;
    var jA = null;
    var P9 = 0.0;
    var fv = 0.0;
    var Cd = new Array(0.8, 0.8, 0.8, 1.0);
    var ZS = new Array(0.2, 0.2, 0.2, 1.0);
    var EZ = new Array(0.0, 0.0, 0.0, 1.0);
    var vF = 1.0;
    var WD = 1.0;
    this.zx = "\x47\x65\x6e\x65\x72\x69\x63";
    this.v = B;
    this.gV = true;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Vx = true;
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x65\x6e\x65\x72\x69\x63\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.A4 = H.getAttribLocation(this.A, "\x61\x42\x69\x6e\x6f\x72\x6d\x61\x6c\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                this.mq = H.getAttribLocation(this.A, "\x61\x54\x61\x6e\x67\x65\x6e\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Yx = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65");
                Yr = H.getUniformLocation(this.A, "\x75\x4e\x6f\x72\x6d\x61\x6c\x4d\x61\x70");
                IP = H.getUniformLocation(this.A, "\x75\x54\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x63\x79");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                Nt = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x43\x6f\x6c\x6f\x72");
                oG = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x43\x6f\x6c\x6f\x72");
                zW = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x43\x6f\x6c\x6f\x72");
                wy = H.getUniformLocation(this.A, "\x75\x42\x75\x6d\x70\x69\x6e\x65\x73\x73");
                hf = H.getUniformLocation(this.A, "\x75\x54\x65\x78\x74\x75\x72\x65\x53\x63\x61\x6c\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x47\x65\x6e\x65\x72\x69\x63\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x47\x65\x6e\x65\x72\x69\x63\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x65\x6e\x65\x72\x69\x63\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            if (K.Oj) {
                if ((K.Oj.diffuseColor != undefined) && (K.Oj.diffuseColor.length > 2)) {
                    Cd[0] = K.Oj.diffuseColor[0];
                    Cd[1] = K.Oj.diffuseColor[1];
                    Cd[2] = K.Oj.diffuseColor[2];
                }
                if ((K.Oj.specularColor != undefined) && (K.Oj.specularColor.length > 2)) {
                    EZ[0] = K.Oj.specularColor[0];
                    EZ[1] = K.Oj.specularColor[1];
                    EZ[2] = K.Oj.specularColor[2];
                }
                if ((K.Oj.ambientColor != undefined) && (K.Oj.ambientColor.length > 2)) {
                    ZS[0] = K.Oj.ambientColor[0];
                    ZS[1] = K.Oj.ambientColor[1];
                    ZS[2] = K.Oj.ambientColor[2];
                }
                if (K.Oj.shininessVal != undefined) {
                    fv = parseFloat(K.Oj.shininessVal);
                }
                if (K.Oj.transparency != undefined) {
                    P9 = parseFloat(K.Oj.transparency);
                }
                if (K.Oj.bumpiness != undefined) {
                    vF = parseFloat(K.Oj.bumpiness);
                }
                if (K.Oj._t != undefined) {
                    WD = parseFloat(K.Oj._t);
                } else {
                    WD = 1.0;
                };
            }
            if (K.gj() == true) vF = 0.0;
            H.useProgram(this.A);
            if (P9 > 0.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
                H.enable(H.CULL_FACE);
                H.cullFace(H.BACK);
            } else {
                H.disable(H.BLEND);
                H.disable(H.CULL_FACE);
            }
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.enableVertexAttribArray(this.mq);
            H.enableVertexAttribArray(this.A4);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            LX = this.v.getLight1Pos();
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Yx, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, K.wA().PL);
            H.uniform1i(Yr, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, K.gB().PL);
            H.uniform1f(IP, P9);
            H.uniform1f(Wg, fv);
            H.uniform4f(Nt, Cd[0], Cd[1], Cd[2], Cd[3]);
            H.uniform4f(oG, ZS[0], ZS[1], ZS[2], ZS[3]);
            H.uniform4f(zW, EZ[0], EZ[1], EZ[2], EZ[3]);
            H.uniform1f(hf, WD);
            H.uniform1f(a2, this.v.bQ);
            H.uniform1f(wy, vF);
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            H.uniform1i(jA, this.v.Is);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.disableVertexAttribArray(this.mq);
        H.disableVertexAttribArray(this.A4);
        H.disable(H.CULL_FACE);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
c9.prototype = new w6();
var GZ = function(B) {
    var Nn = sV;
    var OE = zq;
    var H = B.f7();
    var LX = B.getLight1Pos();
    this.Z = null;
    this.o = null;
    this.tV = null;
    this.mq = null;
    this.A4 = null;
    var t = null;
    var lH = null;
    var vc = null;
    var iL = null;
    var Jj = null;
    var iI = null;
    var a2 = null;
    var Yx = null;
    var Yr = null;
    var IP = null;
    var Wg = null;
    var Nt = null;
    var oG = null;
    var zW = null;
    var wy = null;
    var jA = null;
    var P9 = 0.0;
    var fv = 0.0;
    var Cd = new Array(0.8, 0.8, 0.8, 1.0);
    var ZS = new Array(0.2, 0.2, 0.2, 1.0);
    var EZ = new Array(0.0, 0.0, 0.0, 1.0);
    var vF = 1.0;
    this.zx = "\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70";
    this.v = B;
    this.gV = true;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.Vx = true;
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.A4 = H.getAttribLocation(this.A, "\x61\x42\x69\x6e\x6f\x72\x6d\x61\x6c\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                this.tV = H.getAttribLocation(this.A, "\x61\x54\x65\x78\x74\x75\x72\x65\x43\x6f\x6f\x72\x64");
                this.mq = H.getAttribLocation(this.A, "\x61\x54\x61\x6e\x67\x65\x6e\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                Yx = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x54\x65\x78\x74\x75\x72\x65");
                Yr = H.getUniformLocation(this.A, "\x75\x4e\x6f\x72\x6d\x61\x6c\x4d\x61\x70");
                IP = H.getUniformLocation(this.A, "\x75\x54\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x63\x79");
                Wg = H.getUniformLocation(this.A, "\x75\x53\x68\x69\x6e\x69\x6e\x65\x73\x73\x56\x61\x6c");
                Nt = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x43\x6f\x6c\x6f\x72");
                oG = H.getUniformLocation(this.A, "\x75\x41\x6d\x62\x69\x65\x6e\x74\x43\x6f\x6c\x6f\x72");
                zW = H.getUniformLocation(this.A, "\x75\x53\x70\x65\x63\x75\x6c\x61\x72\x43\x6f\x6c\x6f\x72");
                wy = H.getUniformLocation(this.A, "\x75\x42\x75\x6d\x70\x69\x6e\x65\x73\x73");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x57\x61\x76\x65\x66\x72\x6f\x6e\x74\x42\x75\x6d\x70\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            if (K.Oj) {
                if ((K.Oj.diffuseColor != undefined) && (K.Oj.diffuseColor.length > 2)) {
                    Cd[0] = K.Oj.diffuseColor[0];
                    Cd[1] = K.Oj.diffuseColor[1];
                    Cd[2] = K.Oj.diffuseColor[2];
                }
                if ((K.Oj.specularColor != undefined) && (K.Oj.specularColor.length > 2)) {
                    EZ[0] = K.Oj.specularColor[0];
                    EZ[1] = K.Oj.specularColor[1];
                    EZ[2] = K.Oj.specularColor[2];
                }
                if ((K.Oj.ambientColor != undefined) && (K.Oj.ambientColor.length > 2)) {
                    ZS[0] = K.Oj.ambientColor[0];
                    ZS[1] = K.Oj.ambientColor[1];
                    ZS[2] = K.Oj.ambientColor[2];
                }
                if (K.Oj.shininessVal != undefined) {
                    fv = parseFloat(K.Oj.shininessVal);
                }
                if (K.Oj.transparency != undefined) {
                    P9 = parseFloat(K.Oj.transparency);
                }
            }
            if (K.gj() == true) vF = 0.0;
            else vF = 1.0;
            H.useProgram(this.A);
            if (P9 > 0.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
                H.enable(H.CULL_FACE);
                H.cullFace(H.BACK);
            } else {
                H.disable(H.BLEND);
                H.disable(H.CULL_FACE);
            }
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.enableVertexAttribArray(this.tV);
            H.enableVertexAttribArray(this.mq);
            H.enableVertexAttribArray(this.A4);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniformMatrix4fv(Jj, false, this.v.M0);
            LX = this.v.getLight1Pos();
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(Yx, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, K.wA().PL);
            H.uniform1i(Yr, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, K.gB().PL);
            H.uniform1f(IP, P9);
            H.uniform1f(Wg, fv);
            H.uniform4f(Nt, Cd[0], Cd[1], Cd[2], Cd[3]);
            H.uniform4f(oG, ZS[0], ZS[1], ZS[2], ZS[3]);
            H.uniform4f(zW, EZ[0], EZ[1], EZ[2], EZ[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniform1f(wy, vF);
            H.uniform1i(jA, this.v.Is);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.disableVertexAttribArray(this.tV);
        H.disableVertexAttribArray(this.mq);
        H.disableVertexAttribArray(this.A4);
        H.disable(H.CULL_FACE);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
GZ.prototype = new w6();
var HW = function(B) {
    var Nn = zc;
    var OE = QN;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var oM = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var dL = null;
    var Ub = null;
    var ve = null;
    var wp = new Array(0.75, 0.75, 1.0, 1.0);
    var YM = 0.4;
    var o5 = 0.8;
    this.zx = "\x43\x61\x72\x74\x6f\x6f\x6e";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.WC = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            wp[0] = newValue[0];
            wp[1] = newValue[1];
            wp[2] = newValue[2];
            wp[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.um = function(newValue) {
        if (newValue) {
            YM = newValue;
            return 0;
        }
        return -1;
    };
    this.um = function(newValue) {
        if (newValue) {
            o5 = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                oM = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x43\x6f\x6c\x6f\x72");
                dL = H.getUniformLocation(this.A, "\x75\x50\x68\x6f\x6e\x67\x43\x6f\x6c\x6f\x72");
                Ub = H.getUniformLocation(this.A, "\x75\x45\x64\x67\x65");
                ve = H.getUniformLocation(this.A, "\x75\x50\x68\x6f\x6e\x67");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform4f(oM, w[0], w[1], w[2], w[3]);
            H.uniform4f(dL, wp[0], wp[1], wp[2], wp[3]);
            H.uniform1f(Ub, YM);
            H.uniform1f(ve, o5);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.useProgram(null);
        return 0;
    };
};
HW.prototype = new w6();
var SJ = function(B) {
    var Nn = yi;
    var OE = c8;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var lH = null;
    var vc = null;
    var Z7 = null;
    var Rl = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var Ee = null;
    var g_ = null;
    var _R = null;
    var cd = null;
    var Br = new Array(-100.0, 0.0, 0.0, 1.0);
    var xV = new Array(100.0, -100.0, 0.0, 1.0);
    var HT = new Array(0.0, 0.0, 100.0, 1.0);
    this.zx = "\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.RD = true;
    this.da = function(newValue) {
        if ((newValue) && (newValue.length >= 3)) {
            Br[0] = newValue[0];
            Br[1] = newValue[1];
            Br[2] = newValue[2];
            return 0;
        }
        return -1;
    };
    this.setLight1Pos = function(newValue) {
        if ((newValue) && (newValue.length >= 3)) {
            xV[0] = newValue[0];
            xV[1] = newValue[1];
            xV[2] = newValue[2];
            return 0;
        }
        return -1;
    };
    this.Lr = function(newValue) {
        if ((newValue) && (newValue.length >= 3)) {
            HT[0] = newValue[0];
            HT[1] = newValue[1];
            HT[2] = newValue[2];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        Ee = this.v.WQ("\x4d\x65\x74\x61\x6c\x6c\x69\x63\x4f\x75\x74\x6c\x69\x6e\x65");
        if (Ee == null) {
            this.v.s("\x43\x6d\x69\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (Ee.XY) {
            this.v.s("\x43\x6d\x69\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                lH = H.getUniformLocation(this.A, "\x75\x4d\x56\x49\x6e\x76\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                g_ = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x30");
                _R = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x31");
                cd = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x32");
                Z7 = H.getUniformLocation(this.A, "\x75\x4f\x75\x74\x6c\x69\x6e\x65");
                Rl = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4d\x65\x74\x61\x6c\x6c\x69\x63\x43\x61\x72\x74\x6f\x6f\x6e\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(lH, false, this.v.Xp());
            H.uniform4f(g_, Br[0], Br[1], Br[2], Br[3]);
            H.uniform4f(_R, xV[0], xV[1], xV[2], xV[3]);
            H.uniform4f(cd, HT[0], HT[1], HT[2], HT[3]);
            H.uniform1i(Z7, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, Ee.PL);
            H.uniform4f(Rl, w[0], w[1], w[2], w[3]);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
SJ.prototype = new w6();
var ux = function(B) {
    var Ip = kG;
    var VB = wB;
    var wV = yd;
    var _K = bV;
    var g9 = null;
    var Ow = null;
    var Qs = null;
    var c3 = null;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var qD = null;
    var YZ = null;
    var GH = null;
    var G2 = null;
    var NT = null;
    var iI = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var I2 = null;
    var bY = null;
    var HF = null;
    var om = null;
    var Od = null;
    var Eo = null;
    var dq = null;
    var Ls = null;
    var Pv = null;
    var Jq = new Array(0.8, 0.8, 0.8, 1.0);
    var Wh = new Array(0.2, 0.2, 0.2, 1.0);
    var bR = 0.45;
    var KJ = 0.45;
    var UF = new Array(0.0, 0.0, 0.0, 1.0);
    this.zx = "\x41\x64\x76\x61\x6e\x63\x65\x64\x47\x6f\x6f\x63\x68";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Co = 2;
    this.Vx = true;
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x41\x64\x76\x61\x6e\x63\x65\x64\x47\x6f\x6f\x63\x68\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        try {
            this.A = oO(H, Ip, VB);
            g9 = oO(H, wV, _K);
            if ((this.A != null) && (g9 != null)) {
                this.usable = true;
                H.useProgram(this.A);
                qD = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                YZ = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                GH = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                G2 = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                NT = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                I2 = H.getUniformLocation(this.A, "\x75\x53\x75\x72\x66\x61\x63\x65\x43\x6f\x6c\x6f\x72");
                bY = H.getUniformLocation(this.A, "\x75\x57\x61\x72\x6d\x43\x6f\x6c\x6f\x72");
                HF = H.getUniformLocation(this.A, "\x75\x43\x6f\x6f\x6c\x43\x6f\x6c\x6f\x72");
                om = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x57\x61\x72\x6d");
                Od = H.getUniformLocation(this.A, "\x75\x44\x69\x66\x66\x75\x73\x65\x43\x6f\x6f\x6c");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(g9);
                Eo = H.getAttribLocation(g9, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                dq = H.getUniformLocation(g9, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                Ls = H.getUniformLocation(g9, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                Pv = H.getUniformLocation(g9, "\x75\x43\x6f\x6c\x6f\x72\x31");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x41\x64\x76\x61\x6e\x63\x65\x64\x47\x6f\x6f\x63\x68\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x41\x64\x76\x61\x6e\x63\x65\x64\x47\x6f\x6f\x63\x68\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x41\x64\x76\x61\x6e\x63\x65\x64\x47\x6f\x6f\x63\x68\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            switch (qV) {
                case 0:
                    Ow = H.getParameter(H.CULL_FACE);
                    Qs = H.getParameter(H.DEPTH_FUNC);
                    H.enable(H.CULL_FACE);
                    H.cullFace(H.BACK);
                    H.depthFunc(H.LESS);
                    this.Yw = H.TRIANGLES;
                    this.Z = qD;
                    this.o = YZ;
                    H.useProgram(this.A);
                    H.enableVertexAttribArray(qD);
                    H.enableVertexAttribArray(YZ);
                    H.uniformMatrix4fv(NT, false, this.v.vN());
                    H.uniformMatrix4fv(GH, false, this.v.Yy());
                    H.uniformMatrix4fv(G2, false, this.v.Na());
                    H.uniform3f(iI, LX[0], LX[1], LX[2]);
                    H.uniform4f(I2, Jq[0], Jq[1], Jq[2], Jq[3]);
                    H.uniform4f(bY, w[0], w[1], w[2], w[3]);
                    H.uniform4f(HF, Wh[0], Wh[1], Wh[2], Wh[3]);
                    H.uniform1f(om, bR);
                    H.uniform1f(Od, KJ);
                    H.uniform1f(a2, this.v.bQ);
                    H.uniformMatrix4fv(Jj, false, this.v.w2);
                    H.uniform1i(jA, 0);
                    break;
                case 1:
                    c3 = H.getParameter(H.LINE_WIDTH);
                    H.enable(H.CULL_FACE);
                    H.cullFace(H.FRONT);
                    H.depthFunc(H.LEQUAL);
                    this.Yw = H.LINES;
                    H.lineWidth(4.0);
                    this.o = Eo;
                    H.useProgram(g9);
                    H.enableVertexAttribArray(Eo);
                    H.uniformMatrix4fv(Ls, false, this.v.vN());
                    H.uniformMatrix4fv(dq, false, this.v.Yy());
                    H.uniform4f(Pv, UF[0], UF[1], UF[2], UF[3]);
                    break;
            };
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        switch (qV) {
            case 0:
                H.disableVertexAttribArray(this.Z);
                H.disableVertexAttribArray(this.o);
                this.Z = null;
                this.o = null;
                H.useProgram(null);
                break;
            case 1:
                this.Yw = H.TRIANGLES;
                H.disable(H.CULL_FACE);
                H.depthFunc(Qs);
                H.lineWidth(c3);
                H.disableVertexAttribArray(this.o);
                this.o = null;
                H.useProgram(null);
                break;
        };
        return 0;
    };
};
ux.prototype = new w6();
var Mk = function(B) {
    var Nn = ZB;
    var OE = Pa;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var iI = null;
    var OY = null;
    var s5 = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var BP = null;
    var bp = null;
    var mJ = null;
    var j0 = null;
    var PM = null;
    var zP = null;
    var g0 = null;
    var Su = null;
    var Wd = 0.025;
    var A3 = 0.89;
    var GQ = 0.66;
    var Io = new Array(0.5, 0.27, 0.0, 7.0);
    var zz = new Array(0.9, 0.6, 0.2, 1.0);
    var Ti = 6.72;
    var cb = 0.96;
    var IS = 2.2;
    this.zx = "\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.setScale = function(newValue) {
        if (newValue) {
            Wd = newValue;
            return 0;
        }
        return -1;
    };
    this.eM = function(newValue) {
        if (newValue) {
            A3 = newValue;
            return 0;
        }
        return -1;
    };
    this.ss = function(newValue) {
        if (newValue) {
            GQ = newValue;
            return 0;
        }
        return -1;
    };
    this.KF = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            Io[0] = newValue[0];
            Io[1] = newValue[1];
            Io[2] = newValue[2];
            Io[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.by = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            zz[0] = newValue[0];
            zz[1] = newValue[1];
            zz[2] = newValue[2];
            zz[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Vw = function(newValue) {
        if (newValue) {
            Ti = newValue;
            return 0;
        }
        return -1;
    };
    this.Vw = function(newValue) {
        if (newValue) {
            cb = newValue;
            return 0;
        }
        return -1;
    };
    this.X0 = function(newValue) {
        if (newValue) {
            IS = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                BP = H.getUniformLocation(this.A, "\x75\x53\x63\x61\x6c\x65");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                mJ = H.getUniformLocation(this.A, "\x75\x4b\x73");
                j0 = H.getUniformLocation(this.A, "\x75\x44\x61\x72\x6b\x57\x6f\x6f\x64");
                PM = H.getUniformLocation(this.A, "\x75\x4c\x69\x74\x65\x57\x6f\x6f\x64");
                zP = H.getUniformLocation(this.A, "\x75\x46\x72\x65\x71\x75\x65\x6e\x63\x79");
                g0 = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x53\x63\x61\x6c\x65");
                Su = H.getUniformLocation(this.A, "\x75\x52\x69\x6e\x67\x53\x63\x61\x6c\x65");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x72\x6f\x63\x65\x64\x75\x72\x61\x6c\x57\x6f\x6f\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(BP, Wd);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1f(bp, A3);
            H.uniform1f(mJ, GQ);
            H.uniform4f(j0, Io[0], Io[1], Io[2], Io[3]);
            H.uniform4f(PM, zz[0], zz[1], zz[2], zz[3]);
            H.uniform1f(zP, Ti);
            H.uniform1f(g0, cb);
            H.uniform1f(Su, IS);
            H.uniform1i(OY, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
Mk.prototype = new w6();
var Tf = function(B) {
    var Nn = pf;
    var OE = YO;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var cD = null;
    var OY = null;
    var s5 = null;
    var nw = null;
    var EO = null;
    var iI = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var du = null;
    var vq = null;
    var mJ = null;
    var tF = null;
    var bp = null;
    var Wc = null;
    var wk = null;
    var L5 = new Array(1.0, 1.0, 1.0, 1.0);
    var uF = 0.1;
    var GQ = new Array(0.79, 0.79, 0.79, 1.0);
    var wU = new Array(0.93, 0.93, 0.93, 1.0);
    var A3 = new Array(0.83, 0.83, 0.83, 1.0);
    var Mb = 1.0;
    var kc = new Array(0.8, 0.8, 0.8, 1.0);
    this.zx = "\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.tm = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            L5[0] = newValue[0];
            L5[1] = newValue[1];
            L5[2] = newValue[2];
            L5[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.el = function(newValue) {
        if (newValue) {
            uF = newValue;
            return 0;
        }
        return -1;
    };
    this.Kp = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            GQ[0] = newValue[0];
            GQ[1] = newValue[1];
            GQ[2] = newValue[2];
            GQ[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Mx = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            wU[0] = newValue[0];
            wU[1] = newValue[1];
            wU[2] = newValue[2];
            wU[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.UH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            A3[0] = newValue[0];
            A3[1] = newValue[1];
            A3[2] = newValue[2];
            A3[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.D3 = function(newValue) {
        if (newValue) {
            Mb = newValue;
            return 0;
        }
        return -1;
    };
    this.VH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            kc[0] = newValue[0];
            kc[1] = newValue[1];
            kc[2] = newValue[2];
            kc[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        EO = this.v.WQ("\x42\x6c\x75\x65\x53\x70\x6c\x69\x6e\x65");
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (EO == null) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (EO.XY) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                du = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x43\x6f\x6c\x6f\x72");
                vq = H.getUniformLocation(this.A, "\x75\x52\x6f\x75\x67\x68");
                mJ = H.getUniformLocation(this.A, "\x75\x4b\x73");
                tF = H.getUniformLocation(this.A, "\x75\x4b\x61");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                Wc = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x41\x6d\x70");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                wk = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x41\x6d\x62");
                nw = H.getUniformLocation(this.A, "\x75\x4d\x61\x72\x62\x6c\x65\x53\x70\x6c\x69\x6e\x65");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x42\x6c\x75\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(cD, K.size);
            H.uniform4f(du, L5[0], L5[1], L5[2], L5[3]);
            H.uniform1f(vq, uF);
            H.uniform4f(mJ, GQ[0], GQ[1], GQ[2], GQ[3]);
            H.uniform4f(tF, wU[0], wU[1], wU[2], wU[3]);
            H.uniform4f(bp, A3[0], A3[1], A3[2], A3[3]);
            H.uniform1f(Wc, Mb);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform4f(wk, kc[0], kc[1], kc[2], kc[3]);
            H.uniform1i(nw, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, EO.PL);
            H.uniform1i(OY, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
Tf.prototype = new w6();
var AL = function(B) {
    var Nn = UX;
    var OE = Lu;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var iI = null;
    var OY = null;
    var s5 = null;
    var cD = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var cv = null;
    var du = null;
    var tF = null;
    var bp = null;
    var bO = new Array(0.9, 0.9, 0.9, 1.0);
    var L5 = new Array(1.0, 1.0, 1.0, 1.0);
    var wU = new Array(0.93, 0.93, 0.93, 1.0);
    var A3 = new Array(0.83, 0.83, 0.83, 1.0);
    this.zx = "\x47\x72\x61\x6e\x69\x74\x65";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.tm = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            bO[0] = newValue[0];
            bO[1] = newValue[1];
            bO[2] = newValue[2];
            bO[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.tm = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            L5[0] = newValue[0];
            L5[1] = newValue[1];
            L5[2] = newValue[2];
            L5[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Mx = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            wU[0] = newValue[0];
            wU[1] = newValue[1];
            wU[2] = newValue[2];
            wU[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.UH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            A3[0] = newValue[0];
            A3[1] = newValue[1];
            A3[2] = newValue[2];
            A3[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x61\x6e\x69\x74\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x61\x6e\x69\x74\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x47\x72\x61\x6e\x69\x74\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                cv = H.getUniformLocation(this.A, "\x75\x47\x72\x61\x6e\x69\x74\x65\x43\x6f\x6c\x6f\x72");
                du = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x43\x6f\x6c\x6f\x72");
                tF = H.getUniformLocation(this.A, "\x75\x4b\x61");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x47\x72\x61\x6e\x69\x74\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x47\x72\x61\x6e\x69\x74\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x47\x72\x61\x6e\x69\x74\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(cD, K.size);
            H.uniform4f(cv, bO[0], bO[1], bO[2], bO[3]);
            H.uniform4f(du, L5[0], L5[1], L5[2], L5[3]);
            H.uniform4f(tF, wU[0], wU[1], wU[2], wU[3]);
            H.uniform4f(bp, A3[0], A3[1], A3[2], A3[3]);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform1i(OY, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
AL.prototype = new w6();
var Pd = function(B) {
    var Nn = iv;
    var OE = zj;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var cD = null;
    var nw = null;
    var EO = null;
    var OY = null;
    var s5 = null;
    var iI = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var du = null;
    var tF = null;
    var bp = null;
    var Wc = null;
    var wk = null;
    var L5 = new Array(1.0, 1.0, 1.0, 1.0);
    var wU = new Array(0.93, 0.93, 0.93, 1.0);
    var A3 = new Array(0.83, 0.83, 0.83, 1.0);
    var Mb = 1.0;
    var kc = new Array(0.5, 0.5, 0.5, 1.0);
    this.zx = "\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.tm = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            L5[0] = newValue[0];
            L5[1] = newValue[1];
            L5[2] = newValue[2];
            L5[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Mx = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            wU[0] = newValue[0];
            wU[1] = newValue[1];
            wU[2] = newValue[2];
            wU[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.UH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            A3[0] = newValue[0];
            A3[1] = newValue[1];
            A3[2] = newValue[2];
            A3[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.D3 = function(newValue) {
        if (newValue) {
            Mb = newValue;
            return 0;
        }
        return -1;
    };
    this.VH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            kc[0] = newValue[0];
            kc[1] = newValue[1];
            kc[2] = newValue[2];
            kc[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        EO = this.v.WQ("\x53\x74\x72\x61\x74\x61\x53\x70\x6c\x69\x6e\x65");
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (EO == null) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (EO.XY) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                du = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x43\x6f\x6c\x6f\x72");
                tF = H.getUniformLocation(this.A, "\x75\x4b\x61");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                Wc = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x41\x6d\x70");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                wk = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x41\x6d\x62");
                nw = H.getUniformLocation(this.A, "\x75\x4d\x61\x72\x62\x6c\x65\x53\x70\x6c\x69\x6e\x65");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x4d\x75\x73\x67\x72\x61\x76\x65\x53\x74\x72\x61\x74\x61\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(cD, K.size);
            H.uniform4f(du, L5[0], L5[1], L5[2], L5[3]);
            H.uniform4f(tF, wU[0], wU[1], wU[2], wU[3]);
            H.uniform4f(bp, A3[0], A3[1], A3[2], A3[3]);
            H.uniform1f(Wc, Mb);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform4f(wk, kc[0], kc[1], kc[2], kc[3]);
            H.uniform1i(nw, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, EO.PL);
            H.uniform1i(OY, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
Pd.prototype = new w6();
var UN = function(B) {
    var Nn = Vy;
    var OE = bA;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var OY = null;
    var s5 = null;
    var mT = null;
    var kP = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var BP = null;
    var Dv = null;
    var g0 = null;
    var VZ = null;
    var Wd = 0.05;
    var AX = 0.68;
    var cb = 0.07;
    var S_ = 10.0;
    this.zx = "\x50\x6c\x61\x69\x64";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.setScale = function(newValue) {
        if (newValue) {
            Wd = newValue;
            return 0;
        }
        return -1;
    };
    this.gG = function(newValue) {
        if (newValue) {
            AX = newValue;
            return 0;
        }
        return -1;
    };
    this.kj = function(newValue) {
        if (newValue) {
            cb = newValue;
            return 0;
        }
        return -1;
    };
    this.Ke = function(newValue) {
        if (newValue) {
            S_ = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function(eh) {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        switch (eh) {
            case "\x42\x61\x74\x69\x6b":
                Wd = 0.05;
                AX = 0.68;
                cb = 1.1;
                S_ = 10.0;
                this.zx = "\x42\x61\x74\x69\x6b";
                break;
            default:
                Wd = 0.05;
                AX = 0.68;
                cb = 0.07;
                S_ = 10.0;
                this.zx = "\x50\x6c\x61\x69\x64";
                break;
        };
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                BP = H.getUniformLocation(this.A, "\x75\x53\x63\x61\x6c\x65");
                Dv = H.getUniformLocation(this.A, "\x75\x53\x68\x65\x65\x6e");
                g0 = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x53\x63\x61\x6c\x65");
                VZ = H.getUniformLocation(this.A, "\x75\x46\x75\x72\x72\x69\x6e\x65\x73\x73");
                mT = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x44\x69\x72");
                kP = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x50\x6c\x61\x69\x64\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(BP, Wd);
            H.uniform1f(Dv, AX);
            H.uniform1f(g0, cb);
            H.uniform1f(VZ, S_);
            H.uniform3f(mT, 0.26, 0.26, -0.9);
            H.uniform4f(kP, w[0], w[1], w[2], 1.0);
            H.uniform1i(OY, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
UN.prototype = new w6();
var Qx = function(B) {
    var Nn = uB;
    var OE = Y1;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var kP = null;
    var OY = null;
    var s5 = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var my = null;
    var ap = null;
    var g0 = null;
    var lM = 0.06;
    var H9 = 0.016;
    var cb = 0.64;
    this.zx = "\x52\x61\x67";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.AM = function(newValue) {
        if (newValue) {
            lM = newValue;
            return 0;
        }
        return -1;
    };
    this.HG = function(newValue) {
        if (newValue) {
            H9 = newValue;
            return 0;
        }
        return -1;
    };
    this.kj = function(newValue) {
        if (newValue) {
            cb = newValue;
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x52\x61\x67\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x52\x61\x67\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x52\x61\x67\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                my = H.getUniformLocation(this.A, "\x75\x50\x61\x74\x74\x65\x72\x6e\x52\x61\x74\x65");
                ap = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x52\x61\x74\x65");
                g0 = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x53\x63\x61\x6c\x65");
                kP = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x52\x61\x67\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x52\x61\x67\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x52\x61\x67\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(my, lM);
            H.uniform1f(ap, H9);
            H.uniform1f(g0, cb);
            H.uniform4f(kP, w[0], w[1], w[2], 1.0);
            H.uniform1i(OY, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
Qx.prototype = new w6();
var N2 = function(B) {
    var Nn = DF;
    var OE = Q9;
    var H = B.f7();
    var w = null;
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var cD = null;
    var mT = null;
    var OY = null;
    var s5 = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var kP = null;
    var Qq = new Array(1.0, 0.84, 0.63, 1.0);
    this.zx = "\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.setColor = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            Qq[0] = newValue[0];
            Qq[1] = newValue[1];
            Qq[2] = newValue[2];
            Qq[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                kP = H.getUniformLocation(this.A, "\x75\x43\x6f\x6c\x6f\x72");
                mT = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x44\x69\x72");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x53\x69\x6d\x70\x6c\x65\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(cD, K.size);
            H.uniform4f(kP, Qq[0], Qq[1], Qq[2], Qq[3]);
            H.uniform3f(mT, 0.41, 0.41, 0.82);
            H.uniform1i(OY, 0);
            H.activeTexture(H.TEXTURE0);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE0);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
N2.prototype = new w6();
var bG = function(B) {
    var Nn = Hf;
    var OE = p7;
    var H = B.f7();
    var w = null;
    var LX = B.wO();
    this.Z = null;
    this.o = null;
    var t = null;
    var vc = null;
    var iL = null;
    var cD = null;
    var iI = null;
    var OY = null;
    var s5 = null;
    var a2 = null;
    var Jj = null;
    var jA = null;
    var Rl = null;
    var Vq = null;
    var Xy = null;
    var ru = null;
    var mJ = null;
    var tF = null;
    var bp = null;
    var Wc = null;
    var wk = null;
    var WM = new Array(0.06, 0.08, 0.44, 1.0);
    var ZF = new Array(0.65, 0.66, 0.95, 1.0);
    var fz = 5.36;
    var iZ = 0.4;
    var GQ = new Array(0.79, 0.79, 0.79, 1.0);
    var wU = new Array(0.93, 0.93, 0.93, 1.0);
    var A3 = new Array(0.83, 0.83, 0.83, 1.0);
    var Mb = 1.0;
    var kc = new Array(0.5, 0.5, 0.5, 1.0);
    this.zx = "\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65";
    this.v = B;
    this.Yw = H.TRIANGLES;
    this.Vx = true;
    this.dp = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            WM[0] = newValue[0];
            WM[1] = newValue[1];
            WM[2] = newValue[2];
            WM[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.n3 = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            ZF[0] = newValue[0];
            ZF[1] = newValue[1];
            ZF[2] = newValue[2];
            ZF[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.EE = function(newValue) {
        if (newValue) {
            fz = newValue;
            return 0;
        }
        return -1;
    };
    this.hp = function(newValue) {
        if (newValue) {
            iZ = newValue;
            return 0;
        }
        return -1;
    };
    this.Kp = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            GQ[0] = newValue[0];
            GQ[1] = newValue[1];
            GQ[2] = newValue[2];
            GQ[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Mx = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            wU[0] = newValue[0];
            wU[1] = newValue[1];
            wU[2] = newValue[2];
            wU[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.UH = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            A3[0] = newValue[0];
            A3[1] = newValue[1];
            A3[2] = newValue[2];
            A3[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.D3 = function(newValue) {
        if (newValue) {
            Mb = newValue;
            return 0;
        }
        return -1;
    };
    this.rZ = function(newValue) {
        if ((newValue) && (newValue.length >= 4)) {
            kc[0] = newValue[0];
            kc[1] = newValue[1];
            kc[2] = newValue[2];
            kc[3] = newValue[3];
            return 0;
        }
        return -1;
    };
    this.Ni = function() {
        if (H == null) {
            this.v.s("\x43\x6d\x69\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        s5 = this.v.WQ("\x4e\x6f\x69\x73\x65\x33\x44");
        if (s5 == null) {
            this.v.s("\x43\x6d\x69\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x4e\x6f\x20\x74\x65\x78\x74\x75\x72\x65\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        if (s5.XY) {
            this.v.s("\x43\x6d\x69\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x54\x65\x78\x74\x75\x72\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x28\x6c\x6f\x61\x64\x20\x65\x72\x72\x6f\x72\x29", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
        try {
            this.A = oO(H, Nn, OE);
            if (this.A != null) {
                this.usable = true;
                H.useProgram(this.A);
                this.Z = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x4e\x6f\x72\x6d\x61\x6c");
                this.o = H.getAttribLocation(this.A, "\x61\x56\x65\x72\x74\x65\x78\x50\x6f\x73\x69\x74\x69\x6f\x6e");
                t = H.getUniformLocation(this.A, "\x75\x4d\x56\x4d\x61\x74\x72\x69\x78");
                vc = H.getUniformLocation(this.A, "\x75\x50\x4d\x61\x74\x72\x69\x78");
                iL = H.getUniformLocation(this.A, "\x75\x4e\x4d\x61\x74\x72\x69\x78");
                cD = H.getUniformLocation(this.A, "\x75\x53\x69\x7a\x65");
                Rl = H.getUniformLocation(this.A, "\x75\x42\x61\x73\x65\x43\x6f\x6c\x6f\x72");
                Vq = H.getUniformLocation(this.A, "\x75\x56\x65\x69\x6e\x43\x6f\x6c\x6f\x72");
                Xy = H.getUniformLocation(this.A, "\x75\x53\x68\x61\x72\x70\x6e\x65\x73\x73");
                ru = H.getUniformLocation(this.A, "\x75\x56\x65\x69\x6e\x46\x72\x65\x71\x75\x65\x6e\x63\x79");
                mJ = H.getUniformLocation(this.A, "\x75\x4b\x73");
                tF = H.getUniformLocation(this.A, "\x75\x4b\x61");
                bp = H.getUniformLocation(this.A, "\x75\x4b\x64");
                Wc = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65\x41\x6d\x70");
                iI = H.getUniformLocation(this.A, "\x75\x4c\x69\x67\x68\x74\x50\x6f\x73");
                wk = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x41\x6d\x62");
                OY = H.getUniformLocation(this.A, "\x75\x4e\x6f\x69\x73\x65");
                a2 = H.getUniformLocation(this.A, "\x75\x47\x6c\x6f\x62\x61\x6c\x42\x72\x69\x67\x68\x74\x6e\x65\x73\x73");
                Jj = H.getUniformLocation(this.A, "\x75\x4c\x56\x4d\x61\x74\x72\x69\x78");
                jA = H.getUniformLocation(this.A, "\x75\x55\x73\x65\x46\x69\x78\x65\x64\x4c\x69\x67\x68\x74\x50\x6f\x73");
                H.useProgram(null);
                return 0;
            } else {
                this.v.s("\x43\x6d\x69\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x68\x61\x64\x65\x72\x20\x70\x72\x6f\x67\x72\x61\x6d", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
                this.usable = false;
                return -1;
            }
        } catch (J) {
            this.v.s("\x43\x6d\x69\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x69\x6e\x69\x74", J.message, "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            this.usable = false;
            return -1;
        }
    };
    this.EP = function(K, qV) {
        w = K.gR();
        if (H == null) {
            this.v.s("\x43\x6d\x69\x56\x65\x69\x6e\x65\x64\x4d\x61\x72\x62\x6c\x65\x33\x44\x53\x68\x61\x64\x65\x72\x2e\x62\x65\x67\x69\x6e\x44\x72\x61\x77", "\x57\x65\x62\x47\x4c\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64", "\x53\x43\x52\x49\x50\x54\x5f\x45\x52\x52\x4f\x52");
            return -1;
        }
        if (this.usable) {
            H.useProgram(this.A);
            if (w[3] < 1.0) {
                H.enable(H.BLEND);
                H.blendFunc(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA);
            } else H.disable(H.BLEND);
            H.enableVertexAttribArray(this.Z);
            H.enableVertexAttribArray(this.o);
            H.uniformMatrix4fv(t, false, this.v.Yy());
            H.uniformMatrix4fv(vc, false, this.v.vN());
            H.uniformMatrix4fv(iL, false, this.v.Na());
            H.uniform1f(cD, K.size);
            H.uniform4f(Rl, WM[0], WM[1], WM[2], WM[3]);
            H.uniform4f(Vq, ZF[0], ZF[1], ZF[2], ZF[3]);
            H.uniform1f(Xy, fz);
            H.uniform1f(ru, iZ);
            H.uniform4f(mJ, GQ[0], GQ[1], GQ[2], GQ[3]);
            H.uniform4f(tF, wU[0], wU[1], wU[2], wU[3]);
            H.uniform4f(bp, A3[0], A3[1], A3[2], A3[3]);
            H.uniform1f(Wc, Mb);
            H.uniform3f(iI, LX[0], LX[1], LX[2]);
            H.uniform4f(wk, kc[0], kc[1], kc[2], kc[3]);
            H.uniform1i(OY, 1);
            H.activeTexture(H.TEXTURE1);
            H.bindTexture(H.TEXTURE_2D, s5.PL);
            H.uniform1f(a2, this.v.bQ);
            H.uniformMatrix4fv(Jj, false, this.v.w2);
            H.uniform1i(jA, 0);
            return 0;
        } else return -1;
    };
    this.fb = function(qV) {
        H.disableVertexAttribArray(this.Z);
        H.disableVertexAttribArray(this.o);
        H.activeTexture(H.TEXTURE1);
        H.bindTexture(H.TEXTURE_2D, null);
        H.useProgram(null);
        return 0;
    };
};
bG.prototype = new w6();