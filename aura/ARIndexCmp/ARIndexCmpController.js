({
    
    testFunction : function(component, event, helper){
      
        var temp = component.get("v.loginData.InstanceURL__c");
        component.set("v.completeLoginData.FirstLastName__c", "Sampath");
        alert(component.get("v.completeLoginData.FirstLastName__c"));
        
    },
    
    loginAuthorizer : function(component, event, helper) {
        if(helper.validateLogin(component)){
            var spinnerDivTarget = component.find('spinnerDiv');
            
            if($A.util.hasClass(spinnerDivTarget, 'hide')){
               	$A.util.removeClass(spinnerDivTarget, 'hide');
            	$A.util.addClass(spinnerDivTarget, 'show');
            }		
            //$A.util.removeClass(spinnerDivTarget, 'hide');
            //$A.util.addClass(spinnerDivTarget, 'show');test
            
            var loginFieldsData = component.get("v.loginData");
            helper.loginCallOut(component, JSON.parse(JSON.stringify(loginFieldsData)), helper);
        }
    },
    
    doInit : function(component, event, helper) {
        var loginErrorDiv = component.find("loginerrordiv");
        loginErrorDiv.set("v.value", '');
        
        var spinnerDivTarget = component.find('spinnerDiv');
        $A.util.addClass(spinnerDivTarget, 'hide');
    },
    
    formPress : function(component, event, helper) {
        if (event.keyCode === 13) {
            if(helper.validateLogin(component)){
                var spinnerDivTarget = component.find('spinnerDiv');
                $A.util.removeClass(spinnerDivTarget, 'hide');
                $A.util.addClass(spinnerDivTarget, 'show');
                var loginFieldsData = component.get("v.loginData");
                helper.loginCallOut(component, JSON.parse(JSON.stringify(loginFieldsData)), helper);
            }
        }
    },
    
    passwordField : function(component, event, helper) {
        //console.log('sampath');
    },
    
})