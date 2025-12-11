var fs = require('fs');

    fs.writeFile( 'vishalooo.txt' , 'hello vishal full stack developer',  (error) => {
        if (error) throw error;
       
         console.log('file created successfully');

    })
    
    fs.readFile('vishalooo.txt', 'utf-8', (error,data) => {
        if (error) throw error
       console.log(data);
       

    })

    fs.appendFile('vishalooo.txt', '\n vishal.txt', (error,data) => {
        if (error) throw error;
        console.log(data);
    })

    fs.rename('vishalooo.txt', 'vishalrenamed.txt', (error) => {
        if (error) throw error;
        console.log('file renamed successfully');
    })
    





































