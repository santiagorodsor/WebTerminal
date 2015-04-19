module.exports = new CommandsManager();

function CommandsManager(){
	this.commandList = require("fs").readFileSync("./commands.json","utf-8");
}

CommandsManager.prototype ={
	list:function(commandListId){
		var command = this.commandList[commandListId];
		var clc = require("./commandLineConverter.js");
		clc.call(command);
	}
}