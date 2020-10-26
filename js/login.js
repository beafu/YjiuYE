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
      var img_one=document.getElementById("img1")
      var img_two=document.getElementById("img2")
      var img_3=document.getElementById("img4")
      console.log(img_3)
      img_one.onmouseover=function(){
        img_one.src="./img/dsh_h_03.jpg"
      }
      img_one.onmouseout=function(){
        img_one.src="./img/dsf_03.jpg"
      }
      img_two.onmouseover=function(){
        img_two.src="./img/dsh_h_07.jpg"
      }
      img_two.onmouseout=function(){
        img_two.src="./img/dsf_07.jpg"
      }
      img_3.onmouseover=function(){
        img_3.src="./img/dsh_h_05.jpg"
      }
      img_3.onmouseout=function(){
        img_3.src="./img/dsf_05.jpg"
      }

      var form1=document.getElementById("form1")
      var em=form1.getElementsByTagName("em")
      var num=form1.num
      var pas=form1.pas

      //手机号
      num.onblur=num_fn
      var pat=/^\d{11}$/
      var pat1=/[^\d]/
      function num_fn(){
        var num_value=num.value
        if(num_value==""){
          em[0].innerText="手机号不能为空"
          return false 
        }else if(pat.exec(num_value)==null){
          em[0].innerText="手机号要是11位"
          return false
        }else if(pat1.test(num_value)==true){
          em[0].innerText="手机号要是数字"
          return false
        }else{
          em[0].innerText="手机号正确"
        }
        return true
      }
      //密码验证
      pas.onblur=pas_fn
      var pas_pat=/^[A-Z][0-9a-z]{6,12}$/
      function pas_fn(){
        var pas_value=pas.value
        if(pas_value==""){
          em[1].innerText="请输入密码"
          return false
        }else if(pas_pat.exec(pas_value)==null){
          em[1].innerText="开头大写，长度6-12"
          return false
        }else{
          em[1].innerText="密码格式正确"
        }
        return true
      }
      var a=data.shuj
      var str = JSON.stringify(a);
      localStorage.arr = str;
      var data = JSON.parse(localStorage.arr);
      //将需要比对的数据进行循环
      var login=document.getElementById("login")
      var tag = false;  //默认为登录不成功
      login.onclick=function(){
        for(var i = 0; i < data.length;i++){
          if(data[i].number==num.value && data[i].passwor==pas.value){
              tag = true;
              break;
              return false
          }
      }
      //来进行判断
      if(tag==true){
          alert('用户登陆成功');
          //调用表单的方法来进行表单的提交
          form1.submit();
      }else{
          alert('用户登录失败')
          return false
      }
      }
     
}