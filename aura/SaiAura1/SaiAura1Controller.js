({
	getApproversList: function(component,event,helper){
       var salesArea = component.find("sales_Area").get("v.value");
      if(salesArea == '' ){
            helper.showToastError(component,'Error','Please provide Region, Sales Area & Sub Sales Area');
           $A.util.addClass(component.find("sales_Region"),"highlighter");
       }
}
		
	
})