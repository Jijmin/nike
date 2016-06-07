function getLength(str){
    return str.replace(/[^\x00-\xff]/g,"xx").length;
	}
	my_onfocus();
	function my_onfocus(){
  var name_length=0;//全局变量
  var userList=document.getElementById('userForm_js').getElementsByTagName('input');
  var userMsg_js=document.getElementById('userMsg_js');
  var passMsg_js=document.getElementById('passMsg_js');
  var repassMsg_js=document.getElementById('repassMsg_js');
  userList[0].onfocus=function(){
    userMsg_js.style.display='block';
    userMsg_js.innerHTML='<i class="iconfont prompt">&#xe657;</i>5-25字符，推荐使用中文名.';
  }
  userList[0].onkeyup=function(){
    name_length=getLength(this.value);
  }
  //1.校验用户名
  userList[0].onblur=function(){
    //含有非法字符
    var re=/[^\w\u4e00-\u9fa5]/g;
    if(re.test(this.value)){
      userMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>含有非法字符';
    }
    //不能为空
    else if(this.value==""){
      userMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>不能为空';
    }
    //长度超过25个字符
    else if(name_length>25){
      userMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>长度超过25个字符';
    }
    //长度不小于6
    else if(name_length<6){
      userMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>长度少于6个字符';
    }
    else{
      userMsg_js.innerHTML='<i class="iconfont ok">&#xe644;</i>';
    }
  }
  userList[1].onfocus=function(){
    passMsg_js.style.display='block';
    passMsg_js.innerHTML='<i class="iconfont prompt">&#xe657;</i>只能输入6-20个字母、数字、下划线.';
  }
  //2.校验密码
  userList[1].onblur=function(){
   var re=/^[0-9A-Za-z]{6,20}$/;
        if(re.test(this.value)){
          passMsg_js.innerHTML='<i class="iconfont ok">&#xe644;</i>';
        }
        else if(this.value==""){
          passMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>不能为空';
        }
        else{
          passMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>密码格式不对';
        }
  }
  //3.校验确认密码
  userList[2].onblur=function(){
    if(this.value!=userList[1].value){
      repassMsg_js.style.display='block';
      repassMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>两次密码不一致';
    }
    else{
      repassMsg_js.style.display='block';
      repassMsg_js.innerHTML='<i class="iconfont ok">&#xe644;</i>';
    }
  }
}