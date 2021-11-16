/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[10,12],$V1=[1,19],$V2=[1,20],$V3=[1,21],$V4=[1,22],$V5=[1,23],$V6=[1,24],$V7=[1,25],$V8=[1,29],$V9=[14,30,33,38,41,42,43,45],$Va=[14,30,33,37,38,41,42,43,45,47],$Vb=[30,33,38,41,42,43,45,47],$Vc=[10,12,30],$Vd=[1,44],$Ve=[17,35,64],$Vf=[1,50],$Vg=[1,47],$Vh=[1,46],$Vi=[1,48],$Vj=[1,49],$Vk=[1,63],$Vl=[1,64],$Vm=[1,65],$Vn=[1,66],$Vo=[1,67],$Vp=[1,68],$Vq=[1,69],$Vr=[1,70],$Vs=[1,71],$Vt=[1,72],$Vu=[1,73],$Vv=[1,74],$Vw=[1,75],$Vx=[19,35,48,49,50,51,52,53,54,55,56,57,58,59,60,64],$Vy=[35,64],$Vz=[19,35,48,49,53,54,55,56,57,58,59,60,64],$VA=[19,35,48,49,50,51,53,54,55,56,57,58,59,60,64],$VB=[19,35,53,54,55,56,57,58,59,60,64],$VC=[19,35,53,54,57,60,64];
var parser = {trace: function trace () {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"start":3,"program":4,"EOF":5,"PROGRAM":6,"program_repetition0":7,"code_section":8,"var_section":9,"VAR":10,"var_section_repetition_plus0":11,"BEGIN":12,"code_section_repetition_plus0":13,"END":14,"declaration":15,"id_list":16,":":17,"type":18,";":19,"INT":20,"BOOL":21,"operator":22,"assign_op":23,"if_op":24,"for_op":25,"while_op":26,"read_op":27,"write_op":28,"block_op":29,"ID":30,"=":31,"expression":32,"IF":33,"(":34,")":35,"THEN":36,"ELSE":37,"FOR":38,"TO":39,"DO":40,"WHILE":41,"READ":42,"WRITE":43,"expression_list":44,"{":45,"block_op_repetition0":46,"}":47,"+":48,"-":49,"*":50,"/":51,"^":52,"OR":53,"AND":54,">":55,"<":56,"==":57,">=":58,"<=":59,"!=":60,"NOT":61,"BOOL_CONST":62,"INT_CONST":63,",":64,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"PROGRAM",10:"VAR",12:"BEGIN",14:"END",17:":",19:";",20:"INT",21:"BOOL",30:"ID",31:"=",33:"IF",34:"(",35:")",36:"THEN",37:"ELSE",38:"FOR",39:"TO",40:"DO",41:"WHILE",42:"READ",43:"WRITE",45:"{",47:"}",48:"+",49:"-",50:"*",51:"/",52:"^",53:"OR",54:"AND",55:">",56:"<",57:"==",58:">=",59:"<=",60:"!=",61:"NOT",62:"BOOL_CONST",63:"INT_CONST",64:","},
productions_: [0,[3,2],[4,3],[9,2],[8,3],[15,4],[18,1],[18,1],[22,2],[22,1],[22,1],[22,1],[22,2],[22,2],[22,1],[23,3],[24,6],[24,8],[25,10],[26,6],[27,4],[28,4],[29,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,3],[32,2],[32,3],[32,1],[32,1],[32,1],[16,3],[16,1],[44,3],[44,1],[7,0],[7,2],[11,1],[11,2],[13,1],[13,2],[46,0],[46,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1]
break;
case 2:
this.$ = {type:"program", value:[$$[$0-1], $$[$0]]}
break;
case 3:
this.$ = {type:"variables section", value: $$[$0]}
break;
case 4:
this.$ = {type:"code section", value:$$[$0-1]}
break;
case 5:
initId($$[$0-3], $$[$0-1], yylineno); this.$ = {type:"declaration", value:$$[$0-3]}
break;
case 8:
this.$ = {type:"assign", value: $$[$0-1]}
break;
case 9:
this.$ = {type:"if",     value: $$[$0]}
break;
case 10:
this.$ = {type:"for",    value: $$[$0]}
break;
case 11:
this.$ = {type:"while",  value: $$[$0]}
break;
case 12:
this.$ = {type:"read",   value: $$[$0-1]}
break;
case 13:
this.$ = {type:"write",  value: $$[$0-1]}
break;
case 14:
this.$ = {type:"block",  value: $$[$0]}
break;
case 15:
this.$ = [$$[$0-2], $$[$0]]; setId($$[$0-2], $$[$0], yylineno)
break;
case 16: case 19:
this.$ = [$$[$0-3], $$[$0]]
break;
case 17:
this.$ = [$$[$0-5], $$[$0-2], $$[$0]]
break;
case 18:
this.$ = [$$[$0-7], $$[$0-3], $$[$0]]
break;
case 20: case 21: case 22: case 37:
this.$ = $$[$0-1]
break;
case 23:
this.$ = {type: 'int_add',  value:[$$[$0-2], $$[$0]]}
break;
case 24:
this.$ = {type: 'int_sub',  value:[$$[$0-2], $$[$0]]}
break;
case 25:
this.$ = {type: 'int_mul',  value:[$$[$0-2], $$[$0]]}
break;
case 26:
this.$ = {type: 'int_div',  value:[$$[$0-2], $$[$0]]}
break;
case 27:
this.$ = {type: 'int_pow',  value:[$$[$0-2], $$[$0]]}
break;
case 28:
this.$ = {type: 'bool_or',  value: [$$[$0-2], $$[$0]]}
break;
case 29:
this.$ = {type: 'bool_and', value: [$$[$0-2], $$[$0]]}
break;
case 30:
this.$ = {type: 'bool_g',   value: [$$[$0-2], $$[$0]]}
break;
case 31:
this.$ = {type: 'bool_l',   value: [$$[$0-2], $$[$0]]}
break;
case 32:
this.$ = {type: 'bool_e',   value: [$$[$0-2], $$[$0]]}
break;
case 33:
this.$ = {type: 'bool_ge',  value: [$$[$0-2], $$[$0]]}
break;
case 34:
this.$ = {type: 'bool_le',  value: [$$[$0-2], $$[$0]]}
break;
case 35:
this.$ = {type: 'bool_ne',  value: [$$[$0-2], $$[$0]]}
break;
case 36:
this.$ = {type: 'bool_not', value: $$[$0]}
break;
case 38: case 39: case 40: case 42: case 44:
this.$ = $$[$0]
break;
case 41: case 43:
this.$ = concatList($$[$0-2], $$[$0])
break;
case 45: case 51:
this.$ = [];
break;
case 46: case 48: case 50: case 52:
$$[$0-1].push($$[$0]);
break;
case 47: case 49:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:[1,3]},{1:[3]},{5:[1,4]},o($V0,[2,45],{7:5}),{1:[2,1]},{8:6,9:7,10:[1,9],12:[1,8]},{5:[2,2]},o($V0,[2,46]),{13:10,22:11,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7},{11:26,15:27,16:28,30:$V8},{14:[1,30],22:31,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7},o($V9,[2,49]),{19:[1,32]},o($Va,[2,9]),o($Va,[2,10]),o($Va,[2,11]),{19:[1,33]},{19:[1,34]},o($Va,[2,14]),{31:[1,35]},{34:[1,36]},{34:[1,37]},{34:[1,38]},{34:[1,39]},{34:[1,40]},o($Vb,[2,51],{46:41}),o($V0,[2,3],{16:28,15:42,30:$V8}),o($Vc,[2,47]),{17:[1,43],64:$Vd},o($Ve,[2,42]),{5:[2,4]},o($V9,[2,50]),o($Va,[2,8]),o($Va,[2,12]),o($Va,[2,13]),{30:$Vf,32:45,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:51,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{23:52,30:$V1},{30:$Vf,32:53,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{16:54,30:$V8},{30:$Vf,32:56,34:$Vg,44:55,61:$Vh,62:$Vi,63:$Vj},{22:58,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7,47:[1,57]},o($Vc,[2,48]),{18:59,20:[1,60],21:[1,61]},{30:[1,62]},o([19,35],[2,15],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw}),{30:$Vf,32:76,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:77,34:$Vg,61:$Vh,62:$Vi,63:$Vj},o($Vx,[2,38]),o($Vx,[2,39]),o($Vx,[2,40]),{35:[1,78],48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw},{35:[1,79]},{35:[1,80],48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw},{35:[1,81],64:$Vd},{35:[1,82],64:[1,83]},o($Vy,[2,44],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw}),o($Va,[2,22]),o($Vb,[2,52]),{19:[1,84]},{19:[2,6]},{19:[2,7]},o($Ve,[2,41]),{30:$Vf,32:85,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:86,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:87,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:88,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:89,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:90,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:91,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:92,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:93,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:94,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:95,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:96,34:$Vg,61:$Vh,62:$Vi,63:$Vj},{30:$Vf,32:97,34:$Vg,61:$Vh,62:$Vi,63:$Vj},o($Vx,[2,36]),{35:[1,98],48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw},{36:[1,99]},{39:[1,100]},{40:[1,101]},{19:[2,20]},{19:[2,21]},{30:$Vf,32:102,34:$Vg,61:$Vh,62:$Vi,63:$Vj},o($Vc,[2,5]),o($Vz,[2,23],{50:$Vm,51:$Vn,52:$Vo}),o($Vz,[2,24],{50:$Vm,51:$Vn,52:$Vo}),o($VA,[2,25],{52:$Vo}),o($VA,[2,26],{52:$Vo}),o($Vx,[2,27]),o([19,35,53,64],[2,28],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw}),o([19,35,53,54,64],[2,29],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw}),o($VB,[2,30],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo}),o($VB,[2,31],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo}),o($VC,[2,32],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,55:$Vr,56:$Vs,58:$Vu,59:$Vv}),o($VB,[2,33],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo}),o($VB,[2,34],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo}),o($VC,[2,35],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,55:$Vr,56:$Vs,58:$Vu,59:$Vv}),o($Vx,[2,37]),{22:103,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7},{34:[1,104]},{22:105,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7},o($Vy,[2,43],{48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw}),o([14,30,33,38,41,42,43,45,47],[2,16],{37:[1,106]}),{30:$Vf,32:107,34:$Vg,61:$Vh,62:$Vi,63:$Vj},o($Va,[2,19]),{22:108,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7},{35:[1,109],48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,55:$Vr,56:$Vs,57:$Vt,58:$Vu,59:$Vv,60:$Vw},o($Va,[2,17]),{40:[1,110]},{22:111,23:12,24:13,25:14,26:15,27:16,28:17,29:18,30:$V1,33:$V2,38:$V3,41:$V4,42:$V5,43:$V6,45:$V7},o($Va,[2,18])],
defaultActions: {4:[2,1],6:[2,2],30:[2,4],60:[2,6],61:[2,7],81:[2,20],82:[2,21]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        compiler.error = true;
        errors.value += error + '\n';
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comments */
break;
case 2:return 6;
break;
case 3:return 10;
break;
case 4:return 12;
break;
case 5:return 14;
break;
case 6:return 20;
break;
case 7:return 21;
break;
case 8:return 33;
break;
case 9:return 36;
break;
case 10:return 37;
break;
case 11:return 38;
break;
case 12:return 39;
break;
case 13:return 40;
break;
case 14:return 41;
break;
case 15:return 42;
break;
case 16:return 43;
break;
case 17:return 61;
break;
case 18:return 53;
break;
case 19:return 54;
break;
case 20:return 62;
break;
case 21:return 63;
break;
case 22:return 30;
break;
case 23:return 57;
break;
case 24:return 58;
break;
case 25:return 59;
break;
case 26:return 60;
break;
case 27:return 31;
break;
case 28:return 50;
break;
case 29:return 51;
break;
case 30:return 49;
break;
case 31:return 48;
break;
case 32:return 52;
break;
case 33:return 55;
break;
case 34:return 56;
break;
case 35:return 34;
break;
case 36:return 35;
break;
case 37:return 45;
break;
case 38:return 47;
break;
case 39:return 64;
break;
case 40:return 19;
break;
case 41:return 17;
break;
case 42:return 5;
break;
case 43:return 'INVALID';
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:program\b)/,/^(?:var\b)/,/^(?:begin\b)/,/^(?:end\b)/,/^(?:int\b)/,/^(?:bool\b)/,/^(?:if\b)/,/^(?:then\b)/,/^(?:else\b)/,/^(?:for\b)/,/^(?:to\b)/,/^(?:do\b)/,/^(?:while\b)/,/^(?:read\b)/,/^(?:write\b)/,/^(?:not\b)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:true|false\b)/,/^(?:([-]?[1-9]\d*|0)\b)/,/^(?:[a-zA-Z][0-9a-zA-Z]*\b)/,/^(?:==)/,/^(?:>=)/,/^(?:<=)/,/^(?:!=)/,/^(?:=)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:>)/,/^(?:<)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?:;)/,/^(?::)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}