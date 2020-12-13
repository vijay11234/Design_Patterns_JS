/********************************************
 * @Purpose: Singleton pattern implementation
 * @File: SingletonPatternBusinesslogic.js
 * 
 ********************************************/

let Sharefolderaccess = function(){

    let SharefolderaccessInstance;

    //pattern function
    function pattern(){
        let isaccess = false;

        function readaccess(){
            isaccess  = true;
        }

        function writeaccess(){
            isaccess = true;
        }

        function folderaccess(){
            return isaccess ? "Given read access" : "User got read access"
        }

        return{
            readaccess : readaccess,
            writeaccess : writeaccess,
            folderaccess : folderaccess,
        };
    }

    return{
        getInstance : function (){
            if(!SharefolderaccessInstance) SharefolderaccessInstance = pattern();
            return SharefolderaccessInstance;
        },
    };
};

module.exports = new Sharefolderaccess();