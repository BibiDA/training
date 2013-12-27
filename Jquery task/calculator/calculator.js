$(document).ready(function(){
	var num1;
	var num2="";
	var op="";
	$('input:button').click(function(){
		if($(this).hasClass("operand"))
		{
			if(op=="")
			{
				num1 = $('#field input[type="text"]').val()+$(this).val();
				$('#field input[type="text"]').val(num1);
			}
			else
			{
				num2+=$(this).val();
				$('#field input[type="text"]').val(num2);
			}
		}
		else if($(this).hasClass("operator"))
		{
			op=$(this).val();
			$('#field input[type="text"]').val(op);
		}
		else if($(this).hasClass("Clear"))
		{
			op="";
			num1="";
			num2="";
			$('#field input[type="text"]').val("");
		}
		else
		{
			var final=num1+op+num2;
			console.log(final);
			var res=eval(final);
			$('#field input[type="text"]').val(res);
			num1=res;
			num2="";
			op="";
		}
	});		
});
