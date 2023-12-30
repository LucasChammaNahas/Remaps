export function generateCorrectVimStructure(command) {
  const updatedCommand = {
    comment: command.comment,
    before: splitInputCommands(command.before),
  };

  if ('after' in command) {
    updatedCommand.after = splitInputCommands(command.after);
  }

  if ('command' in command) {
    updatedCommand.commands = [command.command];
  }

  return updatedCommand;
}

export function generateCorrectCodeStructure(command) {
  const updatedCommand = {
    comment: command.comment,
    key: command.key,
    command: command.command,
  };

  if ('when' in command) {
    updatedCommand.when = command.when;
  }

  if ('after' in command) {
    updatedCommand.args = {
      after: splitInputCommands(command.after),
    };
  }

  return updatedCommand;
}

function splitInputCommands(input) {
  const commandKeys = [];
  let i = 0;
  const length = '<leader>'.length;

  while (i < input.length) {
    if (input.substring(i, i + length) === '<leader>') {
      commandKeys.push('<leader>');
      i += length;
    } else {
      commandKeys.push(input[i]);
      i++;
    }
  }

  return commandKeys;
}
