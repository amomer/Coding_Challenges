var s = "bar";
var t = "foo";
/*if(s.length != t.length)
{
    return false;
}*/
const map1 = [256];
const map2 = [256];
for(var i = 0; i < s.length; i++)
{
    console.log(map1[s.charAt(i)]);
    console.log(map2[t.charAt(i)]);
    /*if(map1[s.charAt(i)] != map2[t.charAt(i)])
        {
            return false;
        }*/
    map1[s.charAt(i)] = i + 1;
    map2[t.charAt(i)] = i + 1;
}
    //console.log(map1[s.charAt(0)]);
    //console.log(map2[t.charAt(0)]);