var times = 8;
            var r = new Array ();
            var i = 0;
            
            while (i < times) {
                r[i] = Math.floor(Math.random()*times);
                i ++;
            }
            
            var a = Math.floor(Math.random());
            var b = Math.floor(Math.random());
            var c = Math.floor(Math.random());
            var d = Math.floor(Math.random());
            var e = Math.floor(Math.random());
            var f = Math.floor(Math.random());
            var g = Math.floor(Math.random());
            var h = Math.floor(Math.random());
            var l = Math.floor(Math.random());
            var m = Math.floor(Math.random());
            
            var jb = new Array ();
            jb[0] = "1";
            jb[1] = "2";
            jb[2] = "3";
            jb[3] = "4";
            jb[4] = "5";
            jb[5] = "6";
            jb[6] = "7";
            jb[7] = "8";
            
            var buffer = new Array();
            var j = 0;
            var k = 0;
            
            for(j = 0; j < times; j ++) {
                for(k = 0; k < times; k ++) {
                    if(r[j] == k) {
                        buffer[j] = jb[k];
                        break;
                    }
                }
            }
            
            function jb0() {
                document.getElementById("jb0").innerHTML = buffer[0];
            }
            function jb1() {
                document.getElementById("jb1").innerHTML = buffer[1];
            }
            function jb2() {
                document.getElementById("jb2").innerHTML = buffer[2];
            }
            function jb3() {
                document.getElementById("jb3").innerHTML = buffer[3];
            }
            function jb4() {
                document.getElementById("jb4").innerHTML = buffer[4];
            }
            function jb5() {
                document.getElementById("jb5").innerHTML = buffer[5];
            }
            function jb6() {
                document.getElementById("jb6").innerHTML = buffer[6];
            }
            function jb7() {
                document.getElementById("jb7").innerHTML = buffer[7];
            }