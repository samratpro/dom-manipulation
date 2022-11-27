var text = `boleh di kirim ke email saya ekoprasetyo.crb@outlook.com tks... boleh minta kirim ke db.maulana@gmail.com. dee.wien@yahoo.com. . 
deninainggolan@yahoo.co.id Senior Quantity Surveyor
Fajar.rohita[a]hotmail.com, terimakasih bu Cindy Hartanto
firmansyah1404(a)gmail.com saya mau dong bu cindy
fransiscajw@gmail.com 
Hi Cindy ...pls share the Salary guide to donny_tri_wardono@yahoo.co.id thank a`; 

function extractEmails (text){
    text = text.replaceAll('(a)','@').replaceAll('[a]','@')
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    }
     
console.log(extractEmails(text));
    