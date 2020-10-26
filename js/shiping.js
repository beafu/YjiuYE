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
         //夜间模式
         var mulu=document.getElementsByClassName("mulu")[0]
         var html1=template("a",data)
         mulu.innerHTML=html1
 
         var whiteday=document.getElementById("whiteday")
         var whiteday_img=document.getElementById("whiteday_img")
         var whiteday_a=document.getElementById("whit_a")
         var main=document.getElementsByClassName("main")[0]
 
         var mulu_li=mulu.getElementsByTagName("li")
         var mu_a=mulu.getElementsByTagName("a")
         var mu_cd=mulu_li.length
         var mu_ul=mulu.getElementsByTagName("ul")[0]
         var tit=mulu.getElementsByClassName("tit")[0]
         var gun=mulu.getElementsByClassName("gun")[0]
         var mu_p=mulu.getElementsByClassName("mu_p")[0]
         var left_tit=document.getElementById("left_tit")
         var tag=true
         whiteday.onclick=function(){
             if(tag){
                 main.style.background="#F7F7F7"
                 mulu.style.background="white"
                 mu_p.style.background="white"
                 tit.style.background="white"
                 tit.style.color="blue"
                 gun.style.display="block"
                 left_tit.style.color="black"
                 mu_ul.style.background="white"
                 whiteday_img.src="./img/zg_shipincz05.png"
                 whiteday_a.innerHTML="夜间模式"
                 tag=false
             }else{
                 main.style.background="#1F1F1F"
                 mulu.style.background="#1F1F1F"
                 mu_p.style.background="#1F1F1F"
                 tit.style.background="#323232"
                 tit.style.color="#999999"
                 gun.style.display="none"
                 left_tit.style.color="white"
                 mu_ul.style.background="#1F1F1F"
                 whiteday_img.src="./img/zg_shipincz04.png"
                 whiteday_a.innerHTML="白天模式"
                 tag=true
             }
         }
         var  kong_arr=["./voicd/海1.mp4","./voicd/海2.mp4","./voicd/海3.mp4","./voicd/海4.mp4","./voicd/海5.mp4","./voicd/海6.mp4"]
         var vv=document.getElementsByTagName("video")
         for(var i=0;i<mu_cd;i++){
             mulu_li[i].index=i
             mulu_li[i].onclick=function(){
                     for(var j=0;j<mu_cd;j++){
                         mulu_li[j].style.color="#999999"
                         mu_a[j].style.color="#999999"
                     }
                     this.style.color="#FF6105"
                     mu_a[this.index].style.color="#FF6105" 
                     video.src=kong_arr[this.index]
                 }  
         }
 
         //视屏控件
        var kong_play=document.getElementById("kong_play")
        var video=document.getElementById("v")
        var zongTime=document.getElementById("zongTime")
        var kong_all=document.getElementById("kong_all")
        var playCur=document.getElementById("playCur")
        var slideBtn=document.getElementById("slideBtn")
        var slide=document.getElementById("slide")
        var ta=true
        //视屏播放
        kong_play.onclick=function(){
            if(ta){
                this.className="kong_play1"
                video.play()
                ta=false
            }else{
                this.className="kong_play"
                video.pause()
                ta=true
            }
        }
        //视屏总时长
        video.oncanplay=function(){
            zongTime.innerText=sumTime(video.duration)
            //duration显示视频的总时长
        }
        var ko_t="";
        function sumTime(time){
            var h=addtime(parseInt(time/3600))
            var mis=addtime(parseInt(time%3600/60))
            var sec=addtime(parseInt(time%60))
            ko_t=h+":"+mis+":"+sec
            return ko_t;
        }
        function addtime(item){
            return item<10?"0"+item:item;
        }
        //视频全屏
        kong_all.onclick=function(){
            if(video.requestFullscreen()){
                video.requestFullscreen()
            }
        }
        //视频播放显示时间
        video.ontimeupdate=function(){
            playCur.innerText=sumTime(video.currentTime)
            slide.style.width = video.currentTime * 550 / video.duration + "px"
            slideBtn.style.left = video.currentTime * 500 / video.duration + "px"
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
        //   相关内容的排序
        var class_ul=document.getElementById("class_ul")
        var dta=data.sjon.sjarr
        var arr1=[]
        for(var i=0;i<dta.length;i++){
            arr1.push(dta[i].nr)
        }
        // console.log(arr1)
        var result = [];
        for (let i = 0; i < arr1.length; i++) {
        result = result.concat(arr1[i]);
        }
        // console.log(result)
        result.sort(function(x,y){
        return  Date.parse(y.time)-Date.parse(x.time) 
        })
        var a = {"aa":result}
        var html3=template("c",a)
        class_ul.innerHTML=html3
        // console.log(html3)

        //用户追加评价
        var  ping=document.getElementById("ping")
        var fa=document.getElementsByClassName("fa")[0]
        var append=document.getElementsByClassName("append")[0]
        var b=document.getElementById("one")
        var j=0
        fa.onclick=function(){
            var value=ping.value
            if(value.length>200){
                alert("评论不能超过200个字")
            }else{
                var dl=document.createElement("dl")
                var dt=document.createElement("dt")
                var dd=document.createElement("dd")
                var now=new Date()
                var d_date=now.toLocaleDateString()
                var d_time=now.toLocaleTimeString()
                var dy=d_date+"-"+d_time
                dt.innerHTML="<img src=\"./img/login_icon.png\"/>"
                dd.innerHTML="<span>我是一只小小鸟<span>"+dy+"</span></span><p>"+value+"</p><a href='javascript:void(0)'>删除</a>"
                dl.appendChild(dt)
                dl.appendChild(dd)
                append.appendChild(dl)
                j++
                b.innerText=j
                ping.value=""
            }
            var app_a=append.getElementsByTagName("a")
            console.log(app_a)
            for(var i=0;i<app_a.length;i++){
                app_a[i].onclick=function(){
                    j--;
                    b.innerText=j
                    this.parentNode.parentNode.remove()
                }
            }
        }

    }