var spawn = require('child_process').spawn;    

function CommandLineConverter(){

}
CommandLineConverter.prototype ={
	call : function(command,emitter){
		// debugger;
		console.log("spawning command: " + command);
		var splittedCommand = this.commandSplit(command);
		var command = spawn(splittedCommand["command"],splittedCommand["arguments"]);
		command.stdout.on("data", function(data){
			// var formattedData = "CLC-STDOUT : \n"+ data;
			var formattedData = ""+data;
			console.log(formattedData);
			if(emitter!=null){
				emitter.emit("command out",formattedData);
			}
		});
		command.stderr.on("data", function(data){
			// var formattedData = "CLC-STDERR : \n"+ data;
			var formattedData = ""+data;
			console.log(formattedData);
			if(emitter!=null){
				emitter.emit("command out",formattedData);
			}
		});
		command.stderr.on("close", function(data){
			// var formattedData = "CLC-CLOSE : \n"+ data;
			var formattedData = ""+data;
			console.log(formattedData + "Child process exited with code " + data);
			if(emitter!=null){
				emitter.emit("command close",formattedData);
			}
		});
	},
	commandSplit:function(fullcommand){
		console.log("splitting command: " + fullcommand);
		var splittedFullCommand = fullcommand.split(" ");
		var commandName = splittedFullCommand.shift();
		return {"command":commandName,
		"arguments":splittedFullCommand};
	}
}

module.exports = new CommandLineConverter();