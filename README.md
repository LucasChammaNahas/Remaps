# Fonts:
  - Nancyj
  - Colossal


# Structure

  Vim:
  {
    comment: "",
    before: "",
    after: "",
    commands: [],
  }

  VS Code: 
  {
    comment: "",
    key: "",
    command: "",
    when: "",
  }
  

  Obs:
    - 'command' is used for both in the JS object
    - 'before' is only present in Vim. 'key' is only present in vs code
    - 'command' and 'commands' are one command only in the current logic
    - If 'key' or 'before' are arrays, for each item, a new rule with the same command must be created