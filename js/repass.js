test();
	function test(){
		var newPass_js=document.getElementById('newPass_js');
  	var newPassMsg_js=document.getElementById('newPassMsg_js');
  	var renewPass_js=document.getElementById('renewPass_js');
  	var renewPassMsg_js=document.getElementById('renewPassMsg_js');
  	//修改密码页面校验
  	newPass_js.onfocus=function(){
    	newPassMsg_js.style.display='block';
    	newPassMsg_js.innerHTML='<i class="iconfont prompt">&#xe657;</i>只能输入6-20个字母、数字、下划线.';
  	}
  	newPass_js.onblur=function(){
   		var re=/^[0-9A-Za-z]{6,20}$/;
      if(re.test(this.value)){
        newPassMsg_js.innerHTML='<i class="iconfont ok">&#xe644;</i>';
      }
      else if(this.value==""){
        newPassMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>不能为空';
      }
      else{
        newPassMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>密码格式不对';
      }
  	}
	  renewPass_js.onblur=function(){
    	if(this.value!=newPass_js.value){
    	  renewPassMsg_js.style.display='block';
    	  renewPassMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>两次密码不一致';
    	}
    	else if(this.value==""){
    		renewPassMsg_js.innerHTML='<i class="iconfont error">&#xe60c;</i>不能为空';
    	}
    	else{
    	  renewPassMsg_js.style.display='block';
    	  renewPassMsg_js.innerHTML='<i class="iconfont ok">&#xe644;</i>';
    	}
  	}	
	}