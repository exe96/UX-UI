/**
 *  @litener tiene dos opciones una corresponde al elemento seleccionado, ejemplo clase, id usa queryselector
 * @listener el segundo elemento es la pagina donde va, simpre empieza desde la actual 
 * 
*/
export   class options_proyect
{
    listener(item,page){
    
        
        document.querySelector(item).addEventListener('click', function(){
            
            let path=window.location.pathname;
            sessionStorage.setItem("info",item);
            window.location.href = page;
          
        }) }
            
        
    
}
/**
 * @create sirve para abrir pdfs
 * @item es un query selector ahi que poner ejemplo .about
 * @path es el camino donde esta el pdf
 * 
 */
export class button_event{
    create(item,path){
        document.querySelector(item).addEventListener('click', function(){
            window.open(path, '_blank');
          
        })
    }
}

