local qwertyToDvorakMap = {
    ['a'] = 'a',
    ['b'] = 'x',
    ['c'] = 'j',
    ['d'] = 'e',
    ['e'] = '.',
    ['f'] = 'u',
    ['g'] = 'i',
    ['h'] = 'd',
    ['i'] = 'c',
    ['j'] = 'h',
    ['k'] = 't',
    ['l'] = 'n',
    ['m'] = 'm',
    ['n'] = 'b',
    ['o'] = 'r',
    ['p'] = 'l',
    ['q'] = '\'',
    ['r'] = 'p',
    ['s'] = 'o',
    ['t'] = 'y',
    ['u'] = 'g',
    ['v'] = 'k',
    ['w'] = ',',
    ['x'] = 'q',
    ['y'] = 'f',
    ['z'] = ';',
    ['A'] = 'A',
    ['B'] = 'X',
    ['C'] = 'J',
    ['D'] = 'E',
    ['E'] = '>',
    ['F'] = 'U',
    ['G'] = 'I',
    ['H'] = 'D',
    ['I'] = 'C',
    ['J'] = 'H',
    ['K'] = 'T',
    ['L'] = 'N',
    ['M'] = 'M',
    ['N'] = 'B',
    ['O'] = 'R',
    ['P'] = 'L',
    ['Q'] = '\'',
    ['R'] = 'P',
    ['S'] = 'O',
    ['T'] = 'Y',
    ['U'] = 'G',
    ['V'] = 'K',
    ['W'] = '<',
    ['X'] = 'Q',
    ['Y'] = 'F',
    ['Z'] = ':'
}

local dvorakToQwertyMap = {
    ['a'] = 'a',
    ['x'] = 'b',
    ['j'] = 'c',
    ['e'] = 'd',
    ['.'] = 'e',
    ['u'] = 'f',
    ['i'] = 'g',
    ['d'] = 'h',
    ['c'] = 'i',
    ['h'] = 'j',
    ['t'] = 'k',
    ['n'] = 'l',
    ['m'] = 'm',
    ['b'] = 'n',
    ['r'] = 'o',
    ['l'] = 'p',
    ['\''] = 'q',
    ['p'] = 'r',
    ['o'] = 's',
    ['y'] = 't',
    ['g'] = 'u',
    ['k'] = 'v',
    [','] = 'w',
    ['q'] = 'x',
    ['f'] = 'y',
    [';'] = 'z',
    ['A'] = 'A',
    ['X'] = 'B',
    ['J'] = 'C',
    ['E'] = 'D',
    ['>'] = 'E',
    ['U'] = 'F',
    ['I'] = 'G',
    ['D'] = 'H',
    ['C'] = 'I',
    ['H'] = 'J',
    ['T'] = 'K',
    ['N'] = 'L',
    ['M'] = 'M',
    ['B'] = 'N',
    ['R'] = 'O',
    ['L'] = 'P',
    ['\''] = 'Q',
    ['P'] = 'R',
    ['O'] = 'S',
    ['Y'] = 'T',
    ['G'] = 'U',
    ['K'] = 'V',
    ['<'] = 'W',
    ['Q'] = 'X',
    ['F'] = 'Y',
    [':'] = 'Z'
}

local options = {
    noremap = true,
    silent = false,
}

local function qwertyToDvorak(letter)
    if qwertyToDvorakMap[letter] then
        return qwertyToDvorakMap[letter]
    else
        return letter
    end
end

local function dvorakToQwerty(letter)
    if dvorakToQwertyMap[letter] then
        return dvorakToQwertyMap[letter]
    else
        return letter
    end
end

local function mapString(inputString, transformationFunction)
    local transformedString = ""

    for i = 1, #inputString do
        local char = inputString:sub(i, i)
        local transformedChar = transformationFunction(char)
        transformedString = transformedString .. transformedChar
    end
    return transformedString
end

function mapToCurrentKeyboard(string)
    if keyboard == 'dvorak' then
        return mapString(string, qwertyToDvorak)
    else
        return string
    end
end

function remapNvim(nvimMode, myCommand, nvimCommand)
    myCommand = mapToCurrentKeyboard(myCommand)
    -- vim.api.nvim_set_keymap(nvimMode, myCommand, nvimCommand, options)
    vim.keymap.set(nvimMode, myCommand, nvimCommand, options)
end

function remapVsCode(nvimMode, myCommand, vsCodeCommand)
    myCommand = mapToCurrentKeyboard(myCommand)
    vsCodeCommand = "<Cmd>call VSCodeNotify('" .. vsCodeCommand .. "')<CR>"
    vim.keymap.set(nvimMode, myCommand, vsCodeCommand, options)
end

