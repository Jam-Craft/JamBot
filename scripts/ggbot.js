// Description:
//  GGGGGGGGGG
//
// Commands:
//  gg - GG
//  wat - watman!
//  
//

module.exports = function(robot) { // Welcome to hubot xD
    
    //GG!
    robot.hear(/\bgg\b/i, function(msg){
        msg.send("http://youtu.be/5es0NNtSNCU");
    });
	
	//wat
	robot.hear(/\bwat\b/i, function(msg){
		msg.send("http://www-static.weddingbee.com/pics/292233/Wat8.jpg")
	});
	
    robot.hear(/.*((slain by)|(killed by)|(blew up)|(pummeled by)|(drowned)|(died)|(went up in)|(burned to )|(tried to swim in)|(suffocated in a )|(starved to )|(was pricked to)|(hit the ground too)|(fell out of the)|(was shot by)).*/i,function(msg){
		if(msg.user.name === "PoppysServer"){
			msg.send("GGGGGG");
		}
    });
	
	//sleepy
	robot.hear(/\b(bed|sleep|sleepy)\b/i, function(msg){
		msg.reply("http://img1.wikia.nocookie.net/__cb20110118013105/glee/images/a/aa/SLEEP_IS_FOR_THE_WEAK.jpg");
	});
	
	//destory the eagle
	robot.hear(/\b(eagle_gunner|brendon)\b/i, function(msg){
		msg.reply("You know eagle_gunner isn't a god, right?")
	})
	
}
