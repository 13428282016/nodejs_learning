var assert=require('assert');
//assert.fail(1==2,[true,false,1,2,3],'actual :1==2 expectd: true',',')
//assert.ok(false,'Tests if value is truthy, it is equivalent to assert.equal(true, !!value, message);')
//�����׳��쳣���쳣ת��Ϊ�ַ���ʱ�������һ��������
assert.throws(function(){
    throw new Error("there is a funtion throwing a error ");
},/matcherror/)
//�����׳��쳣���쳣������Error����
assert.throws(function(){
    throw new Error("there is a funtion throwing a error ");
},Error)

