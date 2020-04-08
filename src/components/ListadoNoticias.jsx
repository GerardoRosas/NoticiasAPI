import React from 'react';
import Noticia from './Noticias';

const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={Noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}
 
export default ListadoNoticias;