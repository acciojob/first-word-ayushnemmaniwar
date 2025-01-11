function firstWord(s) {
  // your code here
	let n = s.length;
    let i=0;
    while(i<n && s[i]===' ') {
        i++;
    }
    let ans='';
    while(i<n && s[i]!==' ') {
        ans=ans+s[i];
        i++;
    }
    return ans;
} 

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
