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
var oY = function() {
    this.jj = "";
    this.Fw = null;
    this.R6 = null;
    this.id = "";
};
var CmiLayerBrowser = function(Xg, U0) {
    var nf = null;
    var _c = null;
    var i3 = null;
    var vW = Xg;
    var Lv = 0;
    var J8 = "\x4c\x61\x79\x65\x72";
    _c = document.getElementById(U0);
    var Jh = function(a, b) {
        if (a.jj == b.jj) return 0;
        else if (a.jj < b.jj) return -1;
        else return 1;
    };
    this.buildLayerList = function(uw, sort, HI, Ua) {
        var Pc;
        var PV;
        var Sq = 0;
        var dr = true;
        if ((uw == null) || (_c == null)) return -1;
        i3 = uw;
        if ((Ua == undefined) || (Ua.length == 0)) J8 = i3.ty();
        else J8 = Ua;
        nf = new Array();
        PV = i3.getLayerCollection();
        for (var G = 0; G < PV.length; G++) {
            dr = PV[G].contentVisible;
            Sq++;
            Pc = new oY();
            Pc.R6 = PV[G];
            Pc.jj = PV[G].FI();
            Pc.id = "\x4c\x61\x79" + Sq.toString();
            nf.push(Pc);
        }
        if (sort) nf.sort(Jh);
        if (HI >= 1) {
            Lv = HI;
        }
    };
    this.switchCollectionState = function(DU) {
        if ((nf == null) || (_c == null)) return -1;
        var BL = DU.split("\x2d");
        if (BL[0] == "\x63\x6f\x6c\x6c\x61\x70\x73") Lv = 1;
        else Lv = 2;
        return this.rebuildLayerViewTable();
    };
    this.switchVisibilityState = function(DU) {
        if ((nf == null) || (_c == null)) return -1;
        var BL = DU.split("\x2d");
        var Lw = null;
        var OA = document.getElementById(DU);
        Lw = la(nf, BL[1]);
        if (Lw != null) {
            if (OA.checked) {
                Lw.R6.contentVisible = true;
            } else {
                Lw.R6.contentVisible = false;
                Lw.R6.contentHighlighted = false;
            }
            if (i3) i3.zf().drawScene();
            return this.rebuildLayerViewTable();
        }
        return -1;
    };
    this.switchHighlightState = function(DU) {
        if ((nf == null) || (_c == null)) return -1;
        var BL = DU.split("\x2d");
        var Lw = null;
        var OA = document.getElementById(DU);
        Lw = la(nf, BL[1]);
        if (Lw != null) {
            if (OA.checked) {
                if ((Lw.R6) && (Lw.R6.contentVisible)) Lw.R6.contentHighlighted = true;
            } else {
                Lw.R6.contentHighlighted = false;
            }
            if (i3) i3.zf().drawScene();
            return this.rebuildLayerViewTable();
        }
        return -1;
    };
    var la = function(gc, V6) {
        var Lw = null;
        for (var G = 0; G < gc.length; G++) {
            if (gc[G].id == V6) return gc[G];
        }
        return null;
    };
    this.rebuildLayerViewTable = function() {
        if ((nf == null) || (_c == null)) return -1;
        var body = _c.getElementsByTagName("\x74\x62\x6f\x64\x79")[0];
        while (body.hasChildNodes()) {
            body.removeChild(body.firstChild);
        }
        if (nf.length > 0) {
            if (Lv > 0) {
                SM(body, J8);
                zs(body, nf, "\x26\x6e\x62\x73\x70\x3b\x26\x6e\x62\x73\x70\x3b");
            } else {
                zs(body, nf, "");
            };
        }
        return 0;
    };
    var SM = function(tf, jj) {
        var tn;
        var sH;
        var jT = "";
        var prefix = "";
        tn = document.createElement("\x74\x72");
        sH = document.createElement("\x74\x64");
        if (Lv == 2) jT = "\x3c\x63\x6f\x64\x65\x3e" + prefix + "\x3c\x2f\x63\x6f\x64\x65\x3e" + "\x3c\x61\x20\x69\x64\x3d\x22\x63\x6f\x6c\x6c\x61\x70\x73\x2d\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72" + "\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x65\x28\x27\x63\x6f\x6c\x6c\x61\x70\x73\x2d\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72\x27\x29\x22\x3e\x3c\x63\x6f\x64\x65\x3e\x2d\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x63\x6f\x64\x65\x3e" + jj + "\x3c\x2f\x61\x3e\x26\x6e\x62\x73\x70\x3b";
        else jT = "\x3c\x63\x6f\x64\x65\x3e" + prefix + "\x3c\x2f\x63\x6f\x64\x65\x3e" + "\x3c\x61\x20\x69\x64\x3d\x22\x65\x78\x70\x61\x6e\x64\x2d\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72" + "\x22\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x53\x74\x61\x74\x65\x28\x27\x65\x78\x70\x61\x6e\x64\x2d\x43\x6f\x6c\x6c\x65\x63\x74\x6f\x72\x27\x29\x22\x3e\x3c\x63\x6f\x64\x65\x3e\x2b\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x63\x6f\x64\x65\x3e" + jj + "\x3c\x2f\x61\x3e\x26\x6e\x62\x73\x70\x3b";
        sH.style.cursor = "\x70\x6f\x69\x6e\x74\x65\x72";
        sH.innerHTML = jT;
        tn.appendChild(sH);
        sH = document.createElement("\x74\x64");
        jT = "";
        sH.innerHTML = jT;
        tn.appendChild(sH);
        sH = document.createElement("\x74\x64");
        jT = "";
        sH.innerHTML = jT;
        tn.appendChild(sH);
        tf.appendChild(tn);
        return 0;
    };
    var zs = function(tf, gc, prefix) {
        var tn;
        var sH;
        var jT = "";
        if (Lv == 1) return 0;
        for (var G = 0; G < gc.length; G++) {
            tn = document.createElement("\x74\x72");
            sH = document.createElement("\x74\x64");
            jT = "\x3c\x63\x6f\x64\x65\x3e" + prefix + "\x3c\x2f\x63\x6f\x64\x65\x3e" + gc[G].jj;
            sH.innerHTML = jT;
            tn.appendChild(sH);
            sH = document.createElement("\x74\x64");
            if (gc[G].R6.contentVisible) jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x53\x68\x2d" + gc[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x53\x74\x61\x74\x65\x28\x27\x53\x68\x2d" + gc[G].id + "\x27\x29\x22\x20\x63\x68\x65\x63\x6b\x65\x64\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            else jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x53\x68\x2d" + gc[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x53\x74\x61\x74\x65\x28\x27\x53\x68\x2d" + gc[G].id + "\x27\x29\x22\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            sH.innerHTML = jT;
            tn.appendChild(sH);
            sH = document.createElement("\x74\x64");
            if (gc[G].R6.contentHighlighted) jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x48\x6c\x2d" + gc[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65\x28\x27\x48\x6c\x2d" + gc[G].id + "\x27\x29\x22\x20\x63\x68\x65\x63\x6b\x65\x64\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            else jT = "\x3c\x69\x6e\x70\x75\x74\x20\x74\x79\x70\x65\x3d\x27\x63\x68\x65\x63\x6b\x62\x6f\x78\x27\x20\x69\x64\x3d\x27\x48\x6c\x2d" + gc[G].id + "\x27\x20\x6f\x6e\x63\x6c\x69\x63\x6b\x3d\x22\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3a" + vW + "\x2e\x73\x77\x69\x74\x63\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65\x28\x27\x48\x6c\x2d" + gc[G].id + "\x27\x29\x22\x3e\x3c\x2f\x69\x6e\x70\x75\x74\x3e";
            sH.innerHTML = jT;
            tn.appendChild(sH);
            tf.appendChild(tn);
        }
        return 0;
    };
};