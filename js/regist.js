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
        //表单
        var form=document.getElementById("form")
        var btn=form.getElementsByTagName("button")[0]
        var em=form.getElementsByTagName("em")
        var form_span=form.getElementsByTagName("span")[0]
        var arr=[88378,12334,34422,46556,34325,98290,21932,55065]
        var arr_shu= Math.floor(Math.random() * arr.length);
        form_span.innerText=arr[arr_shu]

        //手机号
        var number=form.number
        var pat=/^\d{11}$/
        var pat1=/[^\d]/
        number.onblur=num
        function num(){
            var num_value=number.value
            if(num_value==""){
                em[0].innerText="手机号不能为空"
                return false
            }else if(pat1.test(num_value)==true){
                em[0].innerText="手机号必须是数字"
                return false
            }else if(pat.exec(num_value)==null){
                em[0].innerText="手机号必须是11位"
                return false
            }else{
                em[0].innerText=""
            }
            return true
        }
        //密码
        var pas_pa=/^[A-Z][a-z][0-9]{6,11}$/ 
        var pas1=form.pas
        pas1.onblur=pass
        var pas_value=""
        function pass(){
            pas_value=pas1.value
            if(pas_value==""){
                em[1].innerText="请输入密码"
                return false
            }else if(pas_pa.exec(pas_value)==null){
                em[1].innerText="开头字母大写长度6-12位"
                return false
            }else{
                em[1].innerText=""
            }
            return true
        }
     //确认密码
        var aginpas=form.aginpas
        aginpas.onblur=agin_pas
        function agin_pas(){
             var agin_pass=aginpas.value 
             if(agin_pass==""){
                em[2].innerText="请输入密码"
                return false
             }else if(agin_pass!=pas_value){
                em[2].innerText="请和创建密码一致"
                return false
             }else{
                em[2].innerText=""
             }
             return true
        }
        //验证码
        var yan=form.yan
        yan.onblur=yan1
        var randnum = ""
        function rand(min,max) {
            return Math.floor(Math.random()*(max-min))+min;
            }
            form_span.onclick=function(){
            randnum=rand(10000,99999);
            form_span.innerHTML=randnum;
        
            }
            form_span.innerHTML=rand(10000,99999);
            yan.onblur = yan1
            function yan1(){
                var yan_value=yan.value
                if(yan_value!=form_span.innerHTML){
                    em[3].innerText="验证码不正确"
                    return false
                }else{
                    em[3].innerText="验证码正确"
                }
                return true
            }
        btn.onclick=function(){
            if(num() && pass() && agin_pas1() && yan1()){
                alert("注册成功")
                form.submit()
            }else{
                return false
            }
        }


        
        // console.log(form_span)
}