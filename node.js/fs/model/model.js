function gettime(ext){
    switch (ext){
        case '.html':
            return 'text/html';
        case '.css'  :
            return 'text/css';
        case '.js'  :
            return 'text.js';
    }
}


exports .getmime = getmime;