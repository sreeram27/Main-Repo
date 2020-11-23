trigger SaiTrigger on Account (before insert) {

    for(Account a2: Trigger.New) {

        a2.Description = 'Account Description for this AC sa1i1111111111111';

    }

}