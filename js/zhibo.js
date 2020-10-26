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
        var content=document.getElementsByClassName("content")[0]
        var left_ll=document.getElementById("left")
        var html4=template("d",data)
        left_ll.innerHTML=html4

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
    //系统直播
    var selic=document.getElementsByClassName("selic")[0]
    var html1=template("a",data.zhibo1)
    selic.innerHTML=html1
    var tou_li=selic.getElementsByClassName("tou_li")
    var se_con=selic.getElementsByClassName("se_con")
    se_con[0].style.display="block"
    for(var i=0;i<tou_li.length;i++){
        tou_li[i].index=i
        tou_li[i].onmouseover=function(){
            for(var j=0;j<tou_li.length;j++){
                se_con[j].style.display="none"
            }
            se_con[this.index].style.display="block"
        }
    }
    var selic1=document.getElementsByClassName("selic")[1]
    var html3=template("c",data.zhibo2)
    selic1.innerHTML=html3
    var tou_li1=selic1.getElementsByClassName("tou_li")
    var se_con1=selic1.getElementsByClassName("se_con")
    se_con1[0].style.display="block"
    for(var i=0;i<tou_li1.length;i++){
        tou_li1[i].index=i
        tou_li1[i].onmouseover=function(){
            for(var j=0;j<tou_li1.length;j++){
                se_con1[j].style.display="none"
            }
            se_con1[this.index].style.display="block"
        }
    }
}