/********************************************
 * @Purpose: Singleton pattern implementation
 * @File: SingletonPatternMain
 * 
 ********************************************/

 const Sharefolderaccess = require("./SingletonPatternBusinesslogic");

 let firstInstance = Sharefolderaccess.getInstance();
 let secondInstance = Sharefolderaccess.getInstance();

 firstInstance.readaccess();
 console.log(firstInstance.folderaccess());

