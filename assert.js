var assert=require('assert');
//assert.fail(1==2,[true,false,1,2,3],'actual :1==2 expectd: true',',')
//assert.ok(false,'Tests if value is truthy, it is equivalent to assert.equal(true, !!value, message);')
//必须抛出异常且异常转化为字符串时必须符合一个正则表达
assert.throws(function(){
    throw new Error("there is a funtion throwing a error ");
},/matcherror/)
//必须抛出异常且异常必须是Error类型
assert.throws(function(){
    throw new Error("there is a funtion throwing a error ");
},Error)

