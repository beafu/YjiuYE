var img1=document.getElementsByClassName("img1")[0]
var input=document.getElementById("input")
var header=document.getElementsByTagName("header")[0]
function show(data){
    //首页
    var img3=document.getElementById("img3")
    var er=document.getElementsByClassName("er")[0]
    var one=document.getElementById("ul-one")
    var html2=template("b",data)

    one.innerHTML=html2
    var last=one.lastElementChild ||one.lastChild
    var last_div=last.lastElementChild ||last.lastChild
    var frist=one.firstElementChild || one.firstChild
    var next=frist.nextElementSibling || frist.nextSibling
    var ul_two=document.getElementById("ul_two")
        last.onmouseover=function(){
            last_div.style.display="block"
        }
        last.onmouseout=function(){
            last_div.style.display="none"
        }
        next.onmouseover=function(){
            ul_two.style.display="block"
        }
        next.onmouseout=function(){
            ul_two.style.display="none"
        }
        img1.onmouseover=function(){
            input.style.opacity="1"
        }
        img3.onmouseover=function(){
            er.style.display="block"
        }
        img3.onmouseout=function(){
            er.style.display="none"
        }
    //轮播图
    var n=0
    var box=document.getElementsByClassName("box")[0]
    var ul=box.getElementsByTagName("ul")[0]
    var p1=box.getElementsByTagName("p")[0]
    var span=box.getElementsByTagName("span")
    var box_left=document.getElementById("left")
    var box_right=document.getElementById("right")
    var str=""
    var str1=""
    for(var i=0;i<data.lunbo.length;i++){
        str+="<li><img src=\""+data.lunbo[i].src+"\"></li>"
        str1+="<span></span>"
    }
    ul.innerHTML=str
    p1.innerHTML=str1
    var li=ul.getElementsByTagName("li")
    for(var i=0;i<span.length;i++){
        span[i].index=i
        span[i].onclick=function(){
            for(var j=0;j<span.length;j++){
                span[j].className=""
            }
            this.className="acitv"
            move(ul,"left",40,-1600*this.index,20);
            n=this.index
        }
    }
    var timer= setInterval(time,3000)
    function time(){
        n++;
        if(n==data.lunbo.length){
            n=0;
        }
        for(var i=0;i<span.length;i++){
            span[i].className=""
        }
        span[n].className="acitv"
        move(ul,"left",40,-1600*n,20);
    }
    box.onmouseover=function(){
        clearInterval(timer)
        box_right.style.display="block"
        box_left.style.display="block"
    }
    var i=0
    var img=ul.getElementsByTagName("img")
    // console.log(img) 
    box_left.onclick=function(){
        i++;
       
        if(i==data.lunbo.length){
            i=0;
        }
        for(var j=0;j<span.length;j++){
            span[j].className=""
            }
        move(ul,"left",40,-1600*i,20)
        span[i].className="acitv"
    }
    box_right.onclick=function(){
        i--;
        if(i<0){
            i=data.lunbo.length-1;
        }
        for(var j=0;j<span.length;j++){
            span[j].className=""
            }
        move(ul,"left",40,-1600*i,20)
        span[i].className="acitv"
    }
    box.onmouseout=function(){
        timer= setInterval(time,3000)
        box_right.style.display="none"
        box_left.style.display="none"
    }
    var qun=document.getElementsByClassName("qun")[0]
    var html3=template("c",data)
    qun.innerHTML=html3
    
    var hnav=document.getElementById("hnav")
    var html=template("a",data);
    hnav.innerHTML=html

    var content=document.getElementsByClassName("content")[0]
    var left=content.getElementsByClassName("left")[0]
    var html4=template("d",data)

    left.innerHTML=html4

    var right=content.getElementsByClassName("right")[0]
    var right_ul=right.getElementsByTagName("ul")[0]
    var html5=template("e",data)
    right_ul.innerHTML=html5
    
    var li=right.getElementsByTagName("li")
    var left_one=content.getElementsByClassName("left_one")
    var right_p=content.getElementsByClassName("right_p")
    // console.log(left_one)
    for(var i=0;i<li.length;i++){
        li[i].index=i
        li[i].onmouseover=function(){
            for(var j=0;j<li.length;j++){
                li[j].style.background=""
                left_one[j].style.display="none"
                right_p[j].style.color=""
            }
            this.style.background="pink"
            left_one[this.index].style.display="block"
            right_p[this.index].style.color="red"
        }
    }

    //精品
    var jing=document.getElementsByClassName("jingp")[0]
    var html6=template("f",data.sjon)
    jing.innerHTML=html6

    var tou_li=jing.getElementsByClassName("tou_li")
    var jing_con=jing.getElementsByClassName("jing_content")
    jing_con[0].style.display="block"
    var touCd=tou_li.length
    for(var i=0;i<touCd;i++){
        tou_li[i].index=i
        tou_li[i].onmouseover=function(){
            for(var j=0;j<touCd;j++){
                jing_con[j].style.display="none"
            }
            jing_con[this.index].style.display="block"
        }
    }
    // 免费课程
    var jing1=document.getElementsByClassName("jingp")[1]
    var html7=template("g",data.sjtwo)
    jing1.innerHTML=html7

    var tou_lione=jing1.getElementsByClassName("tou_li")
    var jing_conone=jing1.getElementsByClassName("jing_content")
    jing_conone[0].style.display="block"
    var tou_Cd=tou_lione.length
    for(var i=0;i<tou_Cd;i++){
        tou_lione[i].index=i
        tou_lione[i].onmouseover=function(){
            for(var j=0;j<tou_Cd;j++){
                jing_conone[j].style.display="none"
            }
            jing_conone[this.index].style.display="block"
        }
    }
    // 就业面授班
    var jing2=document.getElementsByClassName("jingp")[2]
    var html8=template("h",data.sjthree)
    jing2.innerHTML=html8

    var tou_li2=jing2.getElementsByClassName("tou_li")
    var jing_con2=jing2.getElementsByClassName("jing_content")
    jing_con2[0].style.display="block"
    var tou_Cd2=tou_li2.length
    for(var i=0;i<tou_Cd2;i++){
        tou_li2[i].index=i
        tou_li2[i].onmouseover=function(){
            for(var j=0;j<tou_Cd2;j++){
                jing_con2[j].style.display="none"
            }
            jing_con2[this.index].style.display="block"
        }
    }
    //底部
    var foot=document.getElementById("foot")
    var html9=template("k",data.foot1)
    foot.innerHTML=html9

    var sp=foot.getElementsByTagName("span")
    var p=foot.getElementsByTagName("p")
    p[0].className="d_gs1"
    console.log(p)
    for(var i=0;i<sp.length;i++){
        sp[i].index=i
        sp[i].onmouseover=function(){
            for(var j=0;j<sp.length;j++){
                sp[j].style.color=""
                p[j].className=""
            }
            this.style.color="red"
            p[this.index].className="d_gs1"
        }
    }
    //固定项目
    var gun_img=document.getElementsByClassName("gun_img")
    var gun_two=document.getElementsByClassName("gun_two")
        gun_img[0].onmouseover=function(){
            gun_img[0].src="./img/offcn-icon_06.png"
            gun_two[0].style.display="block"
          }
          gun_img[0].onmouseout=function(){
            gun_img[0].src="./img/icon_08.png"
            gun_two[0].style.display="none"
          }
          gun_img[1].onmouseover=function(){
            gun_img[1].src="./img/offcn-icon_11.png"
            gun_two[1].style.display="block"
          }
          gun_img[1].onmouseout=function(){
            gun_img[1].src="./img/icon_12.png"
            gun_two[1].style.display="none"
          }
          gun_img[2].onmouseover=function(){
            gun_img[2].src="./img/offcn-icon_20.png"
            gun_two[2].style.display="block"
          }
          gun_img[2].onmouseout=function(){
            gun_img[2].src="./img/icon_19.png"
            gun_two[2].style.display="none"
          }
    
    //回到顶部
    var bt=document.getElementById("bt")
    window.onscroll = function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(top)
        if(top>400){
            bt.style.display = "block"
        }else{
            bt.style.display = "none"
        }
    }
    bt.onmouseover=function(){
        bt.style.background="#1A84F0"
        bt.style.color="white"
    }
    bt.onmouseout=function(){
        bt.style.background=""
        bt.style.color="#1A84F0"
    }
    bt.onclick = function(){
     document.documentElement.scrollTop = 0;

    }

}
