var async = require("async");
function CommandsManager(){
	var commandsTmp= require("fs").readFileSync("./commands.json","utf-8");
	this.commandList=JSON.parse(commandsTmp);
}

CommandsManager.prototype ={
	list:function(commandListId){
		var command = this.commandList[commandListId];
		var clc = require("./commandLineConverter.js");
		clc.call(command[0]);
		
	}
}
module.exports = new CommandsManager();