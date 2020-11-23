trigger Leadtrigger1 on Lead (before insert) {

    for(Lead a2: Trigger.New) {

        a2.Description = 'Lead Description for this HelloWorl1dTriggerTest';

    }  

}