
var buff=new Buffer(1024);
console.log(buff.length);//1024

buff= new Buffer([1,2,3]);
console.log(buff.length);//3
buff = new Buffer(["��",'��','��']);
console.log(buff.length,buff.toString());//3
buff=new Buffer("�쳲����",'utf8');
console.log(buff.length,buff.toString());//18
buff=new Buffer("abcd",'utf8');
console.log(buff.length,buff.toString());//4

//utf8�ַ�����1-6�����Ը���ÿ���ַ���һ���ֽ��ж������ַ�����
//0xxxxxxx
//110xxxxx 10xxxxxx
//1110xxxx 10xxxxxx 10xxxxxx
//11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
//111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
//1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
console.log(Buffer.byteLength("�Ұ���",'utf8'));//14
console.log(Buffer.isBuffer(buff),Buffer.isBuffer([]));//true false
var buf1=new Buffer("1234");
var buf2= new Buffer("abcd");
var buf3=Buffer.concat([buf1,buf2]);//1234abcd
var buf4=Buffer.concat([buf1,buf2],6);//1234ab
var buf5=new Buffer(buf4);//1234AB
console.log(buf3.toString(),buf4.toString(),buf5.toString());
var buf6=new Buffer("0123");
console.log(Buffer("1").compare(Buffer("2")),Buffer("2").compare(Buffer("1")),Buffer("1").compare(Buffer("1")));//-1,1,0


buf1.write("dsadassdas");//buf�ĳ���Ϊ4 �������Ľض�,buffer�ĳ��Ȳ��ܸı�
console.log(buf1.toString());//dasd


var buf7 =buf1.slice(2,3);
console.log(buf1.toString(),buf7.toString());//dasd a
var buf7=Buffer("12345678910");
buf7.write("aaa",2);
console.log(buf7.toString());//12aaa678910
buf7=Buffer("12345678910");
buf7.write("aaa",2,1);
console.log(buf7.toString());//12a45678910
//BIG-ENDIAN���ǵ�λ�ֽ��ŷ����ڴ�ĸ߶ˣ���λ�ֽ��ŷ����ڴ�ĵͶˡ���LITTLE-ENDIAN�����෴��  ����int a = 0x05060708  ��BIG-ENDIAN������´��Ϊ��  �ֽں� 0 1 2 3  ����05 06 07 08  ��LITTLE-ENDIAN������´��Ϊ��  �ֽں� 0 1 2 3  ����08 07 06 05
var b = new Buffer(6);
b.writeUIntBE(0x1234567890ab, 0, 6);//1234567890ab
console.log(b);
b.writeUIntLE(0x1234567890ab, 0, 6);//ab9078563412
console.log(b);
b.writeIntBE(-1, 0, 6);//ff ff ff ff ff ff
console.log(b);
b.writeIntBE(1, 0, 6);//00 00 00 00 00 001
console.log(b);
b.writeIntBE(-1, 0, 4);//ff ff ff ff
console.log(b);
b.writeIntBE(1, 0, 4);//00 00 00 01
console.log(b);

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97; // 97 is ASCII a
}
buf.toString('ascii'); // outputs: abcdefghijklmnopqrstuvwxyz
buf.toString('ascii',0,5); // outputs: abcde
buf.toString('utf8',0,5); // outputs: abcde
buf.toString(undefined,0,5); // encoding defaults to 'utf8', outputs abcde

console.log(Buffer('abcd').toJSON());//{ type: 'Buffer', data: [ 97, 98, 99, 100 ] }

buf1=new Buffer('abcdefg');
buf2=new Buffer('1234567');
buf1.copy(buf2,0,0,6);
console.log(buf2.toString());//abcdef7
buf2.fill(0);
console.log(buf2);//00 00 00 00 00 00 00